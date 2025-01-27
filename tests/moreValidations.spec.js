const { test, expect } = require("@playwright/test");

test('More validations', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.goto('https://github.com/')
    await page.goBack();

    //visible or not
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    //popup
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    //hover
    await page.locator("#mousehover").hover();

    //frames
    const expectedValue2 = "13,522"
    const framepage = await page.frameLocator('#courses-iframe');
    await framepage.locator('[href="lifetime-access"]').first().click();
    const text = await framepage.locator('.text h2').textContent();
    console.log(text.split("")[1]);
    expect(text.split(" ")[1]).toEqual(expectedValue2);






})