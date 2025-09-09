import { test, expect } from '@playwright/test';
// test('homepage visit and search any elemet', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', { timeout: 60000 });
//     const searchBox = page.getByPlaceholder('Search for Products')
//     await expect(searchBox).toBeVisible()
//     await searchBox.fill('paper')
//     await page.keyboard.press('Enter')
//     await expect(page).toHaveURL(/s=paper/i)
//     await page.mouse.wheel(0, 200);
// })
// test('Open any element', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', { timeout: 60000, waitUntil: 'domcontentloaded' })
//     await page.mouse.wheel(0, 200)
//     const recentlyViewed = page.getByRole('heading', { name: 'Recently Viewed' })
//     await expect(recentlyViewed).toBeVisible({ timeout: 10000 })  
//     const notebookLink = page.getByRole('link', { name: 'Hans Spiral Notebook Hans' })
//     await expect(notebookLink).toBeVisible({ timeout: 10000 })
//     await notebookLink.click()
//     await page.waitForLoadState('domcontentloaded')
//     await page.waitForTimeout(2000)
// })
// test('See product variation', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', { timeout: 60000, waitUntil: 'domcontentloaded' })
//     const recentlyViewed = page.getByRole('heading', { name: 'Recently Viewed' })
//     await expect(recentlyViewed).toBeVisible({ timeout: 10000 })
//     await recentlyViewed.scrollIntoViewIfNeeded()
//     const notebookLink = page.getByRole('link', { name: 'Hans Spiral Notebook Hans' })
//     await expect(notebookLink).toBeVisible({ timeout: 10000 })
//     await notebookLink.click()
//     await page.waitForLoadState('domcontentloaded')
//     await page.mouse.wheel(0, 300)
// })
// test('product add to cart', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded',
// });
//     const recentlyViewed = page.getByRole('heading', { name: 'Recently Viewed' });
//     await expect(recentlyViewed).toBeVisible({ timeout: 5000 });
//     await recentlyViewed.scrollIntoViewIfNeeded();
//     await page.pause();
//     const notebookLink = page.getByRole('link', { name: 'Hans Spiral Notebook Hans' });
//     await expect(notebookLink).toBeVisible({ timeout: 10000 });
//     await notebookLink.click();
//     await page.waitForLoadState('domcontentloaded');
//     await page.mouse.wheel(0, 300);
//     await page.locator('#pa_select-book-type').selectOption({ label: 'No. : 4' });
//     await page.locator('#pa_no-of-pages').waitFor({ state: 'attached', timeout: 10000 });
//     const options = await page.locator('#pa_no-of-pages option').allTextContents();
//     console.log('Options in dropdown:', options);
//     await page.locator('#pa_no-of-pages').selectOption({ label: '80 Pages' });
//     await page.evaluate(() => window.scrollBy(0, 100));
//     await page.getByRole('button', { name: 'Add to cart' }).click();
//     await page.pause();
// });


// test('product add to cart - new version', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', {
//     timeout: 60000,
//     waitUntil: 'networkidle',
// });
//     const recentlyViewed = page.getByRole('heading', { name: 'Recently Viewed' });
//     await recentlyViewed.waitFor({ state: 'visible', timeout: 10000 });
//     await recentlyViewed.scrollIntoViewIfNeeded();
//     const productLink = page.getByRole('link', { name: 'Hans Spiral Notebook Hans' });
//     await productLink.waitFor({ state: 'visible', timeout: 10000 });
//     await productLink.click();
//     const numberOfPages = page.getByLabel('Number of Pages');
//     await numberOfPages.waitFor({ state: 'visible', timeout: 10000 });
//     await numberOfPages.selectOption('80-pages');
//     const addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
//     await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
//     await addToCartBtn.click();
//     const confirmationMsg = page.getByText('has been added to your cart');
//     await confirmationMsg.waitFor({ state: 'visible', timeout: 10000 });
//     await expect(confirmationMsg).toBeVisible();
// });
// test('homepage visit and search any elemet->', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', { timeout: 60000 });
//     await page.mouse.wheel(0, 500);
//     await page.getByRole('button', { name: /Add to cart/i }).scrollIntoViewIfNeeded();
//     await page.mouse.wheel(0, 500);
//     await page.getByRole('button', { name: /Add to cart/i }).click();
// })
// test('homepage visit and search any elemet->new', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', { timeout: 60000 })
//     await page.getByRole('combobox', { name: 'Search for:' }).click()
//     await page.getByRole('combobox', { name: 'Search for:' }).fill('pap')
//     await page.getByRole('link', { name: 'Lotus Answer Paper', exact: true }).click()
//     await page.waitForURL('https://lotusstationery.in/product/lotus-answer-paper/')
//     await page.getByRole('button', { name: 'a Add to cart' }).click()
//    // await page.pause()
//     await page.waitForTimeout(5000)
//     await page.click('#main > div.woocommerce-notices-wrapper > div > a', { force: true });
// //await page.getByRole('link', { name: 'View cart', exact: true }).click({ force: true });
// });
// test('Add Lotus Answer Paper to cart and click View cart', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/product/lotus-answer-paper/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded',
// })
//     const addToCartBtn = page.locator('button.single_add_to_cart_button')
//     await expect(addToCartBtn).toBeVisible()
//     await addToCartBtn.click()
//     const viewCartBtn = page.locator('#main .woocommerce-notices-wrapper a:has-text("View cart")')
//     await expect(viewCartBtn).toBeVisible({ timeout: 5000 })
//     await viewCartBtn.click()
//     await expect(page).toHaveURL(/.*cart/)
//     await page.click('#post-3134 > div > div > form > table > tbody > tr:nth-child(2) > td > div.wc-proceed-to-checkout > a')
// })
// test('Checkout Page on Lotus Stationery', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/product/lotus-answer-paper/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded',
// })
//     const addToCartBtn = page.locator('button.single_add_to_cart_button')
//     await expect(addToCartBtn).toBeVisible()
//     await addToCartBtn.click()
//     const viewCartBtn = page.locator('#main .woocommerce-notices-wrapper a:has-text("View cart")')
//     await expect(viewCartBtn).toBeVisible({ timeout: 5000 })
//     await viewCartBtn.click()
//     await expect(page).toHaveURL(/.*cart/)
//     await page.click('#post-3134 > div > div > form > table > tbody > tr:nth-child(2) > td > div.wc-proceed-to-checkout > a')
//     await page.waitForTimeout(5000)
//     await page.mouse.wheel(0,300)
//     await page.waitForSelector('form.checkout', { state: 'visible', timeout: 10000 });
//     const firstName = page.locator('input[name="billing_first_name"]');
//     await expect(firstName).toBeVisible({ timeout: 5000 });
//     await firstName.fill('Test');
//     await page.waitForTimeout(5000)
//     await page.fill('input[name="billing_last_name"]', 'User')
//     await page.fill('input[name="billing_address_1"]', '123 AI Lane')
//     await page.fill('input[name="billing_city"]', 'Gurugram')
//     await page.fill('input[name="billing_postcode"]', '122002')
//     await page.fill('input[name="billing_phone"]', '9999999999')
//     await page.fill('input[name="billing_email"]', 'testuser@example.com')
// })


// test('Add Lotus A5 Sketch Notebook to cart from homepage', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded'
// });
//     const searchBox = page.getByRole('combobox', { name: 'Search for:' })
//     await expect(searchBox).toBeVisible()
//     await searchBox.click()
//     await searchBox.fill('A5 Sketch')
//     await page.getByRole('link', { name: 'Lotus A5 Sketch Notebook', exact: true }).click()
//     await page.waitForURL('https://lotusstationery.in/product/lotus-sketch-notebook/')
//     const addToCartBtn = page.locator('button.single_add_to_cart_button')
//     await expect(addToCartBtn).toBeVisible()
//     await addToCartBtn.click()
//     const viewCartNoticeLink = page.locator('#main .woocommerce-notices-wrapper a:has-text("View cart")')
//     await expect(viewCartNoticeLink).toBeVisible({ timeout: 5000 })
//     await viewCartNoticeLink.click()
//     await expect(page).toHaveURL(/.*cart/)
//     await expect(page.getByText('Lotus A5 Sketch Notebook')).toBeVisible()
// })
// let emailCounter = 8
// test('MY account', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded'
// })
//     await page.getByRole('link', { name: 'r My Account' }).click()
//     const email = `spdy${emailCounter}@yopmail.com`
//     await page.locator('#reg_email').fill(email)
//     await page.getByRole('button', { name: 'Register' }).click()
//     await page.waitForTimeout(5000)
//     await expect(page.getByText('Your account with Lotus Stationery is using a temporary password. We emailed you a link to change your password.')).toBeVisible()
//     emailCounter++
// })
// //need to check
// test('Check if link is received on mail or not', async ({ page }) => {
//     await page.goto('https://lotusstationery.in/', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded'
// })
//     await page.getByRole('link', { name: 'r My Account' }).click()
//     const email = `spdy${emailCounter}@yopmail.com`
//     await page.locator('#reg_email').fill(email)
//     await page.getByRole('button', { name: 'Register' }).click()
//     await page.waitForTimeout(5000)
//     await expect(page.getByText('Your account with Lotus Stationery is using a temporary password. We emailed you a link to change your password.')).toBeVisible()
//     emailCounter++
//     await page.goto('https://yopmail.com/en/wm', {
//     timeout: 60000,
//     waitUntil: 'domcontentloaded'
// })
test.only('Already existing email should give error', async ({ page }) => {
    await page.goto('https://lotusstationery.in/', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
})
    await page.click('#menu-item-4100 > a')
    await page.fill('#reg_email','spdy7@yopmail.com')
  //  await page.mouse.wheel(0,300)
    await page.click('#customer_login > div.u-column2.col-2 > form > p:nth-child(6) > button')
    // const errorMessage = page.locator('text=An account is already registered with spdy7@yopmail.com')
    // await expect(errorMessage).toBeVisible();
})



