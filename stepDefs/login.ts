import { createBdd } from "playwright-bdd";
import { expect } from "playwright/test";

const {Given, When, Then}  = createBdd();


  Given('User on login screen', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    
  });
  
  When('User enter login credentials {string} and {string}', async ({page}, email, password) => {
    await page.locator("#user-name").fill(email);
    //await page.pause()
    await page.locator("#password").fill(password);
    
  });
  

  When('User click on submit button', async ({page}) => {
    await page.locator(".submit-button.btn_action").click();    
  });
  
  
  Then('User verify products page displayed', async ({page}) => {
    await page.waitForTimeout(5000);
    let productsHeading  = await page.locator(".title").textContent();
    console.log("productsHeading :: " + productsHeading);
    await expect(productsHeading).toEqual("Products")
  });


  // 1. Missing step definition for "features/login.feature:8:14"
Then('User verify products page heading {string} displayed', async ({page}, heading: string) => {
  let productsHeading  = await page.locator(".title").textContent();
  console.log("productsHeading :: " + productsHeading);
  await expect(productsHeading).toEqual(heading)
});
  