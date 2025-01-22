const {test, expect}=require('@playwright/test')

test('wndow handling using playwright',async({browser})=>{

    const context = await browser.newContext();
     const page =   await context.newPage()
     await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
     const linktext = page.locator('[href*="documents-request"]');
      const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        linktext.click()
      

     ]);
    const text =  await newpage.locator('[class="im-para red"]').textContent()
    console.log(text);
   await expect(newpage.locator('[class="im-para red"]')).toContainText('Please email us at mentor@rahulshettyacademy.com with below template to receive response ')
    
   // get the email id and paste it in email text field
  const arraytext= text.split('@')
  const domain = arraytext[1].split(' ')[0];
  console.log(domain)
 await page.locator('#username').fill(domain)
 console.log(await page.locator('#username').textContent());

      


});

