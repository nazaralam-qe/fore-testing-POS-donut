import Expect from "../helper/expect.js";
import {getKey} from "../helper/keyFactory.js";
import helper from "../helper/helper.js";


// const shiftKey = await getKey('dashboard', platform);
const dashboardKey = await getKey('dashboard', platform);
const loginKey = await getKey('login', platform);

class shiftPage {

    async verifyStart(){
        await driver.pause(3000);
        await Expect.clickElement(dashboardKey.DASHBOARD_START_ORDER_BUTTON);
    }

    async verifyShiftStart(){
        await driver.pause(3000);
        await Expect.elementDisplayed(dashboardKey.DASHBOARD_START_SHIFT_BUTTON);
        await Expect.clickElement(dashboardKey.DASHBOARD_START_SHIFT_BUTTON);
    }

    async inputCashDrawer(){
        await Expect.elementDisplayed(dashboardKey.SHIFT_INPUT_CASH_DRAWER);
        await Expect.clickElement(dashboardKey.SHIFT_INPUT_CASH_DRAWER);
        await driver.pause(3000);
        // await Expect.clickByCoordinate(shiftKey.POS_STAFFID_PINPAD_2,1020,200)
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_0);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_0);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_0);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_0);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
    }

    async inputCup(){
        await Expect.elementDisplayed(dashboardKey.SHIFT_TEXT_REGULER_HOT);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_REGULER_HOT);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(dashboardKey.SHIFT_TEXT_LARGE_HOT);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_LARGE_HOT);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(dashboardKey.SHIFT_TEXT_REGULER_ICE);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_REGULER_ICE);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(dashboardKey.SHIFT_TEXT_LARGE_ICE);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_LARGE_ICE);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.elementDisplayed(dashboardKey.SHIFT_START_BUTTON);
        await Expect.clickElement(dashboardKey.SHIFT_START_BUTTON);
        await Expect.clickElement(dashboardKey.BOTTOMSHEET_SHIFT_START_BUTTON);
    }

    async inputCashDrawerSG(){
        await Expect.elementDisplayed(dashboardKey.SHIFT_INPUT_CASH_DRAWER);
        await Expect.clickElement(dashboardKey.SHIFT_INPUT_CASH_DRAWER);
        await driver.pause(3000);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_5);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_0);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
    }

    async inputCupSG(){
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_REGULER_HOT);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_REGULER_ICE);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_1);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(dashboardKey.SHIFT_TEXT_LARGE_ICE);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_4);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_2);
        await Expect.clickElement(loginKey.POS_STAFFID_PINPAD_ENTER);
        await Expect.clickElement(dashboardKey.SHIFT_START_BUTTON);
        await Expect.clickElement(dashboardKey.BOTTOMSHEET_SHIFT_START_BUTTON);
    }

    async inputShift(){
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
        await Expect.clickElement(dashboardKey.VERIFY_BUTTON);
    }

    async verifyHomescreen() {
        await driver.pause(3000);
        await helper.androidBackBtn();
        await helper.androidBackBtn();
        await Expect.elementDisplayed(dashboardKey.HOMESCREEN_SCREEN);
    }

    async verifyEndShiftBtn() {
        await Expect.elementDisplayed(dashboardKey.SHIFT_END_BUTTON);
        await driver.pause(1000);
    }

    async clickEndShiftBtn() {
        await driver.pause(3000);
        await Expect.clickElement(dashboardKey.SHIFT_END_BUTTON);
        await driver.pause(1000);
    }


}

export default new shiftPage();