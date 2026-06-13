const fs = require('fs');

const INPUT_FILE = './enriched_data.json';
const OUTPUT_FILE = './enriched_data.json';
const REPORT_FILE = './cleanup_report.txt';

// ---------------------------------------------------------------------
// 1. Direct country-name keywords found anywhere in the address
// ---------------------------------------------------------------------
const COUNTRY_KEYWORDS = [
  ['russian federation', 'Russia'],
  ['russia', 'Russia'],
  ['bangladesh', 'Bangladesh'],
  ['uzbekistan', 'Uzbekistan'],
  ['kazakhstan', 'Kazakhstan'],
  ['kyrgyzstan', 'Kyrgyzstan'],
  ['kyrgyz republic', 'Kyrgyzstan'],
  ['romania', 'Romania'],
  ['georgia', 'Georgia'],
  ['armenia', 'Armenia'],
  ['serbia', 'Serbia'],
  ['nepal', 'Nepal'],
  ['vietnam', 'Vietnam'],
  ['viet nam', 'Vietnam'],
  ['united kingdom', 'UK'],
  ['mauritius', 'Mauritius'],
  ['barbados', 'Barbados'],
  ['china', 'China'],
  ["people's republic of china", 'China'],
  ['indonesia', 'Indonesia'],
  ['poland', 'Poland'],
   ['guyana', 'Guyana'],
  ['georgetown', 'Guyana'],
];

// ---------------------------------------------------------------------
// 2. City / region / oblast / province names -> country
//    Built from addresses that have no country keyword at all.
// ---------------------------------------------------------------------
const PLACE_TO_COUNTRY = [
  // --- Russia: cities, oblasts, republics, regions ---
  ['novosibirsk', 'Russia'],
  ['ufa', 'Russia'], ['bashkortostan', 'Russia'],
  ['tyumen', 'Russia'],
  ['ingush', 'Russia'], ['nazran', 'Russia'],
  ['yekaterinburg', 'Russia'], ['sverdlovsk', 'Russia'],
  ['cheboksary', 'Russia'], ['chuvash', 'Russia'],
  ['ulyanovsk', 'Russia'],
  ['vladikavkaz', 'Russia'], ['north ossetia', 'Russia'], ['ossetian', 'Russia'],
  ['nalchik', 'Russia'], ['kabardino-balkar', 'Russia'], ['kabardino balkar', 'Russia'],
  ['chechen', 'Russia'], ['grozny', 'Russia'],
  ['kursk', 'Russia'],
  ['saransk', 'Russia'], ['mordovia', 'Russia'],
  ['volgograd', 'Russia'],
  ['saint petersburg', 'Russia'], ['st. petersburg', 'Russia'], ['st petersburg', 'Russia'], ['petersburg', 'Russia'],
  ['nizhny novgorod', 'Russia'], ['nizhniy novgorod', 'Russia'],
  ['tver', 'Russia'],
  ['voronezh', 'Russia'],
  ['samara', 'Russia'],
  ['sevastopol', 'Russia'], ['crimea', 'Russia'],
  ['moscow', 'Russia'], ['kashirskoe', 'Russia'],
  ['kazan', 'Russia'],
  ['novgorod', 'Russia'],
  ['arkhangelsk', 'Russia'],
  ['omsk', 'Russia'],
  ['rostov', 'Russia'],
  ['orel', 'Russia'], ['oryol', 'Russia'],
  ['kaliningrad', 'Russia'],
  ['kirov', 'Russia'],
  ['ivanovo', 'Russia'],
  ['kemerovo', 'Russia'],
  ['astrakhan', 'Russia'],
  ['amur', 'Russia'], ['blagoveshchensk', 'Russia'],
  ['chita', 'Russia'], ['transbaikal', 'Russia'],
  ['tomsk', 'Russia'],
  ['pskov', 'Russia'],
  ['perm', 'Russia'],
  ['mari el', 'Russia'], ['yoshkar-ola', 'Russia'],
  ['krasnodar', 'Russia'],
  ['krasnoyarsk', 'Russia'],
  ['stavropol', 'Russia'],
  ['tula', 'Russia'],
  ['yaroslavl', 'Russia'],
  ['altai', 'Russia'], ['barnaul', 'Russia'],
  ['kalmyk', 'Russia'], ['elista', 'Russia'],
  ['dagestan', 'Russia'], ['makhachkala', 'Russia'],
  ['syktyvkar', 'Russia'], ['komi', 'Russia'],
  ['russky island', 'Russia'], ['vladivostok', 'Russia'], ['primorsky', 'Russia'],
  ['orenburg', 'Russia'],
   // --- Kazakhstan: cities ---
  ['shymkent', 'Kazakhstan'],
  ['almaty', 'Kazakhstan'],
  ['semey', 'Kazakhstan'], ['semipalatinsk', 'Kazakhstan'],
  ['astana', 'Kazakhstan'],
  ['karaganda', 'Kazakhstan'],
  ['aktobe', 'Kazakhstan'],
  ['atyrau', 'Kazakhstan'],
  ['oral', 'Kazakhstan'],

  // --- Georgia: cities ---
  ['tbilisi', 'Georgia'],
  ['kutaisi', 'Georgia'],
  ['batumi', 'Georgia'],

  // --- China: cities/provinces ---
  ["xi'an", 'China'], ['xian', 'China'], ['shaanxi', 'China'],
  ['suzhou', 'China'],
  ['xuzhou', 'China'],
  ['hangzhou', 'China'], ['zhejiang', 'China'],
  ['changchun', 'China'], ['jilin', 'China'],
  ['jinan', 'China'], ['shandong', 'China'],
  ['nanjing', 'China'], ['jiangsu', 'China'], ['jiangning', 'China'],
  ['qingdao', 'China'],
  ['xiamen', 'China'], ['fujian', 'China'],
  ['xinjiang', 'China'], ['urumqi', 'China'], ['ürümqi', 'China'],
  ['ningbo', 'China'],
  ['guangzhou', 'China'], ['haizhu', 'China'], ['jianggao', 'China'],
  ['nanchong', 'China'], ['sichuan', 'China'],
  ['zhenjiang', 'China'],
  ['nantong', 'China'],
  ['kunming', 'China'], ['yunnan', 'China'],
  ['beijing', 'China'],
  ['yangzhou', 'China'],
  ['hefei', 'China'], ['anhui', 'China'],
  ['wenzhou', 'China'],
  ['zhengzhou', 'China'], ['henan', 'China'],
  ['harbin', 'China'],
  ['nanning', 'China'], ['guangxi', 'China'],
  ['chongqing', 'China'],

  // --- Bangladesh: cities/areas ---
  ['dhaka', 'Bangladesh'],
  ['gazipur', 'Bangladesh'],
  ['chittagong', 'Bangladesh'], ['chattogram', 'Bangladesh'],
  ['sylhet', 'Bangladesh'],
  ['khulna', 'Bangladesh'],
  ['rangpur', 'Bangladesh'],
  ['comilla', 'Bangladesh'], ['cumilla', 'Bangladesh'],
  ['mymensingh', 'Bangladesh'],
  ['jashore', 'Bangladesh'], ['jessore', 'Bangladesh'],
  ['manikganj', 'Bangladesh'],
  ['sirajganj', 'Bangladesh'],
  ['tangail', 'Bangladesh'],
  ['narayangonj', 'Bangladesh'], ['narayanganj', 'Bangladesh'],
  ['birgunj', 'Nepal'], // careful - birgunj is Nepal not Bangladesh

  // --- Nepal: cities/areas ---
  ['kathmandu', 'Nepal'],
  ['lalitpur', 'Nepal'], ['lagankhel', 'Nepal'],
  ['gorkaneshwor', 'Nepal'], ['gokarneshwor', 'Nepal'],
  ['jorpati', 'Nepal'],
  ['pokhara', 'Nepal'],
  ['biratnagar', 'Nepal'],
  ['bhairahawa', 'Nepal'], ['siddharthanagar', 'Nepal'],
  ['nepalgunj', 'Nepal'], ['banke', 'Nepal'],
  ['chitwan', 'Nepal'], ['bharatpur', 'Nepal'],
  ['morang', 'Nepal'], ['budhiganga', 'Nepal'],
  ['birtamode', 'Nepal'],
  ['ghorahi', 'Nepal'], ['dang', 'Nepal'],
  ['maharajgunj', 'Nepal'],
  ['syangja', 'Nepal'], ['syanobharyang', 'Nepal'],
  ['nayabazar', 'Nepal'],

  // --- Uzbekistan: cities ---
  ['samarkand', 'Uzbekistan'],
  ['bukhara', 'Uzbekistan'],
  ['fergana', 'Uzbekistan'],
  ['andijan', 'Uzbekistan'],
  ['navoi', 'Uzbekistan'], ['navoiy', 'Uzbekistan'],
  ['gulistan', 'Uzbekistan'], ['syrdarya', 'Uzbekistan'],
  ['namangan', 'Uzbekistan'],
  ['tashkent', 'Uzbekistan'],

  // --- Kyrgyzstan: cities ---
  ['bishkek', 'Kyrgyzstan'],
  ['jalal-abad', 'Kyrgyzstan'], ['jalal abad', 'Kyrgyzstan'], ['jalalabad', 'Kyrgyzstan'],
  ['osh', 'Kyrgyzstan'],

  // --- Armenia: cities ---
  ['yerevan', 'Armenia'],
  ['gyumri', 'Armenia'],

  // --- Romania: cities ---
  ['bucharest', 'Romania'],
  ['cluj-napoca', 'Romania'], ['cluj napoca', 'Romania'],
  ['sibiu', 'Romania'],
  ['arad', 'Romania'],
  ['kragujevac', 'Serbia'], // careful - this is Serbia
  ['galati', 'Romania'], ['galați', 'Romania'],
  ['constanta', 'Romania'], ['constanța', 'Romania'],
  ['iasi', 'Romania'], ['iași', 'Romania'],
  ['craiova', 'Romania'],
  ['oradea', 'Romania'],

  // --- Serbia: cities ---
  ['nis', 'Serbia'], ['niš', 'Serbia'],

  // --- UK: cities ---
  ['lancaster', 'UK'], ['lancashire', 'UK'],
  ['uxbridge', 'UK'], ['middlesex', 'UK'],
  ['buckingham', 'UK'],

  // --- Vietnam: cities ---
  ['ho chi minh', 'Vietnam'], ['binh thanh', 'Vietnam'],
  ['da nang', 'Vietnam'],
  ['hanoi', 'Vietnam'], ['ha noi', 'Vietnam'],

  // --- Mauritius ---
  ['mauritius', 'Mauritius'],

  // --- Timor-Leste / East Timor (Universidade Católica Timorense) ---
  ['timorense', 'Indonesia'], // closest grouping if not separately listed
  ['de balide', 'Indonesia'],

  // --- Barbados ---
  ['chelsea house chelsea road', 'Barbados'], // Bridgetown International University
  ['bridgetown', 'Barbados'],
];

// ---------------------------------------------------------------------
// Known valid countries for the final filter bar
// ---------------------------------------------------------------------
const KNOWN_COUNTRIES = new Set([
  'Russia', 'Bangladesh', 'China', 'Nepal', 'Georgia', 'Uzbekistan',
  'Kazakhstan', 'Romania', 'Kyrgyzstan', 'Vietnam', 'UK', 'Armenia',
  'Serbia', 'Mauritius', 'Indonesia', 'Barbados', 'Poland', 'Guyana'
]);

// Manual overrides for specific IDs that are too ambiguous for rules
// (id -> country)
const MANUAL_OVERRIDES = {
  243: 'Indonesia', // Universidade Católica Timorense Sao Joao Paulo II (East Timor)
};

function cleanFeeString(val) {
  if (val == null || typeof val !== 'string') return val;
  let cleaned = val.replace(/\([a-zA-Z]{2,5}\)/g, '').trim();
  return cleaned;
}

function cleanAddress(addr) {
  if (!addr || typeof addr !== 'string') return addr;
  let cleaned = addr.trim();
  cleaned = cleaned.replace(/,\s*,/g, ',');
  cleaned = cleaned.replace(/[.,]+\s*$/, '');
  return cleaned.trim();
}

// Try to derive country from address + city + state fields combined
function deriveCountry(entry) {
  if (MANUAL_OVERRIDES[entry.id]) return MANUAL_OVERRIDES[entry.id];

  const haystack = [entry.address, entry.city, entry.state, entry.university]
    .filter(Boolean)
    .join(' | ')
    .toLowerCase();

  if (!haystack) return null;

  // 1. Direct country keyword match
  for (const [kw, country] of COUNTRY_KEYWORDS) {
    if (haystack.includes(kw)) return country;
  }

  // 2. City/region lookup
  for (const [kw, country] of PLACE_TO_COUNTRY) {
    if (haystack.includes(kw)) return country;
  }

  return null;
}

const FEE_FIELDS = [
  'tuition_fee', 'tuition_fee_1', 'tuition_fee_2', 'tuition_fee_3',
  'tuition_fee_4', 'tuition_fee_5', 'tuition_fee_6',
  'annual_fee', 'total_fees',
  'hostel_fee', 'hostel_fee_1', 'hostel_fee_2', 'hostel_fee_3',
  'hostel_fee_4', 'hostel_fee_5',
  'health_insurance_fee', 'registration_fee', 'other_charges',
  'administrative_charge', 'mess_fee', 'mess_fee_1', 'mess_fee_2',
  'mess_fee_3', 'mess_fee_4', 'mess_fee_5', 'library_lab_fee',
  'student_services_fee'
];

function main() {
  const raw = fs.readFileSync(INPUT_FILE, 'utf8');
  const data = JSON.parse(raw);

  const report = [];
  let countryFixed = 0;
  let countryUnresolved = 0;
  let addressCleaned = 0;
  let feesCleaned = 0;

  const cleaned = data.map(entry => {
    const out = { ...entry };

    if (out.address) {
      const newAddr = cleanAddress(out.address);
      if (newAddr !== out.address) addressCleaned++;
      out.address = newAddr;
    }

    const derivedCountry = deriveCountry(out);
    const oldCountry = out.country;

    if (derivedCountry) {
      if (derivedCountry !== oldCountry) {
        countryFixed++;
        report.push(`[id ${out.id}] ${out.university}: country "${oldCountry}" -> "${derivedCountry}" (address: "${out.address}", city: "${out.city}")`);
      }
      out.country = derivedCountry;
    } else {
      if (!KNOWN_COUNTRIES.has(oldCountry)) {
        countryUnresolved++;
        report.push(`[id ${out.id}] ${out.university}: STILL UNRESOLVED (address: "${out.address}", city: "${out.city}", state: "${out.state}")`);
      }
    }

    for (const field of FEE_FIELDS) {
      if (out[field] != null) {
        const newVal = cleanFeeString(out[field]);
        if (newVal !== out[field]) feesCleaned++;
        out[field] = newVal;
      }
    }

    if (out.currency) out.currency = cleanFeeString(out.currency);

    return out;
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cleaned, null, 2));

  const summary = [
    '='.repeat(60),
    'DATA CLEANUP REPORT (v2)',
    '='.repeat(60),
    `Total entries: ${cleaned.length}`,
    `Countries fixed/changed: ${countryFixed}`,
    `Countries still unresolved: ${countryUnresolved}`,
    `Addresses cleaned: ${addressCleaned}`,
    `Fee fields cleaned: ${feesCleaned}`,
    '',
    '--- Details ---',
    ...report
  ].join('\n');

  fs.writeFileSync(REPORT_FILE, summary);

  console.log(summary);
  console.log(`\n📁 Cleaned data saved to: ${OUTPUT_FILE}`);
  console.log(`📄 Full report saved to: ${REPORT_FILE}`);

  const countryCounts = {};
  for (const entry of cleaned) {
    const c = entry.country || 'UNKNOWN';
    countryCounts[c] = (countryCounts[c] || 0) + 1;
  }
  console.log('\n📊 Country distribution after cleanup:');
  for (const [country, count] of Object.entries(countryCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${country}: ${count}`);
  }
}

main();
