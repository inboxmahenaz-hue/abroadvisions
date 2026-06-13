/**
 * Quick test: Can Puppeteer (no cookies, bundled Chromium) load the course finder page?
 *
 * Run: node test_access.js
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

  await new Promise((r) => setTimeout(r, 4000));

  const title = await page.title();
  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 300));
  const buttonCount = await page.$$eval('button', (btns) => btns.length);
  const viewDetailsCount = await page.$$eval('button', (btns) =>
    btns.filter((b) => b.innerText.trim().toLowerCase() === 'view details').length
  );

  console.log('\n--- RESULTS ---');
  console.log('Title:', title);
  console.log('Body preview:', bodyText);
  console.log('Total buttons found:', buttonCount);
  console.log('"View Details" buttons found:', viewDetailsCount);
  console.log('\nLeaving browser open for 30 seconds so you can look...');

  await new Promise((r) => setTimeout(r, 30000));
  await browser.close();
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
