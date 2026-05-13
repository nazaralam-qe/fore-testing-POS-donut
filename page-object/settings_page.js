import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const SettingKey = await getKey('setting', platform)
const loginKey = await getKey('login', platform);

class SettingPage {

    async setBypassSystemValueAdjuster() {
        await Expect.clickElement(SettingKey.SETTING_DEBUG_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(SettingKey.SETTING_DEBUG_CONFIGURE_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(SettingKey.SETTING_DEBUG_CONFIGURE_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(SettingKey.SETTING_DEBUG_CONFIGURE_SYS_VALUE_ADJUSTER);
        await driver.pause(2000);
        await Expect.clickElement(SettingKey.SETTING_DEBUG_CONFIGURE_BYPASS_CHECK_PRINTER_FALSE);
        await driver.pause(2000);
        await Expect.clickElement(SettingKey.SETTING_DEBUG_CONFIGURE_BYPASS_TOGGLE);
    }

    async changePickupMode() {
        await Expect.elementDisplayed(SettingKey.SETTING_CHANGE_MODE_BUTTON);
        await Expect.clickElement(SettingKey.SETTING_CHANGE_MODE_BUTTON);
        await Expect.elementDisplayed(SettingKey.SETTING_MODE_KASIR_UTAMA);
        await Expect.elementDisplayed(SettingKey.SETTING_MODE_KASIR_TAMBAHAN);
        await Expect.elementDisplayed(SettingKey.SETTING_MODE_PICKUP);
        await Expect.clickElement(SettingKey.SETTING_MODE_PICKUP);
        await Expect.clickElement(SettingKey.SETTING_MODE_CHANGE_BUTTON);
        await driver.pause(2000);
    }

    async changePassStore() {
        await Expect.elementDisplayed(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Expect.clickElement(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Expect.elementDisplayed(SettingKey.CHANGE_PASS_STORE_OLD_LOGO);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_OLD,"fore123123");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_OLD_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_NEW,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_NEW_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_CONFIRM,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }

    async changePassStoreDefault() {
        await Expect.clickElement(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_OLD,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_OLD_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_NEW,"fore123123");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_NEW_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_CONFIRM,"fore123123");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }

    async changePinBarista() {
        await Expect.elementDisplayed(SettingKey.SETTING_CHANGE_BARISTA_PIN);
        await Expect.clickElement(SettingKey.SETTING_CHANGE_BARISTA_PIN);
        await Expect.elementDisplayed(SettingKey.CHANGE_BARISTA_PIN_OLD_LOGO);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_OLD);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_OLD_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_NEW);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_NEW_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_CONFIRM);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }

    async changePinBaristaDefault() {
        await Expect.clickElement(SettingKey.SETTING_CHANGE_BARISTA_PIN);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_OLD);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_OLD_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_NEW);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_NEW_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_CONFIRM);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_6);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(SettingKey.CHANGE_BARISTA_PIN_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }


    async changePassStoreSG() {
        await Expect.elementDisplayed(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Expect.clickElement(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Expect.elementDisplayed(SettingKey.CHANGE_PASS_STORE_OLD_LOGO);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_OLD,"bugis12345");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_OLD_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_NEW,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_NEW_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_CONFIRM,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }

    async changePassStoreDefaultSG() {
        await Expect.clickElement(SettingKey.SETTING_CHANGE_PASS_STORE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_OLD,"fore123456");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_OLD_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_NEW,"bugis12345");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_NEW_VISIBLE);
        await Helper.sendText(SettingKey.CHANGE_PASS_STORE_CONFIRM,"bugis12345");
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_CONFIRM_VISIBLE);
        await Expect.clickElement(SettingKey.CHANGE_PASS_STORE_SUBMIT_BTN);
    }




}

export default new SettingPage;