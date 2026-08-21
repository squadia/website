const { chromium } = require('playwright');

const BASE = 'https://www.squadia.io';
const VIEWPORT = { width: 390, height: 844 };

const shots = [
  { path: '/mobile-home-hero.png', url: '/', scroll: 0 },
  { path: '/mobile-home-probleme.png', url: '/', scroll: 1200 },
  { path: '/mobile-home-timeline.png', url: '/', scroll: 2600 },
  { path: '/mobile-home-logos.png', url: '/', scroll: 4200 },
  { path: '/mobile-home-cta.png', url: '/', scroll: 5200 },
  { path: '/mobile-campagne-hero.png', url: '/prospection/campagne', scroll: 0 },
  { path: '/mobile-campagne-timeline.png', url: '/prospection/campagne', scroll: 1200 },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)' });
  const page = await context.newPage();

  for (const shot of shots) {
    await page.goto(BASE + shot.url, { waitUntil: 'networkidle' });
    await page.evaluate((y) => window.scrollTo(0, y), shot.scroll);
    await page.waitForTimeout(800);
    await page.screenshot({ path: '/Users/macmini/Desktop/a corriger' + shot.path, fullPage: false });
    console.log('Shot:', shot.path);
  }

  await browser.close();
})();
