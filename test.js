const puppeteer = require('puppeteer');

(async () => {
  // Launch Chromium browser
  const browser = await puppeteer.launch({ headless: false }); // Set headless: true if you don't want the browser UI

  // Open a new page
  const page = await browser.newPage();

  // Navigate to google.com
  await page.goto('https://www.google.com');

  // Wait for a few seconds (optional)
  await page.waitForTimeout(5000);

  // Close the browser
  await browser.close();
})();
