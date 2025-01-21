const {test, expect} = require('@playwright/test')

test.only('browser context based testcase', async({page})=>{
//     const context = await browser.newContext();
//    const page = await context.newPage();
const  un = page.locator('#username');
const pw =  page.locator('[id="password"]')
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
   await un.fill('anilnandha');
   await pw.fill('kumar');
   await page.locator('#signInBtn').click();
   console.log(await page.locator('[style*="block"]').textContent())
   //verify the erroe  message tocontainText
   await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password.')

   //fill the correct data
   await un.fill('');
   await un.fill('rahulshettyacademy');
   await pw.fill('');
   await pw.fill('learning');
   await page.locator('#signInBtn').click();
// console.log (await page.locator('.card-body a').textContent());
console.log (await page.locator('.card-body a').first().textContent());
console.log(await page.locator('.card-body a').nth(3).textContent())
const cardTitle = page.locator('.card-body a');
console.log(await cardTitle.allTextContents())


});

test('page fixture without browser context testcase',async({page})=>{
    await page.goto('https://www.google.com/');
    console.log(await page.title());
   await expect(page).toHaveTitle('Google');
  

})
