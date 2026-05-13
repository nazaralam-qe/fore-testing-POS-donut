export default {
    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '15',
            'appium:app': process.env.ANDROID_APP_PATH,
            'appium:autoGrantPermissions': true,
            'appium:noReset': false

        },
        // {
        //     platformName: 'ios',
        //     'appium:deviceName': 'iPhone 16 Pro Max',
        //     'appium:platformVersion': '18.0',
        //     'cjson:metadata': {
        //         phoneNumber: "+6282149569388"
        //     }
        // },
    ],
    specs: [
        // "../features/Login/LoginPOS.feature",
        // "../features/Login/Shift.feature",
        // "../features/Login/Setting.feature",
        // "../features/transaction/generate_VA.feature",
        // "../features/transaction/Payment.feature",
        // "../features/Catalog/Catalog.feature",
        // "../features/Voucher/Voucher.feature",
        // "../features/Notifications/WA_notification.feature"
        // "../features/Catalog/Sticker.feature"
        // "../features/Catalog/homescreen.feature"
        // "../features/Pickup/Queue.feature",
        // "../features/Login/ChangeCredential.feature",

    ],
    require: [
        "./step-definitions/login_steps.js",
        "./step-definitions/shift_steps.js",
        "./step-definitions/homescreen_steps.js",
        "./step-definitions/settings_steps.js",
        "./step-definitions/catalog_steps.js",
        "./step-definitions/transaction_steps.js",
        "./step-definitions/queue_steps.js",
        "./step-definitions/create_sticker_steps.js"

    ],
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723,
    protocol: 'http',
};