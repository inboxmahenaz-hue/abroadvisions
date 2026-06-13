const fs = require('fs');
const https = require('https');

const IDS = [10,13,14,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,68,69,70,71,72,73,74,75,76,77,78,79,88,89,90,91,92,93,94,95,96,100,101,102,103,104,105,106,107,108,109,110,112,113,114,115,116,117,118,119,120,121,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,217,218,219,220,221,222,223,224,225,227,228,229,230,231,232,233,235,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263];

const OUTPUT_FILE = './enriched_data.json';
const DELAY_MS = 800;

function fetchCourseDetails(id) {
  return new Promise((resolve, reject) => {
    const url = `https://studyabroadsystem.com/coursefinder/coursedetails/${id}`;
    https.get(url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/149.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (!json.success || !json.data) {
            return reject(new Error(`No data for id ${id}`));
          }
          resolve(json.data);
        } catch (e) {
          reject(new Error(`Failed to parse JSON for id ${id}: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function flattenEntry(id, data) {
  const u = data.university || {};

  // Remove nested university object and detail_html source from top-level data
  // to avoid duplicating the huge HTML blob at two levels
  const { university, ...topLevel } = data;

  return {
    id: id,
    university: u.university_name || data.course_name || null,
    university_id: u.university_id ?? null,
    country: u.country ?? null,
    city: u.city ?? null,
    state: u.state ?? null,
    address: u.address ?? null,
    postal_code: u.postal_code ?? null,
    website: u.website ?? null,
    logo: u.logo ?? null,
    university_photo: u.university_photo ?? null,
    intake_month: u.intake_month ?? topLevel.intake_month ?? null,
    detail_html: u.detail ?? null,
    ...topLevel
  };
}

async function loadExisting() {
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const raw = fs.readFileSync(OUTPUT_FILE, 'utf8');
      const arr = JSON.parse(raw);
      const map = new Map();
      for (const entry of arr) {
        map.set(entry.id, entry);
      }
      return map;
    } catch (e) {
      console.log('⚠️  Could not parse existing enriched_data.json, starting fresh');
      return new Map();
    }
  }
  return new Map();
}

function save(map) {
  const arr = Array.from(map.values()).sort((a, b) => a.id - b.id);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(arr, null, 2));
}

async function main() {
  const existing = await loadExisting();

  // If resuming and an entry already has a non-null university_photo, skip it.
  // Otherwise (e.g. previous broken run where everything is null), re-fetch.
  const idsToFetch = IDS.filter(id => {
    const e = existing.get(id);
    return !e || e.university_photo === null;
  });

  if (idsToFetch.length === 0) {
    console.log('✅ All entries already enriched with photo data. Nothing to do.');
    return;
  }

  console.log(`🔄 Fetching ${idsToFetch.length} of ${IDS.length} universities (resuming/fixing)...\n`);

  let succeeded = 0;
  let failed = 0;
  const failedIds = [];

  for (let i = 0; i < idsToFetch.length; i++) {
    const id = idsToFetch[i];
    try {
      const data = await fetchCourseDetails(id);
      const entry = flattenEntry(id, data);
      existing.set(id, entry);
      succeeded++;
      console.log(`✅ [${i + 1}/${idsToFetch.length}] id ${id}: ${entry.university} (${entry.country || 'country?'}, ${entry.city || 'city?'}) photo=${entry.university_photo ? 'yes' : 'NO'}`);
    } catch (e) {
      failed++;
      failedIds.push(id);
      console.log(`❌ [${i + 1}/${idsToFetch.length}] id ${id}: ${e.message}`);
    }

    // Save progress periodically
    if ((i + 1) % 10 === 0) {
      save(existing);
    }

    await delay(DELAY_MS);
  }

  save(existing);

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Done! ${succeeded} enriched, ${failed} failed`);
  if (failedIds.length) {
    console.log(`❌ Failed IDs: ${failedIds.join(',')}`);
  }
  console.log(`📁 Saved to: ${OUTPUT_FILE}`);

  // Summary stats
  const all = Array.from(existing.values());
  const withPhoto = all.filter(e => e.university_photo).length;
  const withCity = all.filter(e => e.city).length;
  const withCountry = all.filter(e => e.country).length;
  const withDetail = all.filter(e => e.detail_html).length;

  console.log('\n📊 Field coverage:');
  console.log(`   university_photo: ${withPhoto}/${all.length}`);
  console.log(`   city: ${withCity}/${all.length}`);
  console.log(`   country: ${withCountry}/${all.length}`);
  console.log(`   detail_html: ${withDetail}/${all.length}`);
}

main();
