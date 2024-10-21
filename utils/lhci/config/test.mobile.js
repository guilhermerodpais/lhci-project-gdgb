"use strict";

const constants = require("../constants");

module.exports = {
  ci: {
    collect: {
      additive: true,
      url: constants.urls.testDomain,
      puppeteerScript: "./utils/lhci/puppeteer/puppeteer-mobile.js",
      puppeteerLaunchOptions: {
        headless: false,
        args: ["--user-agent=" + constants.userAgents.mobile],
      },
      settings: {
        output: "html",
        onlyCategories: ["performance"],
        throttling: constants.throttling.mobileSlow4G,
        skipAudits: ["uses-http2"],
        formFactor: "mobile",
        screenEmulation: { mobile: true },
      },
      numberOfRuns: 3,
    },
    assert: {
     assertions: {
        "categories:performance": ["error", { minScore: 0.1 }],
        "categories:accessibility": ["warn", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 1 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
        "categories:pwa": ["warn", { minScore: 0.99 }],
      }
    },
    upload: {  
      target: 'lhci',  
      serverBaseUrl: 'https://lhci-server-g2f5gmh6aabcfth2.canadacentral-01.azurewebsites.net',  
      token: '6abdf639-99f2-4db9-9610-08d8c811ddf8' // The Lighthouse CI server build token for the project  
    },
    server: {},
    wizard: {},
  },
};
