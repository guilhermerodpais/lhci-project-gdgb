'use strict';

const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const throttling = {
    DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    mobileSlow4G: {
        rttMs: 150,
        throughputKbps: 1.6 * 1024,
        requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
        downloadThroughputKbps: 1.6 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        uploadThroughputKbps: 750 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        cpuSlowdownMultiplier: 4,
    },
    mobileRegular3G: {
        rttMs: 300,
        throughputKbps: 700,
        requestLatencyMs: 300 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
        downloadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        uploadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        cpuSlowdownMultiplier: 4,
    },
    desktopDense4G: {
        rttMs: 40,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0, // 0 means unset
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
    }
};

const MOBILE_EMULATION_METRICS = {
    mobile: true,
    width: 360,
    height: 640,
    deviceScaleFactor: 2.625,
    disabled: false
};

const DESKTOP_EMULATION_METRICS = {
    mobile: false,  
    width: 1350,  
    height: 940,  
    deviceScaleFactor: 1,  
    disabled: false
};

const screenEmulationMetrics = {
    mobile: MOBILE_EMULATION_METRICS,
    desktop: DESKTOP_EMULATION_METRICS
};

// eslint-disable-next-line max-len
const MOBILE_USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36';
// eslint-disable-next-line max-len
const DESKTOP_USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36';

const userAgents = {
    mobile: MOBILE_USERAGENT,
    desktop: DESKTOP_USERAGENT
};

const testDomain = 'http://localhost:3000'

const urls = {
    testDomain: [
        testDomain + '/',
    ]
}

module.exports = {
    throttling,
    screenEmulationMetrics,
    userAgents,
    urls
};