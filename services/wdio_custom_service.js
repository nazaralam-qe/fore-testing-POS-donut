
import Expect from '../helper/expect.js';

class CustomService {
    async before() {
        global.Expect = Expect;
        global.platform = browser.capabilities.platformName.toLowerCase();
        global.phoneNumber = browser.capabilities['cjson:metadata']?.phoneNumber;
        // global.username = browser.capabilities['cjson:metadata']?.username;
        global.deviceName = browser.capabilities["appium:deviceName"];
    }
}

export default new CustomService();