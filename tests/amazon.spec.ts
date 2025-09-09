import { test, expect , request } from '@playwright/test';
// test('Navigate to amazon Home Page and search product', async ({ page }) => {
//     await page.goto('https://www.amazon.in/')
//     await page.fill('[placeholder="Search Amazon.in"]', 'makeup')
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(5000)
//     // await page.pause()
//    // await expect(page).toHaveURL('https://www.amazon.in/s?k=makeup&crid=7TOZ6BHJZ2KS&sprefix=makeu%2Caps%2C235&ref=nb_sb_noss_2')
// })
// test('Navigate to Meesho Home Page and search product', async ({ page }) => {
//     await page.goto('https://www.meesho.com/')
//     await page.mouse.down()
//     await page.click('#__next > div.sc-bcXHqe.Desktop__PageContentContainer-sc-19e6gnr-0.cppHWG.incPd > div.styles__HomePageWrapper-sc-2pt7ax-0.XeBWn > section.CategorySectionstyled__CategorySection-sc-1crvw74-3.cCdopm > div > a:nth-child(2)')
//     await page.waitForURL("https://www.meesho.com/western-dresses/clp/5S3C")   // await page.pause()
//     //await expect(page).toHaveURL('https://www.meesho.com/western-dresses/clp/5S3C');
//     await page.pause()
// })



test('Meesho navigation with stealth-like headers', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    locale: 'en-US',
    extraHTTPHeaders: {
      'sec-ch-ua':
        '"Not A(Brand";v="99", "Chromium";v="123", "Google Chrome";v="123"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.meesho.com/',
      'Origin': 'https://www.meesho.com',
    },
  });

  const page = await context.newPage();

  // 👀 Important: use waitUntil 'networkidle' so all Akamai checks load
  await page.goto('https://www.meesho.com', { waitUntil: 'networkidle' });

  // Give page some idle time (Akamai sometimes needs JS challenges to settle)
  await page.waitForTimeout(3000);

  await page.click('text=Women Ethnic Wear');
  await expect(page).toHaveURL(/women-ethnic-wear/i);

  await context.close();
});
