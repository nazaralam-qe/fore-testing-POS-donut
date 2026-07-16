import Expect from "../helper/expect.js";
import {getKey} from "../helper/keyFactory.js";
import Helper from "../helper/helper.js";
import helper from "../helper/helper.js";
import login from "../helper/feature_config/login.js";
import homescreen_page from "./homescreen_page.js";

const loginKey = await getKey('login', platform);
const dashboardKey = await getKey('dashboard', platform);

class loginPagePOS {

    async allowedgps(){
        await Expect.elementDisplayed(loginKey.POS_PERMISSION_ALLOWED)

        try {
            await Expect.clickElement(loginKey.POS_PERMISSION_ALLOWED, 2000);
            console.log('✅ Permission button clicked');
        } catch (e) {
            console.log('ℹ️ Permission button not shown, continue...');
        }
        await driver.pause(2000)
    }

    async inputUsername() {
        await Expect.elementDisplayed(loginKey.POS_LOGO_LOGIN_ICON);
        await Expect.elementDisplayed(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await Expect.clickElement(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_USERNAME);
    }

    async inputPassword() {
        await Expect.elementDisplayed(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await Expect.clickElement(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_PASSWORD);
        await Expect.clickElement(loginKey.POS_EYE_OPEN_PASSWORD_STORE_ICON);
        await Expect.clickElement(loginKey.POS_EYE_CLOSE_PASSWORD_STORE_ICON);
    }

    async inputUsernameDev2() {
        await Expect.elementDisplayed(loginKey.POS_LOGO_LOGIN_ICON);
        await Expect.elementDisplayed(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await Expect.clickElement(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.DEV2_USERNAME);
    }

    async inputPasswordDev2() {
        await Expect.elementDisplayed(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await Expect.clickElement(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.DEV2_PASSWORD);
        await Expect.clickElement(loginKey.POS_EYE_OPEN_PASSWORD_STORE_ICON);
        await Expect.clickElement(loginKey.POS_EYE_CLOSE_PASSWORD_STORE_ICON);
    }

    async clickMasuk() {
        await Expect.elementExisting(loginKey.POS_CHANGE_LANGUAGE_BUTTON);
        await Expect.elementExisting(loginKey.POS_VERSION_LABEL);
        await Expect.elementDisplayed(loginKey.POS_SIGN_IN_STORE_BUTTON);
        await Expect.clickElement(loginKey.POS_SIGN_IN_STORE_BUTTON);
    }

    async verifyBarista() {
        await Expect.elementDisplayed(loginKey.POS_SIDESHEET_MAIN_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_MAIN_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_ADDITIONAL_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_PICKUP_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_KITCHEN_BUTTON);
        await Expect.clickElement(loginKey.POS_SIDESHEET_MAIN_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_CHANGE_BUTTON);
    }

    async inputBaristaId() {
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
    }

    async inputBaristaPass() {
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_MASUK_BUTTON);
        await driver.pause(2000);
    }

    async verifyDashboardCashier(){
        await driver.pause(3000);
        // await Expect.clickElement(dashboardKey.HOMESCREEN_CLOSE_BUTTON);
        await Expect.clickElement(dashboardKey.DASHBOARD_START_ORDER_BUTTON);
        await Expect.elementExisting(dashboardKey.DASHBOARD_START_SHIFT_BUTTON);

    }

    async loginForePOS() {
        try {
            await Expect.clickElement(loginKey.POS_PERMISSION_ALLOWED, 2000);
            console.log('✅ Permission button clicked');
        } catch (e) {
            console.log('ℹ️ Permission button not shown, continue...');
        }
        await driver.pause(2000);
        await Expect.clickElement(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_USERNAME);
        await driver.pause(2000);
        await Expect.clickElement(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await Helper.pressKeyboard(process.env.TEST_PASSWORD);
        await Expect.clickElement(loginKey.POS_SIGN_IN_STORE_BUTTON);
        await Expect.clickElement(loginKey.POS_SIDESHEET_MAIN_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_CHANGE_BUTTON);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await driver.pause(1000);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await driver.pause(3000);
        await Expect.clickElement(loginKey.POS_STAFFID_MASUK_BUTTON);
        await driver.pause(3000);
    }

    async loginForeSG() {
        try {
            await Expect.clickElement(loginKey.POS_PERMISSION_ALLOWED, 2000);
            console.log('✅ Permission button clicked');
        } catch (e) {
            console.log('ℹ️ Permission button not shown, continue...');
        }
        await driver.pause(2000);
        await Expect.clickElement(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_USERNAME_SG);
        await driver.pause(2000);
        await Expect.clickElement(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await Helper.pressKeyboard(process.env.TEST_PASSWORD_SG);
        await Expect.clickElement(loginKey.POS_SIGN_IN_STORE_BUTTON);
        await Expect.clickElement(loginKey.POS_SIDESHEET_MAIN_CASHIER_MODE);
        await Expect.clickElement(loginKey.POS_SIDESHEET_CHANGE_BUTTON);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await driver.pause(1000);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await driver.pause(3000);
        await Expect.clickElement(loginKey.POS_STAFFID_MASUK_BUTTON);
        await driver.pause(3000);
    }

    async inputUsernameSG() {
        await Expect.clickElement(loginKey.POS_INPUT_USERNAME_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_USERNAME_SG);
    }

    async inputPasswordSG() {
        await Expect.clickElement(loginKey.POS_INPUT_PASSWORD_STORE_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard(process.env.TEST_PASSWORD_SG);
        await Expect.clickElement(loginKey.POS_EYE_OPEN_PASSWORD_STORE_ICON);
        await driver.pause(3000);
        await Expect.clickElement(loginKey.POS_EYE_CLOSE_PASSWORD_STORE_ICON);
    }

}

export default new loginPagePOS();