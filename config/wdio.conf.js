import dotenv from 'dotenv';
dotenv.config({ path: '.env.staging.staging', override: true });
// .env.staging.staging = testing on staging
// .env.staging.production = testing on production
import {
    beforeSession,
    beforeScenario,
    afterStep,
    afterScenario,
    beforeStep,
    beforeFeature,
    afterFeature,
    afterSession,
    onComplete
} from '../helper/general_config.js';
import devicesConfig from './devices-config.js';
import path from 'path';
import wdio_custom_service from "../services/wdio_custom_service.js";

const baseCaps = (config) => {
    const capsAndroid = {
        "appium:automationName": "UiAutomator2",
        "appium:autoGrantPermissions": true,
        "appium:autoAcceptAlerts": true,
        "appium:ignoreHiddenApiPolicyError": true,
        "appium:networkConnectionEnabled": true,
        "appium:appPackage": process.env.APP_PACKAGE_ANDROID,
        "appium:appActivity": process.env.APP_ACTIVITY_ANDROID,
        "appium:appWaitActivity": "*",
        "appium:dontStopAppOnReset": false,
        "appium:newCommandTimeout": 300,
        "appium:androidInstallTimeout": 90000,
        "appium:uiautomator2ServerInstallTimeout": 90000,
        "appium:adbExecTimeout": 90000,
        "appium:systemPort": 8200 + Math.floor(Math.random() * 100),
        // "appium:app": path.resolve(`apps/${process.env.APP_PATH_ANDROID}`)
    }
    const capsIos = {
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:autoGrantPermissions": true,
        "appium:ignoreHiddenApiPolicyError": true,
        "appium:networkConnectionEnabled": true,
        "appium:orientation": "PORTRAIT"
    }
    return {
        ...(config.platformName === 'android' ? capsAndroid : capsIos),
        ...config,
        "appium:noReset": true,
    };
};
export const config = {
    runner: devicesConfig.runner,
    hostname: devicesConfig.hostname,
    port: devicesConfig.port,
    protocol: devicesConfig.protocol,
    // path: devicesConfig.path,
    capabilities: devicesConfig.capabilities.map((value) => baseCaps(value)),
    specs: devicesConfig.specs,
    // suites: devicesConfig.suites,
    logLevel: "info",
    bail: 0, // Changed "0" to 0 (number)
    maxInstances: 1,
    wait: 20000,
    waitforTimeout: 20000,
    connectionRetryTimeout: 200000,
    connectionRetryCount: 1,
    framework: "cucumber",
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true,
            },
        ],
    ],
    services:[
      [
          wdio_custom_service
      ]
    ],
    cucumberOpts: {
        require: devicesConfig.require,
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: true,
        snippets: true,
        format: ["[pretty]"],
        source: true,
        strict: false,
        tags: "",
        timeout: 200000, // Changed "200000" to 200000 (number)
        ignoreUndefinedDefinitions: true,
        retry: 0,
        tagsInTitle: false,
        snippetSyntax: undefined,
        name: [],
        profile: [],
        failAmbiguousDefinitions: false
    },
    beforeStep,
    afterStep,
    beforeScenario,
    afterScenario,
    beforeSession,
    beforeFeature,
    afterFeature,
    afterSession,
    onComplete
};
export default config;