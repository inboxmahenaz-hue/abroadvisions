const fs = require('fs');

const FILE = './enriched_data.json';

const CITY_OVERRIDES = {
  132: 'Xiamen',
  141: 'Beijing',
  177: 'Dhaka',
  197: 'Bharatpur',
  200: 'Dharan',
  201: 'Imadol, Lalitpur',
  214: 'Pokhara',
  215: 'Ghorahi',
  238: 'Ho Chi Minh City',
  248: 'Sibiu',
};

const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

let count = 0;
const updated = data.map(entry => {
  if (CITY_OVERRIDES[entry.id]) {
    const oldCity = entry.city;
    entry.city = CITY_OVERRIDES[entry.id];
    console.log(`[id ${entry.id}] ${entry.university}: city "${oldCity}" -> "${entry.city}"`);
    count++;
  }
  return entry;
});

fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));
console.log(`\nUpdated ${count} entries. Saved to ${FILE}`);
