import {writeFileSync, existsSync, mkdirSync} from 'fs';
import * as allure from "@wdio/allure-reporter";
import completeOrder from "./feature_config/complete_order.js";
import loginConfig from "./feature_config/login.js";
import loyaltyConfig from "./feature_config/loyalty.js"
import path from 'path';
import {execSync} from "child_process";
import helper from "./helper.js";
import sharp from "sharp";
import {addTestResult, saveTestResults} from "./testResults.js";


const listFeatureConfig = [
    {
        pattern_name: "TC_DELIVERY_CC_",
        config: completeOrder,
    },
    {
        pattern_name: "TC_LGN_",
        config: loginConfig,
    },
    {
        pattern_name: "TC_LOY_",
        config: loyaltyConfig,
    },
]

// export const beforeStep = async function () {
//     return true;
// };

export async function beforeStep(step, scenario, context) {
    return true;
}

export async function beforeSession(config, capabilities, specs) {
    if (capabilities.platformName?.toLowerCase() !== 'android') return;
    const appPackage = process.env.APP_PACKAGE_ANDROID;
    const deviceId = capabilities['appium:udid'] || await helper.getConnectedDeviceId();
    if (!deviceId || !appPackage) return;

    const permissions = [
        'android.permission.POST_NOTIFICATIONS',
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.ACCESS_COARSE_LOCATION'
    ];

    try {
        // Grant permissions
        permissions.forEach((perm) => {
            execSync(`adb -s ${deviceId} shell pm grant ${appPackage} ${perm}`);
            console.log(`✅ Granted: ${perm}`);
        });

        // Aktifkan GPS (set ke High Accuracy = 3)
        execSync(`adb -s ${deviceId} shell settings put secure location_mode 3`);
        console.log('📡 GPS diaktifkan (High Accuracy)');
    } catch (err) {
        console.warn('⚠️ Error saat grant permission / aktifkan GPS:', err.message);
    }
}



export async function beforeScenario(world) {
    const arrName = world.pickle.name.split(" ");
    const testSkenarioId = arrName[0];
    const featureConfig = listFeatureConfig.filter((value) =>
        testSkenarioId.includes(value.pattern_name))
    if (featureConfig.length > 0) {
        await featureConfig[0].config.beforeScenario(testSkenarioId);
    }
}

export async function beforeFeature() {
    try {
        await driver.startRecordingScreen();
    } catch (e) {
        console.error("Error while starting screen recording:", e);
    }
}

export async function afterStep (step, scenario, result, context) {
    if (browser.sessionId) {
        const screenshotBase64 = await browser.takeScreenshot();
        const screenshotBuffer = Buffer.from(screenshotBase64, 'base64');

        // Kompresi gambar menggunakan sharp
        const compressedBuffer = await sharp(screenshotBuffer)
            .resize({width: 500}) // resize agar lebih kecil, bisa diatur ulang
            .png({quality: 80, compressionLevel: 9}) // pengaturan kompresi PNG
            .toBuffer();

        await allure.addAttachment(
            'Screenshot',
            compressedBuffer,
            'image/png'
        );
    }
};

export async function afterSession() {
    return true
};
export async function afterScenario(world, result, context) {
    const arrName = world.pickle.name.split(" ");
    const testSkenarioId = arrName[0];
    const featureConfig = listFeatureConfig.filter((value) =>
        testSkenarioId.includes(value.pattern_name))
    if (featureConfig.length > 0) {
        await featureConfig[0].config.afterScenario(testSkenarioId);
    }
    if (result.passed) {
        addTestResult('passed',  world.pickle.name);
    } else {
        addTestResult('failed',  world.pickle.name);
    }

    saveTestResults();


}

export async function onComplete(exitCode, config, capabilities, results) {
    // const {passed, failed} = results;
    // await sendSlackMessage({
    //     passed: passed,
    //     failed : failed,
    //     platformName: config.capabilities.platformName,
    //     deviceName : config.capabilities.desired.deviceName
    // });
}
export async function afterFeature(uri, feature) {
    const caps = driver.capabilities || {};
    const phoneName = caps['appium:deviceName'] || caps.deviceName || 'unknown_device';
    const platformName = (caps.platformName || 'unknown').toLowerCase();

    const folderName = path.basename(path.dirname(uri));
    const featureFileName = path.basename(uri, '.feature');

    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

    const videoFolder = path.join('./reports/video', folderName, platformName);
    const customFileName = `${phoneName}_${featureFileName}_${timestamp}.mp4`;
    const outputPath = path.join(videoFolder, customFileName);

    try {
        const videoBase64 = await driver.stopRecordingScreen();

        if (!existsSync(videoFolder)) {
            mkdirSync(videoFolder, {recursive: true});
        }

        writeFileSync(outputPath, videoBase64, 'base64');
    } catch (e) {
        console.error("Error while stopping screen recording:", e);
    }
    // await Helper.restartApp();
};
