const constants = require('../constants');

module.exports = async (browser, context) => {
    let page = await browser.newPage();
    await page.setUserAgent(constants.userAgents.mobile);
    await page.setExtraHTTPHeaders({'Accept-Language': 'en-US'});
    await page.setViewport({ width: 360, height: 640 });
    await page.close();


    // const page = await browser.newPage();
    // await page.setViewport({ width: 1024, height: 600 });
    // await page.goto(url);
  
    // // This login script is run for every URL so check if the user is already authenticated and if so then
    // // return early without doing anything.
    // const userDropdownElement = await page.$('#userDropdown');
  
    // if (userDropdownElement !== null) {
    //   await page.close();
    //   return;
    // }
  
    // // Enter the username and password and login
    // const emailInput = await page.$('#email');
    // await emailInput.type(EMAIL);
  
    // const passwordInput = await page.$('#current-password');
    // await passwordInput.type(PASSWORD);
  
    // const loginButton = await page.$('button[value=login]');
    // await loginButton.click();
  
    // await page.waitForNavigation({ waitUntil: 'networkidle2' }) // No more then 2 network requests for half a second
    // await page.close();
};