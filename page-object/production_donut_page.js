import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const donutKey = await getKey('production_donut', platform)
const loginKey = await getKey('login', platform);
const dashboardKey = await getKey('dashboard', platform);


class ProductionDonutPage {

    async accessProductionDonut() {
        await driver.pause(2000);
        await Expect.elementDisplayed(donutKey.CATAT_STOCK_BUTTON);
        await Expect.elementDisplayed(donutKey.CATAT_STOCK_TEXT);
        await Expect.elementDisplayed(donutKey.CATAT_STOCK_INFO);
        await Expect.clickElement(donutKey.CATAT_STOCK_BUTTON);
    }

    async clickProductionDonut() {
        await Expect.elementDisplayed(donutKey.BUAT_STOCK_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.BUAT_STOCK_ICON_EMPTY_STATE);
        await Expect.elementDisplayed(donutKey.BUAT_STOCK_TEXT_EMPTY_STATE);
        await Expect.clickElement(donutKey.BUAT_STOCK_DONUT_BUTTON);
    }

    async createProductionDonutOffline() {
        await Expect.elementDisplayed(donutKey.PLAIN_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.OFFLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.DONUT_SEARCH_PRODUCT);
        await Expect.clickElement(donutKey.OFFLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_CHOCO_HAZELNUT_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_CHOCO_HAZELNUT_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_MATCHA_ON_CLOUDS_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_MATCHA_ON_CLOUDS_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        // await Helper.scrollDown()
        // await Helper.scrollDown()
        // await Helper.scrollDown()
        await driver.pause(3000);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_COFFEE_BRULEE_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_COFFEE_BRULEE_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await driver.pause(2000);
        await Expect.clickElement(donutKey.SUBMIT_PRODUCTION_DONUT_BUTTON);
    }

    async createProductionDonutOnline() {
        await Expect.elementDisplayed(donutKey.PLAIN_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.OFFLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.DONUT_SEARCH_PRODUCT);
        await Expect.clickElement(donutKey.ONLINE_DONUT_BUTTON);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_CHOCO_HAZELNUT_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_CHOCO_HAZELNUT_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_MATCHA_ON_CLOUDS_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_MATCHA_ON_CLOUDS_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        // await Helper.scrollDown()
        // await Helper.scrollDown()
        await driver.pause(2000);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_CREME_BRULEE_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_CREME_BRULEE_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        // await Helper.scrollDown()
        await driver.pause(2000);
        await Expect.elementDisplayed(donutKey.ONLINE_DONUT_COFFEE_BRULEE_IMG);
        await Expect.clickElement(donutKey.ONLINE_DONUT_COFFEE_BRULEE_input);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(donutKey.SUBMIT_PRODUCTION_DONUT_BUTTON);
    }

    async popUpPageConfirmDonutProduction() {
        await Expect.elementDisplayed(donutKey.POPUP_PAGE_SUBMIT_DONUT_TEXT);
        await Expect.elementDisplayed(donutKey.POPUP_PAGE_PERIKSA_KEMBALI_BUTTON);
        await Expect.elementDisplayed(donutKey.POPUP_PAGE_SUBMIT_BUTTON);
        await Expect.clickElement(donutKey.POPUP_PAGE_SUBMIT_BUTTON);
        await driver.pause(2000);
        //staff id
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        //staff pin
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(dashboardKey.VERIFY_BUTTON);
        await driver.pause(3000);
    }

    async confirmCreateDonutProductionOnline() {
        await Expect.elementDisplayed(donutKey.CONFIRM_STOCK_SUBMIT_BUTTON);
        await Expect.elementDisplayed(donutKey.CONFIRM_STOCK_EDIT_BUTTON);
        await Expect.clickElement(donutKey.CONFIRM_STOCK_SUBMIT_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_STOCK_OFFLINE_INPUT1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_CONFIRM_STOCK_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_SUBMIT_STOCK_BUTTON);
    }

    async confirmCreateDonutProductionOffline() {
        await Expect.elementDisplayed(donutKey.CONFIRM_STOCK_SUBMIT_BUTTON);
        await Expect.elementDisplayed(donutKey.CONFIRM_STOCK_EDIT_BUTTON);
        await Expect.clickElement(donutKey.CONFIRM_STOCK_SUBMIT_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_STOCK_OFFLINE_INPUT1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_CONFIRM_STOCK_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(donutKey.ACTUAL_DONUT_SUBMIT_STOCK_BUTTON);
        await driver.pause(2000);
    }

    async confirmDonutId() {
    //staff id
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
    //staff pin
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_3);
    await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
    await Expect.clickElement(dashboardKey.VERIFY_BUTTON);
    await driver.pause(3000);
    }

    async backToMainMenu() {
        //staff id
        await Expect.clickElement(donutKey.BUAT_STOCK_HAMBURGER_ICON);
    }


}

export default new ProductionDonutPage;