const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./enriched_data.json', 'utf8'));

// Strip HTML tags to get plain text for inspection
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

// Check a few entries known to have rich detail_html
const SAMPLE_IDS = [71, 13, 10];

for (const id of SAMPLE_IDS) {
  const entry = data.find(e => e.id === id);
  if (!entry || !entry.detail_html) {
    console.log(`[id ${id}] No detail_html`);
    continue;
  }
  const text = stripHtml(entry.detail_html);
  console.log(`\n========== [id ${id}] ${entry.university} ==========`);
  console.log(text.slice(0, 2000));
  console.log(`\n--- (total length: ${text.length} chars) ---`);
}

// Scan ALL entries for FMGE/NExT/pass rate/established mentions
console.log('\n\n========== SCAN FOR KEYWORDS ACROSS ALL ENTRIES ==========');
let fmgeCount = 0, establishedCount = 0, nmcCount = 0, whoCount = 0;
for (const entry of data) {
  if (!entry.detail_html) continue;
  const text = stripHtml(entry.detail_html).toLowerCase();
  if (text.includes('fmge') || text.includes('next')) fmgeCount++;
  if (text.includes('established') || text.includes('founded')) establishedCount++;
  if (text.includes('nmc') || text.includes('national medical commission')) nmcCount++;
  if (text.includes('who') || text.includes('world health organization')) whoCount++;
}
console.log(`FMGE/NExT mentions: ${fmgeCount}/219`);
console.log(`Established/Founded mentions: ${establishedCount}/219`);
console.log(`NMC mentions: ${nmcCount}/219`);
console.log(`WHO mentions: ${whoCount}/219`);

// Print a sample snippet around "FMGE" and "Established" for id 71
const sample = data.find(e => e.id === 71);
if (sample && sample.detail_html) {
  const text = stripHtml(sample.detail_html);
  const fmgeIdx = text.toLowerCase().indexOf('fmge');
  const estIdx = text.toLowerCase().search(/established|founded/);
  console.log('\n--- FMGE snippet (id 71) ---');
  console.log(fmgeIdx >= 0 ? text.slice(Math.max(0, fmgeIdx - 50), fmgeIdx + 300) : 'not found');
  console.log('\n--- Established snippet (id 71) ---');
  console.log(estIdx >= 0 ? text.slice(Math.max(0, estIdx - 50), estIdx + 300) : 'not found');
}
