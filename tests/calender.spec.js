const {test,expect} = require('@playwright/test')

test('calender handling', async({page})=>{
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const  expectedValue = [monthNumber,date,year]

  await  page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
   await page.locator('.react-date-picker.react-date-picker--closed').click();
   await page.locator('.react-calendar__navigation__label').click();
  await page.locator('.react-calendar__navigation__label').click();
   await page.getByText(year).click()
   await page.locator('.react-calendar__year-view__months__month').nth(Number(monthNumber)-1).click();
   await page.locator("//abbr[text()='"+date+"']").click();
   const values = await page.locator('.react-date-picker__inputGroup input');
   for(let index =0; index<values.length; index++){
     const value =   values[index].getAttribute('value');
     expect(value).equals(expectedValue[index]);
     
        


     

   }


})