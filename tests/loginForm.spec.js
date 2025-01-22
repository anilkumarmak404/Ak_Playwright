const {test,expect}=require('@playwright/test')

test('form filling the application',async({page})=>{
   await page.goto('https://rahulshettyacademy.com/client');
   await page.locator('[class="text-reset"]').click();
   await page.locator('#firstName').fill('anilkumar');
   await page.locator('[id="lastName"]').fill('nandha');
   await page.locator('#userEmail').fill('anilnandha56@gmail.com');
   await page.locator('#userMobile').fill('9346354045');
   await page.locator('[formcontrolname="occupation"]').selectOption('Doctor')
   await page.locator('input[value="Male"]').check();
   await page.locator('#userPassword').fill('@Anil4kumar1@');
   await page.locator('#confirmPassword').fill('@Anil4kumar1@');
   await page.locator('input[type="checkbox"]').check();
   await page.locator('input[value="Register"]').click();
   await page.locator('.login-section-wrapper h1').textContent('Account Created Successfully');
  
})
test('login to the application',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('[id="userEmail"]').fill('anilnandha56@gmail.com')
    await page.locator('#userPassword').fill('@Anil4kumar@')
    await page.locator('[value="Login"]').click()
    await page.locator('.card-body b').first().waitFor();
   console.log(await page.locator('.card-body b').allTextContents());

 
     
})