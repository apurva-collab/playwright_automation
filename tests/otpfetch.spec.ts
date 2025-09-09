// import { test, expect } from '@playwright/test';
// test.only('Login with OTP from Yopmail', async ({ browser }) => {
    
//     const context = await browser.newContext()
//     const page = await context.newPage();

// await page.goto('https://app.domyshoot.com/dashboard/homePage', {
//   waitUntil: 'domcontentloaded',
//   timeout: 60000
// });

  
//     await page.pause()
//     await page.getByText('Log in').click()
//     await page.getByRole('textbox', { name: 'Email' }).fill('spdy@yopmail.com')
//     await page.getByText('Send OTP').click()
//     const yopmailPage = await context.newPage()
//     await yopmailPage.goto('https://yopmail.com/en/')
//     await yopmailPage.getByPlaceholder('Enter your inbox here').fill('spdy')
//     await yopmailPage.locator('#refreshbut').click()
//     await yopmailPage.frameLocator('#ifinbox').locator('div.m').first().click()
//     const emailBody = await yopmailPage.frameLocator('#ifmail').locator('body').innerText()
//     console.log('Email body:', emailBody)
//     const otpMatch = emailBody.match(/Account\s+(\d{6})/)
//     const otp = otpMatch ? otpMatch[1] : ''
//     console.log('OTP is:', otp)
//     await page.getByRole('spinbutton', { name: 'A verification code has been' }).fill(otp)
//     await page.getByText('Done').click()
//     await expect(page.getByText('Enhance your Images with AI Tools')).toBeVisible()
//     console.log('Login successful!')
// })

import { test, expect } from '@playwright/test'
test.only('Login with OTP from Yopmail', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://app.domyshoot.com/dashboard/homePage', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
})
    await page.getByText('Log in').click()
    const emailInput = page.getByRole('textbox', { name: 'Email' })
    await expect(emailInput).toBeVisible()
    await emailInput.fill('spdy@yopmail.com')
    await page.getByText('Send OTP').click()
   // await page.pause()
    const yopmailPage = await context.newPage()
    await yopmailPage.goto('https://yopmail.com/en/')
    await yopmailPage.getByPlaceholder('Enter your inbox here').fill('spdy')
    await page.pause()
    await yopmailPage.locator('#refreshbut').click()

    await yopmailPage.frameLocator('#ifinbox').locator('div.m').first().click()
    const emailBody = await yopmailPage.frameLocator('#ifmail').locator('body').innerText()
    console.log('Email body:', emailBody)
    const otpMatch = emailBody.match(/\b(\d{6})\b/)
    if (!otpMatch) throw new Error('OTP not found in email')
    const otp = otpMatch[1]
    console.log('OTP is:', otp)
    const otpInput = page.getByRole('spinbutton')
    await expect(otpInput).toBeVisible()
    await otpInput.fill(otp)
    await page.getByText('Done').click()
    await expect(page.getByText('Enhance your Images with AI Tools')).toBeVisible();
    console.log('Login successful!')
});
