/**
 * Test v3: Find what element type "View Details" actually is
 * (button, a, div, etc.) by searching all elements for that text.
 *
 * Run: node test_access3.js
 */

const puppeteer = require('puppeteer');

const TARGET_URL = 'https://careertest.edumilestones.com/overseas-mbbs/?channel_id=MjM5Mw==';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 900 },
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );

  console.log('Navigating...');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 60000 });

  console.log('Waiting 6 seconds...');
  await new Promise((r) => setTimeout(r, 6000));

  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise((r) => setTimeout(r, 800));
  }
  await new Promise((r) => setTimeout(r, 2000));

  // Search ALL elements for text containing "view details" (case-insensitive)
  const matches = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('*'));
    const results = [];

    for (const el of all) {
      // Only check elements with direct text (not huge containers)
      const text = el.textContent.trim();
      if (
        text.toLowerCase().includes('view details') &&
        text.length < 50 // avoid huge parent containers
      ) {
        results.push({
          tag: el.tagName,
          className: el.className,
          text: text,
          childCount: el.children.length,
        });
      }
    }
    return results;
  });

  console.log('\n--- ELEMENTS CONTAINING "view details" ---');
  console.log(JSON.stringify(matches.slice(0, 10), null, 2));
  console.log(`\nTotal matches: ${matches.length}`);

  // Also check for "Shortlist" buttons as reference
  const shortlistMatches = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('*'));
    const results = [];
    for (const el of all) {
      const text = el.textContent.trim();
      if (text.toLowerCase() === 'shortlist') {
        results.push({ tag: el.tagName, className: el.className });
      }
    }
    return results;
  });
  console.log('\n--- "Shortlist" elements (first 3) ---');
  console.log(JSON.stringify(shortlistMatches.slice(0, 3), null, 2));

  console.log('\nLeaving browser open for 60 seconds...');
  await new Promise((r) => setTimeout(r, 60000));
  await browser.close();
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
