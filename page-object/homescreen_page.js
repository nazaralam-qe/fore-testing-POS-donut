import Expect from "../helper/expect.js";
import {getKey} from "../helper/keyFactory.js";
import Helper from "../helper/helper.js";

const HomescreenKey = await getKey("homescreen", platform);

class HomescreenPage {

    async clickHamburgerBtn(){
        await driver.pause(2000);
        await Expect.clickElement(HomescreenKey.HOMESCREEN_HAMBURGER_BUTTON)
    }

    async scrollToLeftAndRight() {
        await Helper.scrollRight()
        await driver.pause(1000);
        await Helper.scrollRight()
        await driver.pause(1000);
        await Helper.scrollRight()
        await driver.pause(1000);
        await Helper.scrollLeft()
        await driver.pause(1000);
    }

    async scrollToSetting() {
        await Helper.scrollRight();
        await driver.pause(1000);
        await Helper.scrollRight();
        await driver.pause(1000);
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SETTINGS_BUTTON);
    }

    async clickOrderSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_ORDER_BUTTON);
    }

    async clickAntrianSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_ANTRIAN_BUTTON);
    }

    async clickShiftSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SHIFT_BUTTON);
    }

    async clickSetoranSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SETORAN_BUTTON);
    }

    async clickCashManagementSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_CASH_MANAGE_BUTTON);
    }

    async clickStockManagementSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_STOCK_MANAGEMENT_BUTTON);
    }

    async clickPromoListSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_PROMO_LIST_BUTTON);
    }

    async clickConnectionSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SERVER_CONNECTION_BUTTON);
    }

    async clickSettingSection() {
        await Helper.scrollRight();
        await Helper.scrollRight();
        await Helper.scrollRight();
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SETTINGS_BUTTON);
    }

    async clickSettingSection2() {
        await Helper.scrollRight();
        await Helper.scrollRight();
        await driver.pause(1000);
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SETTINGS_BUTTON);
    }

    async clickStickerSection() {
        await Helper.scrollLeft();
        await driver.pause(1000);
        await Expect.clickElement(HomescreenKey.HOMESCREEN_STIKER_BUTTON);
    }

    async clickCalenderSection() {
        await Expect.clickElement(HomescreenKey.HOMESCREEN_SR_PR_CALENDER_BUTTON);
    }

    async clickDonutProductionSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_DONUT_PRODUCTION_BUTTON);
    }

    async clickDonutWasteSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_WASTE_BUTTON);
    }

    async clickSRSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_STORE_REQUEST_BUTTON);
    }

    async clickPRSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_PURCHASE_REQUEST_BUTTON);
    }

    async clickTFListSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_TRANSFER_LIST_BUTTON);
    }

    async clickGRSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_GOODS_RECEIVE_BUTTON);
    }

    async clickSTSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_STOCK_TAKING_BUTTON);
    }

    async clickOOSSection() {
        await Expect.clickElement(HomescreenKey.MANAGEMENT_OUT_OF_STOCK_BUTTON);
    }


}
export default new HomescreenPage();