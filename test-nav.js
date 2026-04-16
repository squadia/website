import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  // Click the trigger
  await page.click('[data-dropdown="nos-services"]');
  
  // Get the display and rect of dropdown
  const dropdown = await page.$eval('#squadDropdown', el => {
    const rect = el.getBoundingClientRect();
    return {
      display: window.getComputedStyle(el).display,
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
    };
  });
  
  console.log("Dropdown info:", dropdown);

  await browser.close();
})();
