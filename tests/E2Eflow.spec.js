const {test, expect}= require('@playwright/test');

test('Application E2E flow',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    const email = 'anilnandha56@gmail.com'
    await page.locator('[id="userEmail"]').fill(email);
    await page.locator('#userPassword').fill('@Anil4kumar@')
    await page.locator('[value="Login"]').click()
    await page.locator('.card-body b').first().waitFor();
   console.log(await page.locator('.card-body b').allTextContents());
   const products =  page.locator('.card-body');
   const ProductName = 'Banarsi Saree';
    const ProductCount =await products.count();
    for(let i =0;i<ProductCount;i++){
        if(await products.nth(i).locator('b').textContent() === ProductName){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
await page.locator('[routerlink="/dashboard/cart"]').click();
await page.locator('div li').first().waitFor();
const boolean = await page.locator("h3:has-text('Banarsi Saree')").isVisible();
expect(boolean).toBeTruthy();
await expect(page.locator('[class="cartSection"] h3')).toHaveText(ProductName);
await page.locator("text=Checkout").click();
await page.locator('[placeholder*="Country"]').pressSequentially('ind',{delay:100});

const dropDown = page.locator('section.ta-results');
await dropDown.waitFor();
const optionCount =await dropDown.locator('button').count();
for(let i =0;i<optionCount;i++){

   const text= await dropDown.locator('button').nth(i).textContent();
   if(text ===  " India"){
    await dropDown.locator('button').nth(i).click();
    break;
   }
}
await expect(page.locator('.user__name.mt-5 label')).toHaveText(email);
await page.locator('.action__submit').click();
const conformationMsg = ' Thankyou for the order. ';
await expect(page.locator('h1.hero-primary')).toHaveText(' Thankyou for the order. ');

//get the text from the locator
const PurchseNumber = await page.locator('[class="em-spacer-1"] .ng-star-inserted').textContent()
console.log(PurchseNumber);
await page.locator('button[routerlink*="myorders"]').click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

 for(let i =0; i<await rows.count(); i++){
    const rowOrderId = await rows.nth(i).locator("th").textContent(); 
    if(PurchseNumber.includes(rowOrderId)){
        await rows.nth(i).locator("button").first().click();
        break;
}
 }
 const orderID = await page.locator('div.col-text').textContent();
 expect(PurchseNumber.includes(orderID)).toBeTruthy()

})