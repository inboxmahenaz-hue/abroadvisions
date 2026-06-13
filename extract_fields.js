const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./enriched_data.json', 'utf8'));

function extractYear(html) {
  if (!html) return null;

  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const patterns = [
    /founded[:\s]+(?:\d{1,2}\s+\w+\s+)?(\d{4})/i,
    /established[:\s\w]{0,20}?(\d{4})/i,
    /opened\s+in\s+(\d{4})/i,
    /since\s+(\d{4})/i,
    /university.*?in\s+(1[89]\d{2}|20[01]\d)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const year = parseInt(match[1]);
      if (year >= 1800 && year <= 2020) return year;
    }
  }

  return null;
}

let found = 0;
let notFound = 0;
const notFoundIds = [];

const updated = data.map(entry => {
  const year = extractYear(entry.detail_html);
  if (year) {
    found++;
  } else {
    notFound++;
    notFoundIds.push(entry.id);
  }
  return { ...entry, established_year: year };
});

fs.writeFileSync('./enriched_data.json', JSON.stringify(updated, null, 2));
console.log(`\n✅ Done. established_year extracted:`);
console.log(`   Found:     ${found}/219`);
console.log(`   Not found: ${notFound}/219`);
console.log(`\nIDs with no year found (${notFoundIds.length}):`);
console.log(notFoundIds.join(', '));

console.log('\n--- Sample results (first 10 with year found) ---');
let shown = 0;
for (const entry of updated) {
  if (entry.established_year) {
    console.log(`  [id ${entry.id}] ${entry.university} → ${entry.established_year}`);
    shown++;
    if (shown >= 10) break;
  }
}