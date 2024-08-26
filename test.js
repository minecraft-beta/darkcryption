const puppeteer = require('puppeteer');

(async () => {
  // Launch Chromium using the executable path you found
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/opt/render/.cache/puppeteer/chrome/linux-127.0.6533.119/chrome-linux64/chrome' // Use the path to your Chromium executable
  });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to google.com
  await page.goto('https://www.google.com');

  // Wait for a few seconds (optional)
  await page.waitForTimeout(5000);

  // Close the browser
  await browser.close();
})();
