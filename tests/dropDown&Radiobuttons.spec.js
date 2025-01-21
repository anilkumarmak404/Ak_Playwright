const {test, expect} = require('@playwright/test');

test('Dropdown and radio button handling', async({page})=>{
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
 const linkText = page.locator('a[href*="documents-req"]');
 // dropdown
 const dropdown =await page.locator('select[class="form-control"]');
  dropdown.selectOption('Consultant');

  //radio button
  await page.locator('span.checkmark').last().click();
  await page.locator('[id="okayBtn"]').click();
  await expect(page.locator('span.checkmark').last()).toBeChecked();
  console.log(await page.locator('span.checkmark').last().isChecked())

  //checkbox
  await page.locator('#terms').check();
  await expect(page.locator('#terms')).toBeChecked();
  await page.locator('#terms').uncheck();
  expect(await page.locator('#terms').isChecked()).toBeFalsy();
  await expect(linkText).toHaveAttribute('class','blinkingText')
//   await page.pause();



});

