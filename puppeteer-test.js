const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://ping.eu/');
  
  const elementHandle = await page.$('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > b');
  if (elementHandle) {
    const text = await page.evaluate(element => element.textContent, elementHandle);
    console.log('Element Text:', text);
  } else {
    console.log('Element not found');
  }
  
  await browser.close();
})();
