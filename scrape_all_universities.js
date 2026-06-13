const fs = require('fs');
const https = require('https');

// ── Config ──────────────────────────────────────────────────────────────────
const CHANNEL_ID     = 'MjM5Mw==';
const LIST_API       = `https://studyabroadsystem.com/coursefinder/courses?channel_id=${CHANNEL_ID}`;
const DETAIL_API     = 'https://studyabroadsystem.com/coursefinder/coursedetails';
const OUTPUT_PATH    = './enriched_data.json';
const DELAY_MS       = 800;
// ────────────────────────────────────────────────────────────────────────────

const HEADERS = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/149.0.0.0 Safari/537.36',
  'Referer': 'https://studyabroadsystem.com/',
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: HEADERS }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error for ${url}: ${e.message}\nRaw: ${data.slice(0, 200)}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
  });
}

function mergeUniversity(base, detail) {
  if (!detail || !detail.success || !detail.data) return base;
  const d = detail.data;
  return {
    id:                    base.id,
    university:            base.university_name || base.university || base.name,
    country:               base.country,
    intake:                d.intake_month        || base.intake_month || base.intake,
    currency:              base.currency,
    duration:              d.duration            || base.duration,
    initials:              base.initials,
    university_photo:      base.university_photo,
    fee:                   base.fee              || base.tuition_fee,
    fee_type:              base.fee_type         || base.tuition_fee_type,

    // Enriched location
    city:                  d.city                || null,
    state:                 d.state               || null,
    address:               d.address             || null,
    postal_code:           d.postal_code         || null,
    website:               d.website             || null,
    logo:                  d.logo                || null,

    // Enriched fees
    tuition_fee:           d.tuition_fee         || base.tuition_fee,
    tuition_fee_1:         d.tuition_fee_1       || null,
    tuition_fee_2:         d.tuition_fee_2       || null,
    tuition_fee_3:         d.tuition_fee_3       || null,
    tuition_fee_4:         d.tuition_fee_4       || null,
    tuition_fee_5:         d.tuition_fee_5       || null,
    tuition_fee_6:         d.tuition_fee_6       || null,
    tuition_fee_type:      d.tuition_fee_type    || base.tuition_fee_type,
    annual_fee:            d.annual_fee          || null,
    total_fees:            d.total_fees          || null,
    hostel_fee:            d.hostel_fee          || null,
    hostel_fee_1:          d.hostel_fee_1        || null,
    hostel_fee_2:          d.hostel_fee_2        || null,
    hostel_fee_3:          d.hostel_fee_3        || null,
    hostel_fee_4:          d.hostel_fee_4        || null,
    hostel_fee_5:          d.hostel_fee_5        || null,
    hostel_fee_category:   d.hostel_fee_category || null,
    mess_fee:              d.mess_fee            || null,
    registration_fee:      d.registration_fee    || null,
    health_insurance_fee:  d.health_insurance_fee|| base.health_insurance_fee,
    other_charges:         d.other_charges       || null,
    administrative_charge: d.administrative_charge || null,
    student_services_fee:  d.student_services_fee|| null,
    library_lab_fee:       d.library_lab_fee     || null,

    // Academic info
    medium:                d.medium              || null,
    degree_level:          d.degree_level        || null,
    course_overview:       d.course_overview     || null,
    program_highlights:    d.program_highlights  || null,
    recognition:           d.recognition         || null,
    entry_requirements:    d.entry_requirements  || null,
    scholarship_opportunities: d.scholarship_opportunities || null,
    career_prospects:      d.career_prospects    || null,
    academic_excellence:   d.academic_excellence || null,
    research_opportunities:d.research_opportunities || null,
    industry_connections:  d.industry_connections|| null,
    global_perspective:    d.global_perspective  || null,

    // Rich detail HTML (contains NMC/WHO/FMGE info)
    detail_html:           d.detail              || null,
  };
}

async function main() {
  // ── Step 1: Fetch university list ─────────────────────────────────────────
  console.log('📡 Fetching university list from partner API...');
  let universities = [];

  try {
    const listRes = await fetchJSON(LIST_API);
    if (listRes.success && Array.isArray(listRes.data)) {
      universities = listRes.data.filter(u =>
        (u.course_name || u.name || '').toUpperCase().includes('MBBS') ||
        (u.course_type || '') === 'MBBS'
      );
      console.log(`✅ Found ${universities.length} MBBS universities from list API`);
    } else {
      throw new Error('Unexpected list API response: ' + JSON.stringify(listRes).slice(0, 200));
    }
  } catch (err) {
    console.error('❌ List API failed:', err.message);
    console.log('\n⚠️  Falling back to local data.json if available...');
    if (fs.existsSync('./data.json')) {
      universities = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
      console.log(`✅ Loaded ${universities.length} universities from data.json`);
    } else {
      console.error('❌ No data.json found either. Cannot proceed.');
      process.exit(1);
    }
  }

  // ── Step 2: Resume support ────────────────────────────────────────────────
  let enriched = [];
  let doneIds  = new Set();
  if (fs.existsSync(OUTPUT_PATH)) {
    enriched = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'));
    doneIds  = new Set(enriched.map(u => u.id));
    console.log(`🔄 Resuming — ${doneIds.size} already done, ${universities.length - doneIds.size} remaining\n`);
  }

  const todo = universities.filter(u => !doneIds.has(u.id));

  // ── Step 3: Enrich each university ────────────────────────────────────────
  let success = 0, failed = 0;

  for (let i = 0; i < todo.length; i++) {
    const uni = todo[i];
    const url = `${DETAIL_API}/${uni.id}`;
    const progress = `[${i + 1}/${todo.length}]`;

    try {
      const detail = await fetchJSON(url);
      const merged = mergeUniversity(uni, detail);
      enriched.push(merged);
      const city = merged.city ? ` — ${merged.city}` : '';
      console.log(`✅ ${progress} ${merged.university}${city}`);
      success++;
    } catch (err) {
      console.warn(`⚠️  ${progress} FAILED ${uni.university_name || uni.university} — ${err.message}`);
      enriched.push(uni);
      failed++;
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(enriched, null, 2));
    if (i < todo.length - 1) await sleep(DELAY_MS);
  }

  // ── Step 4: Summary ───────────────────────────────────────────────────────
  const countries = {};
  enriched.forEach(u => { countries[u.country] = (countries[u.country] || 0) + 1; });

  console.log('\n══════════════════════════════════════════════════');
  console.log(`✅ Done! ${success} enriched, ${failed} failed`);
  console.log(`📁 Saved to: ${OUTPUT_PATH}`);
  console.log('\n📊 By country:');
  Object.entries(countries).sort((a,b) => b[1]-a[1]).forEach(([c, n]) => {
    console.log(`   ${c}: ${n}`);
  });
  console.log('══════════════════════════════════════════════════');
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
