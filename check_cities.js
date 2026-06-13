const fs = require('fs');

const IDS_TO_CHECK = [132, 141, 173, 177, 179, 184, 191, 197, 200, 201, 214, 215, 238, 248];

const data = JSON.parse(fs.readFileSync('./enriched_data.json', 'utf8'));

for (const id of IDS_TO_CHECK) {
  const entry = data.find(e => e.id === id);
  if (!entry) {
    console.log(`[id ${id}] NOT FOUND`);
    continue;
  }
  console.log(`[id ${id}] ${entry.university}`);
  console.log(`  country: ${entry.country}`);
  console.log(`  city:    ${entry.city}`);
  console.log(`  state:   ${entry.state}`);
  console.log(`  address: ${entry.address}`);
  console.log('');
}
