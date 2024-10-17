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
        chromeFlags: "--no-sandbox",
      },
      numberOfRuns: 3,
    },
    assert: {
      "categories:performance": ["error", { minScore: 0.8 }],
      "categories:accessibility": ["error", { minScore: 0.95 }],
      "categories:best-practices": ["error", { minScore: 1 }],
      "categories:seo": ["error", { minScore: 0.9 }],
      "categories:pwa": ["warn", { minScore: 0.99 }],
    },
    upload: {
      target: "temporary-public-storage",
    },
    server: {},
    wizard: {},
  },
};
