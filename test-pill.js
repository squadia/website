import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  console.log("NOT SCROLLED:");
  const nav1 = await page.$eval('nav', el => ({
    classes: el.className,
    width: window.getComputedStyle(el).width,
    left: window.getComputedStyle(el).left,
    cssText: el.style.cssText
  }));
  console.log(nav1);

  await page.evaluate(() => window.scrollBy(0, 200));
  await new Promise(r => setTimeout(r, 1000));
  
  console.log("SCROLLED:");
  const nav2 = await page.$eval('nav', el => ({
    classes: el.className,
    width: window.getComputedStyle(el).width,
    left: window.getComputedStyle(el).left,
    cssText: el.style.cssText
  }));
  console.log(nav2);

  await browser.close();
})();
