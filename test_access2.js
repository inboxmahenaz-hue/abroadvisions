/**
 * Quick test v2: Wait longer + scroll to trigger lazy-loaded content,
 * then check for "View Details" buttons.
 *
 * Run: node test_access2.js
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

  console.log('Waiting 6 seconds for initial render...');
  await new Promise((r) => setTimeout(r, 6000));

  // Scroll down a few times to trigger any lazy loading
  console.log('Scrolling down to trigger lazy-load...');
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log('Waiting another 3 seconds...');
  await new Promise((r) => setTimeout(r, 3000));

  const title = await page.title();
  const buttonCount = await page.$$eval('button', (btns) => btns.length);
  const buttonTexts = await page.$$eval('button', (btns) =>
    btns.map((b) => b.innerText.trim()).filter((t) => t)
  );
  const viewDetailsCount = await page.$$eval('button', (btns) =>
    btns.filter((b) => b.innerText.trim().toLowerCase() === 'view details').length
  );

  console.log('\n--- RESULTS ---');
  console.log('Title:', title);
  console.log('Total buttons found:', buttonCount);
  console.log('Unique button texts:', [...new Set(buttonTexts)]);
  console.log('"View Details" buttons found:', viewDetailsCount);

  console.log('\nLeaving browser open for 60 seconds so you can look...');
  await new Promise((r) => setTimeout(r, 60000));
  await browser.close();
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
