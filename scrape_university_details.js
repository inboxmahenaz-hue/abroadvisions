const fs = require('fs');
const https = require('https');
const path = require('path');

// ── Config ──────────────────────────────────────────────────────────────────
const DATA_JSON_PATH = './data.json';          // your existing 217-entry file
const OUTPUT_PATH    = './enriched_data.json'; // full enriched output
const DELAY_MS       = 800;                    // polite delay between requests
const API_BASE       = 'https://studyabroadsystem.com/coursefinder/coursedetails';
// ────────────────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/149.0.0.0 Safari/537.36',
        'Referer': 'https://studyabroadsystem.com/',
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error for ${url}: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout: ${url}`));
    });
  });
}

function mergeUniversity(base, detail) {
  if (!detail || !detail.success || !detail.data) return base;
  const d = detail.data;

  return {
    // ── Base fields (keep originals) ──────────────────────────────────────
    id:                   base.id,
    university:           base.university,
    country:              base.country,
    intake:               base.intake,
    fee:                  base.fee,
    fee_type:             base.fee_type,
    initials:             base.initials,
    duration:             d.duration             || base.duration,
    currency:             base.currency,
    tuition_fee:          base.tuition_fee,
    tuition_fee_type:     base.tuition_fee_type,
    health_insurance_fee: base.health_insurance_fee,
    university_photo:     base.university_photo,

    // ── Newly enriched fields ─────────────────────────────────────────────
    city:                 d.city                 || null,
    state:                d.state                || null,
    address:              d.address              || null,
    postal_code:          d.postal_code          || null,
    website:              d.website              || null,
    logo:                 d.logo                 || null,

    // Fee breakdown (year-wise tuition)
    tuition_fee_1:        d.tuition_fee_1        || null,
    tuition_fee_2:        d.tuition_fee_2        || null,
    tuition_fee_3:        d.tuition_fee_3        || null,
    tuition_fee_4:        d.tuition_fee_4        || null,
    tuition_fee_5:        d.tuition_fee_5        || null,
    tuition_fee_6:        d.tuition_fee_6        || null,
    tuition_fee_type:     d.tuition_fee_type     || base.tuition_fee_type,
    annual_fee:           d.annual_fee           || null,
    total_fees:           d.total_fees           || null,

    // Hostel
    hostel_fee:           d.hostel_fee           || null,
    hostel_fee_1:         d.hostel_fee_1         || null,
    hostel_fee_2:         d.hostel_fee_2         || null,
    hostel_fee_3:         d.hostel_fee_3         || null,
    hostel_fee_4:         d.hostel_fee_4         || null,
    hostel_fee_5:         d.hostel_fee_5         || null,
    hostel_fee_category:  d.hostel_fee_category  || null,
    hostel_fee_type:      d.hostel_fee_type      || null,
    mess_fee:             d.mess_fee             || null,
    mess_fee_type:        d.mess_fee_type        || null,

    // Other charges
    registration_fee:     d.registration_fee     || null,
    student_services_fee: d.student_services_fee || null,
    library_lab_fee:      d.library_lab_fee      || null,
    other_charges:        d.other_charges        || null,
    administrative_charge:d.administrative_charge|| null,

    // Academic / recognition
    medium:               d.medium               || null,
    degree_level:         d.degree_level         || null,
    intake_month:         d.intake_month         || base.intake,
    course_overview:      d.course_overview      || null,
    program_highlights:   d.program_highlights   || null,
    academic_excellence:  d.academic_excellence  || null,
    research_opportunities: d.research_opportunities || null,
    industry_connections: d.industry_connections || null,
    global_perspective:   d.global_perspective   || null,
    entry_requirements:   d.entry_requirements   || null,
    scholarship_opportunities: d.scholarship_opportunities || null,
    career_prospects:     d.career_prospects     || null,
    recognition:          d.recognition          || null,

    // Detail HTML (contains NMC/WHO/FMGE info as rendered HTML)
    detail_html:          d.detail               || null,
  };
}

async function main() {
  // Load existing data.json
  if (!fs.existsSync(DATA_JSON_PATH)) {
    console.error(`❌ data.json not found at ${DATA_JSON_PATH}`);
    console.error('   Place data.json in the same folder as this script and re-run.');
    process.exit(1);
  }

  const universities = JSON.parse(fs.readFileSync(DATA_JSON_PATH, 'utf8'));
  console.log(`✅ Loaded ${universities.length} universities from data.json`);

  // Load existing progress if any (resume support)
  let enriched = [];
  let doneIds  = new Set();
  if (fs.existsSync(OUTPUT_PATH)) {
    enriched = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'));
    doneIds  = new Set(enriched.map(u => u.id));
    console.log(`🔄 Resuming — ${doneIds.size} already fetched, ${universities.length - doneIds.size} remaining`);
  }

  const todo = universities.filter(u => !doneIds.has(u.id));
  let success = 0, failed = 0;

  for (let i = 0; i < todo.length; i++) {
    const uni = todo[i];
    const url = `${API_BASE}/${uni.id}`;
    const progress = `[${i + 1}/${todo.length}]`;

    try {
      const detail = await fetchJSON(url);
      const merged = mergeUniversity(uni, detail);
      enriched.push(merged);

      const city = merged.city ? ` (${merged.city})` : '';
      console.log(`✅ ${progress} ${uni.university}${city}`);
      success++;
    } catch (err) {
      console.warn(`⚠️  ${progress} FAILED ${uni.university} — ${err.message}`);
      enriched.push(uni); // keep original on failure
      failed++;
    }

    // Save after every university (crash-safe)
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(enriched, null, 2));

    if (i < todo.length - 1) await sleep(DELAY_MS);
  }

  console.log('\n══════════════════════════════════════════');
  console.log(`✅ Done! ${success} enriched, ${failed} failed`);
  console.log(`📁 Output saved to: ${OUTPUT_PATH}`);
  console.log('══════════════════════════════════════════');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
