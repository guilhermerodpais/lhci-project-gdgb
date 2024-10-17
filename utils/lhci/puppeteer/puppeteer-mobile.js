const constants = require('../constants');

module.exports = async (browser, context) => {
    let page = await browser.newPage();
    await page.setUserAgent(constants.userAgents.mobile);
    await page.setExtraHTTPHeaders({'Accept-Language': 'en-US'});
    await page.setViewport({ width: 360, height: 640 });
    await page.close();
};