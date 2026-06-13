const fs = require('fs');

const FILE = './enriched_data.json';

// List of all known country names (to detect when city field
// mistakenly contains a country name instead of a city)
const COUNTRY_NAMES = [
  'russia', 'bangladesh', 'china', 'nepal', 'georgia', 'uzbekistan',
  'kazakhstan', 'romania', 'kyrgyzstan', 'vietnam', 'uk', 'united kingdom',
  'armenia', 'serbia', 'mauritius', 'indonesia', 'barbados', 'guyana',
  'russian federation'
];

function cityLooksInvalid(city, country) {
  if (!city) return true;
  const c = city.toLowerCase().trim();

  // City equals or contains a country name
  for (const cn of COUNTRY_NAMES) {
    if (c === cn) return true;
    if (c.includes(cn)) return true;
  }

  // Truncated "Cit" instead of "City"
  if (/\bcit\b/.test(c) && !/\bcity\b/.test(c)) return true;

  // City contains a comma (likely multiple fields concatenated)
  if (c.includes(',')) return true;

  return false;
}

// Extract a sensible city name from the address string.
// Strategy: split on commas, take the first segment that
// - isn't purely numeric/postal-code-like
// - isn't a known country name
// - isn't too long (avoid grabbing a full street description)
function deriveCityFromAddress(address, country) {
  if (!address) return null;
  const parts = address.split(',').map(p => p.trim()).filter(Boolean);

  for (const part of parts) {
    const lower = part.toLowerCase();

    // Skip if it's a country name
    if (COUNTRY_NAMES.includes(lower)) continue;

    // Skip pure numbers / postal codes
    if (/^\d+$/.test(part)) continue;

    // Strip trailing postal codes from the segment, e.g. "Samarkand 140100" -> "Samarkand"
    const stripped = part.replace(/\s*\d{4,6}$/, '').trim();
    if (!stripped) continue;

    // Skip segments that look like street addresses (contain digits at start, "Street", "Avenue", "Road" etc.)
    if (/^\d/.test(stripped)) continue;
    if (/\b(street|avenue|road|st\.|ave\.|prospekt|ulitsa|highway|lane|drive)\b/i.test(stripped)) continue;

    // This segment looks like a city
    return stripped;
  }

  return null;
}

function main() {
  const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
  const fixes = [];

  const fixed = data.map(entry => {
    const out = { ...entry };

    if (cityLooksInvalid(out.city, out.country)) {
      const derived = deriveCityFromAddress(out.address, out.country);
      if (derived && derived !== out.city) {
        fixes.push(`[id ${out.id}] ${out.university}: city "${out.city}" -> "${derived}" (from address: "${out.address}")`);
        out.city = derived;
      }
    }

    return out;
  });

  fs.writeFileSync(FILE, JSON.stringify(fixed, null, 2));

  console.log(`Fixed ${fixes.length} city field(s):\n`);
  fixes.forEach(f => console.log(f));
  console.log(`\n📁 Saved to: ${FILE}`);
}

main();
