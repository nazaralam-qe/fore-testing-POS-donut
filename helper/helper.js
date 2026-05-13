import Expect from "./expect.js";
import {execSync} from 'child_process';

class Helper {

    async clickByText(text) {
        const element = await $(`//android.widget.TextView[@text='${text}']`);
        if (await Expect.elementExisting(element)) {
            await Expect.clickElement(element);
            console.log(`Berhasil mengklik elemen dengan teks: ${text}`);
        } else {
            console.error(`Elemen dengan teks "${text}" tidak ditemukan atau tidak terlihat.`);
            throw new Error(`Elemen dengan teks "${text}" tidak ditemukan atau tidak terlihat.`);
        }
    }

    async verifyHeaderTitle(text) {
        try {
            // Wait longer for app to be fully loaded first
            await driver.pause(5000);
            
            const headerTitleElement = await $(`//*[@resource-id='com.android.permissioncontroller:id/grant_dialog']`);
            await headerTitleElement.waitForDisplayed({ timeout: 30000 });
            const actualText = await headerTitleElement.getText();
            console.log(`Expected: "${text}", Actual: "${actualText.trim()}"`);
            return actualText.trim() === text;
        } catch (error) {
            console.log(`Header title verification failed: ${error.message}`);
            return false;
        }
    }

    async sendText(locator, inputText) {
        const element = await $(locator);
        await expect(element).toBeExisting();
        await element.setValue(inputText)
    }



    async pressKeyboard(character, dismissKeyboard = true) {
        const os = platform;
        const chars = character.toString().split("");

        const actions = ['done', 'search', 'go', 'send', 'next'];

        switch (os) {
            case "android":
                console.log("Android input: ", character);
                for (const char of chars) {
                    if (char === " ") {
                        await driver.keys(['\uE00D']);
                    } else if (char >= "A" && char <= "Z") {
                        await driver.keys(['\uE008', char]);
                    } else if (char === "delete") {
                        await driver.keys(['\b']);
                    } else if (char === '\n') {
                        // await driver.pressKeyCode(66);
                        await driver.execute('mobile: performEditorAction', {
                            action: 'done'
                        });
                        continue;
                    } else {
                        await driver.keys([char]);
                    }
                    await driver.pause(100);
                }
                // Dismiss keyboard jika diminta
                if (dismissKeyboard) {
                    try {
                        const keyboardShown = await driver.isKeyboardShown();
                        if (keyboardShown) {
                            await driver.hideKeyboard();
                            console.log('✅ Android keyboard dismissed');
                        }
                    } catch (e) {
                        // Fallback: tekan back
                        try {
                            await driver.back();
                        } catch (e2) {
                            console.log('ℹ️ Android: Could not dismiss keyboard');
                        }
                    }
                }
                break;

            case "ios":
                console.log("iOS input: ", character);
                // iOS: Gunakan driver.keys untuk input karakter
                for (const char of chars) {
                    if (char === " ") {
                        await driver.keys(['\uE00D']); // space
                    } else if (char >= "A" && char <= "Z") {
                        await driver.keys(['\uE008', char]); // shift + char
                    } else if (char === "delete") {
                        await driver.keys(['\b']); // backspace
                    } else {
                        await driver.keys([char]);
                    }
                    await driver.pause(150);
                }

                // iOS: Skip keyboard dismiss by default untuk avoid breaking flow
                // Keyboard akan auto-dismiss saat user tap element lain
                // Hanya dismiss jika explicitly diminta (dismissKeyboard = true)
                if (dismissKeyboard === true) {
                    console.log('⚠️ iOS: Explicitly dismissing keyboard (may break flow)');
                    await this.dismissiOSKeyboard();
                } else {
                    console.log('ℹ️ iOS: Skipping keyboard dismiss (will auto-dismiss on next action)');
                }
                break;

            default:
                console.log("Unsupported platform: " + os);
        }
    }





// SCROLL Action
    async scrollUp() {
        switch (platform) {
            case "android":
                await driver.performActions([{
                    type: 'pointer',
                    id: 'finger1',
                    parameters: {pointerType: 'touch'},
                    actions: [
                        {type: 'pointerMove', duration: 0, x: 500, y: 1800},
                        {type: 'pointerDown', button: 0},
                        {type: 'pointerMove', duration: 500, x: 0, y: 550},
                        {type: 'pointerUp', button: 0},
                    ]
                }]);
                break;
            case "ios":
                await driver.executeScript('mobile: scroll', [{ direction: 'down' }]);
                await driver.pause(100);
                break;
            default : console.log(`Unsupported platform${platform}`)
        }

    }

    async scrollDown() {
        switch (platform) {
            case "android":
                await driver.performActions([{
                    type: 'pointer',
                    id: 'finger1',
                    parameters: {pointerType: 'touch'},
                    actions: [
                        {type: 'pointerMove', duration: 0, x: 500, y: 200},
                        {type: 'pointerDown', button: 0},
                        {type: 'pointerMove', duration: 500, x: 1000, y: 2000},
                        {type: 'pointerUp', button: 0},
                    ]
                }]);
                break;
            case "ios":
                await driver.executeScript('mobile: scroll', [{ direction: 'up' }]);
                await driver.pause(100);
                break;
            default : console.log(`Unsupported platform${platform}`)
        }

    }

    async scrollRight() {
        await driver.pause(1000);
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 900, y: 500 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 600, x: 100, y: 500 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
    }

    async scrollLeft() {
        await driver.pause(1000);
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 100, y: 500 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 600, x: 900, y: 500 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
    }

    async scrollUpInElement(selector, distanceRatio = 0.6) {
        const element = await $(selector);
        await element.waitForDisplayed();

        const location = await element.getLocation();
        const size = await element.getSize();

        const startX = location.x + size.width / 2;
        const startY = location.y + size.height * 0.7;
        const endY   = location.y + size.height * (1 - distanceRatio);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration: 600, x: startX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);

        await driver.releaseActions();
    }

    async scrollDownInElement(selector, distanceRatio = 0.6) {
        const element = await $(selector);
        await element.waitForDisplayed();

        const location = await element.getLocation();
        const size = await element.getSize();

        const startX = location.x + size.width / 2;
        const startY = location.y + size.height * 0.3;
        const endY   = location.y + size.height * (0.3 + distanceRatio);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration: 600, x: startX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);

        await driver.releaseActions();
    }


    async swipeByCoordinate(startX, startY, endX, endY) {
        // ex:1693, 1059, 1280, 1059
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 500, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
    }



// Android back button action
    async androidBackBtn() {
        await driver.pause(2000);
        await driver.back();
    }

    async GpsCheckOnAndroid() {
        await driver.startActivity(
            'com.android.settings',
            'com.android.settings.Settings$LocationSettingsActivity'
        );
        const toggle = await $('//android.widget.Switch[@resource-id="android:id/switch_widget" or @resource-id="com.android.settings:id/switchWidget"]');
        if (await toggle.getAttribute('checked') !== 'true') {
            await toggle.click();
            await this.scrollDown()
        }
        await driver.back();
    }

    async resetApp() {
        try {
            const appPackage = process.env.APP_PACKAGE_ANDROID;

            if (!appPackage) {
                throw new Error('APP_PACKAGE_ANDROID is not defined');
            }

            console.log('🧹 Clearing app storage...');
            await driver.execute('mobile: shell', {
                command: 'pm',
                args: ['clear', appPackage]
            });

            console.log('🚀 Launching app...');
            await driver.activateApp(appPackage);

            // Wait for app to stabilize
            await driver.pause(5000);

            console.log('✅ Android app cleared & launched successfully');
        } catch (error) {
            console.error('❌ Failed to restart Android app:', error.message);
            throw error;
        }
    }




    async restartApp(options) {
        try {
            switch (platform) {
                case 'android':
                    console.log('Activating Android app...');
                    await driver.terminateApp(process.env.APP_PACKAGE_ANDROID);
                    await driver.activateApp(process.env.APP_PACKAGE_ANDROID);
                    // Wait for app to stabilize
                    await driver.pause(5000);
                    console.log('App activated successfully');
                    break;
                case 'ios':
                    await driver.terminateApp(process.env.APP_PACKAGE_ANDROID);
                    await driver.activateApp(process.env.APP_BUNDLE_ID_IOS);
                    await driver.pause(5000);
                    break;
                default:
                    console.error('Unknown platform: ' + platform);
            }
        } catch (error) {
            console.error('Failed to restart app:', error.message);
            throw error;
        }
    }

    async setMockLocation(latitude, longitude) {
        try {
            // // Izinkan mock location untuk Appium Settings
            // execSync(`adb shell appops set io.appium.settings android:mock_location allow`);
            // console.log('Mock location diaktifkan.');
            //
            // // Tunggu dan jalankan Appium Settings
            // await new Promise(resolve => setTimeout(resolve, 500));
            // execSync(`adb shell monkey -p io.appium.settings -c android.intent.category.LAUNCHER 1`);

            // Set lokasi
            await browser.executeScript('mobile: setGeolocation', [{
                latitude,
                longitude,
                accuracy: 1
            }]);

            console.log('Lokasi berhasil di-set.');

        } catch (err) {
            console.error('Gagal set mock location:', err.message);
        }
    }


    async setNormalLocation() {
         await browser.pause(1000); // kasih jeda
         execSync(`adb shell appops set io.appium.settings android:mock_location deny`);
         execSync(`adb shell cmd location set-location-enabled false`);
         await browser.pause(500);
         execSync(`adb shell cmd location set-location-enabled true`);
    }

    async getConnectedDeviceId () {
        try {
            const output = execSync('adb devices').toString();
            const lines = output.trim().split('\n');
            const devices = lines
                .slice(1)
                .map(line => line.split('\t')[0])
                .filter(id => !!id);
            return devices.length === 1 ? devices[0] : null;
        } catch {
            return null;
        }
    };
    async scrollIntoView(id, options = {}) {
        const {
            direction = 'down',
            maxScrolls = 10,
            scrollableSelector = null,
            message = `Scrolled into view for element: ${id}`,
        } = options;

        const element = typeof id === 'string' ? await $(id) : id;
        console.log(`🔍 Scrolling to: ${id} (dir: ${direction})`);

        try {
            if (scrollableSelector) {
                const scrollable = await $(scrollableSelector);
                await element.scrollIntoView({ direction, maxScrolls, scrollableElement: scrollable });
            } else {
                await element.scrollIntoView({ direction, maxScrolls });
            }
        } catch (error) {
            console.warn(`⚠️ Scroll failed (${error.message}), trying Compose fallback...`);
            try {
                const composeScrollable =
                    '//android.widget.FrameLayout[@resource-id="coffee.fore2.fore.dev:id/nav_host_fragment"]//androidx.compose.ui.platform.ComposeView';
                const scrollable = await $(composeScrollable);
                if (await scrollable.isExisting()) {
                    await element.scrollIntoView({
                        direction,
                        maxScrolls,
                        scrollableElement: scrollable,
                    });
                } else {
                    console.warn('⚠️ ComposeView not found, skipping.');
                }
            } catch (fallbackErr) {
                console.error(`❌ ScrollIntoView failed: ${fallbackErr.message}`);
            }
        }

        // Final validation (recheck 2s for async rendering)
        try {
            await driver.pause(1000);
            await expect(element).toBeDisplayed({
                message: `Expect: ${id} visible after scroll\nReceive: not visible`,
            });
            console.log(`✅ ${message}`);
        } catch {
            console.error(`❌ Element still not visible after scroll: ${id}`);
        }

        return element;
    }
}

export default new Helper();