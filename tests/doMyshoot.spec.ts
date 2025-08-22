import { test, expect } from '@playwright/test';
test('Navigate to Domyshoot Home Page', async ({ page }) => {
    await page.goto('https://app.domyshoot.com/dashboard/homePage')
    await page.click('#__next > div.styles_header__ULbCR > div:nth-child(2) > div:nth-child(3)')
    await page.fill('#email', 'spd@yopmail.com')
    await page.click('.css-17catiw')
    console.log('is otp entered')
    await page.fill('#otp', '101010')
    console.log('entering otp')
    await page.click('.css-fmstyz')
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://app.domyshoot.com/dashboard/homePage')
    await page.waitForTimeout(2000)
})
test.only('Upload image', async ({ page }) => {
    await page.goto('https://app.domyshoot.com/dashboard/homePage')
    await page.getByText('Log in').click()
    await page.getByRole('textbox', { name: 'Email' }).click()
    await page.getByRole('textbox', { name: 'Email' }).fill('spd@yopmail.com')
    await page.getByText('Send OTP').click()
    await page.getByRole('spinbutton', { name: 'A verification code has been' }).click()
    await page.getByRole('spinbutton', { name: 'A verification code has been' }).fill('101010')
    await page.getByText('Done').click()
    await page.locator('.styles_listImage__GSBye').first().click()
    await page.waitForTimeout(10000)
    await page.locator('.css-iaj2f3 > img').first().click()
    await page.goto('https://app.domyshoot.com/dashboard/batch-editor?batchMode=multiple&batchJobId=68a6d7a50f38055e4cc4d857&initiatedSource=false&presetDetails=%7B%22size%22%3A%7B%22height%22%3A1500%2C%22width%22%3A1500%7D%2C%22coverage%22%3A80%2C%22position%22%3A%22centre%22%2C%22backgroundColor%22%3A%22%2300000000%22%7D');
    await page.waitForTimeout(10000)
//   await page.pause();
})


