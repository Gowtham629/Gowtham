const { test, chromium, expect} = require('@playwright/test');

test('test', async () => {
  const browser = await chromium.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/r.php?entry_point=login');
  // await page.getByPlaceholder("Email address or phone number").type("Gowtham Gaja");
  // await page.getByPlaceholder("Password").fill("Dummy123");
  // await page.getByTestId("open-registration-form-button").click();


  await page.getByLabel("First name").fill("Gowtham");
  //await page.waitForTimeout(2000);
const dropd =  await page.locator
  await dropd.selectOption('15');

});