const puppeteer = require('puppeteer-core');

(async () => { 
    const browser = await puppeteer.launch({
        headless: false, // headless mode
        executablePath: '/opt/render/.cache/puppeteer/chrome/linux-127.0.6533.119/chrome-linux64/chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Optional: to avoid potential sandbox issues
    });
    console.log('Browser launched');
    
    const page = await browser.newPage();
    console.log('New page created');
    
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto('https://login.live.com', { waitUntil: 'networkidle2' });
    console.log('Navigated to login.live.com');
    
    // Enter your email
    await page.type('input[name="loginfmt"]', 'doomantii@outlook.com');
    console.log('Email entered');

    // Wait for and click the "Next" button
    await page.waitForSelector('button#idSIButton9', { visible: true, timeout: 10000 });
    await page.click('button#idSIButton9');
    console.log('Clicked Next');

    // Wait for the password field to appear
    await page.waitForSelector('input[name="passwd"]', { visible: true });

    // Enter your password
    await page.type('input[name="passwd"]', 'Aloofking%45');
    console.log('Password entered');

    // Click the "Sign in" button
    await page.click('button#idSIButton9');
    console.log('Clicked Sign in');

    // debug error

    
    
    // Handle "Stay signed in?" prompt
    console.log('Waiting for "Stay signed in" button');
    await page.waitForSelector('button#declineButton', { visible: true, timeout: 10000 });
    await page.click('button#declineButton');
    console.log('Clicked Stay signed in');

    // Wait for the page to fully load after login
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    console.log('Logged in successfully');
    
    // Close the browser
    await browser.close();
    console.log('Browser closed');
})();

