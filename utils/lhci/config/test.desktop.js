'use strict';

const constants = require('../constants.js');

module.exports = {
  ci: {
    collect: {
      additive: true,
      url: constants.urls.testDomain,
      puppeteerScript: "../puppeteer/puppeteer-desktop.js",
      puppeteerLaunchOptions: { 
        headless: false, 
        args: ["--user-agent=" + constants.userAgents.desktop]
         },
      settings:  {
        output: 'html',
        onlyCategories: ['performance'],
        throttling: constants.throttling.desktopDense4G,
        skipAudits: ['uses-http2'],
        formFactor: 'desktop',
        screenEmulation: constants.screenEmulationMetrics.desktop,
      },
      numberOfRuns: 1
    },
    assert: {
      "preset": "lighthouse:all",
    },
    upload: {},
    server: {},
    wizard: {},
  },
};