const { chromium } = require('playwright');

const BASE = 'https://www.squadia.io';
const VIEWPORT = { width: 390, height: 844 };

const shots = [
  { path: '/mobile-home-full.png', url: '/' },
  { path: '/mobile-campagne-full.png', url: '/prospection/campagne' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)' });

  for (const shot of shots) {
    const page = await context.newPage();
    await page.goto(BASE + shot.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: '/Users/macmini/Desktop/a corriger' + shot.path, fullPage: true });
    await page.close();
    console.log('Full shot:', shot.path);
  }

  await browser.close();
})();
