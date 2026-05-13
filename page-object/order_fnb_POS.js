import Expect from "../helper/expect.js";
import {getKey} from "../helper/keyFactory.js";
import Helper from "../helper/helper.js";

const CatalogPOS = await getKey("catalogPOS", platform);

class OrderPOSPage {

    async clickDineInBtn(){
        await driver.pause(2000);
        await Expect.clickElement(CatalogPOS.ORDERS_OFFLINE_SECTION_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_DINE_IN_SECTION_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_INPUT_NAME_CUSTOMER);
        await Helper.pressKeyboard("test QA");
        await driver.pause(2000);
        await Expect.clickElement(CatalogPOS.ORDERS_OFFLINE_SECTION_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_INPUT_ORDER_CUSTOMER_BUTTON);
    }

    async clickTakeAwayBtn(){
        await driver.pause(2000);
        await Expect.clickElement(CatalogPOS.ORDERS_TAKE_AWAY_SECTION_BUTTON);
    }

    async clickDonutMenuBtn(){
        await driver.pause(2000);
        await Expect.clickElement(CatalogPOS.ORDERS_DONUT_BOX_12_BUTTON);
        await Expect.elementDisplayed(CatalogPOS.BOX_12_BUNDLE_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_BUNDLE_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_2_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_2_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_3_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_3_BUTTON);
        await Expect.elementDisplayed(CatalogPOS.BOX_12_BUNDLE_2_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_BUNDLE_2_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.clickElement(CatalogPOS.BOX_12_TIPE_DONUT_ADD_1_BUTTON);
        await Expect.elementDisplayed(CatalogPOS.MASUKKAN_KERANJANG_BUTTON);
        await Expect.clickElement(CatalogPOS.MASUKKAN_KERANJANG_BUTTON);
    }

    async verifyCartWithOrder(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW);
        await Expect.elementDisplayed(CatalogPOS.ORDERS_BAG_BUTTON);
        await Expect.elementDisplayed(CatalogPOS.ORDERS_VOUCHERS_BUTTON);
        await driver.pause(2000);
    }

    async addSpunBond(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_ADD_BAG_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_ADD_BAG_BUTTON);
    }

    async verifyCartOneOrder(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW_list1);
        await driver.pause(2000);
    }

    async verifyCartOrderListed(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW_list1);
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW_list2);
        await driver.pause(2000);
    }


    async verifyVoucher(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_VOUCHERS_EXIST_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_VOUCHERS_EXIST_BUTTON);
        await driver.pause(2000);
    }

    async searchOrder(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_SEARCH_ACTION);
        await Expect.clickElement(CatalogPOS.ORDERS_SEARCH_ACTION);
        await Helper.pressKeyboard("ayam pop")
        await driver.pause(2000);
        await Expect.clickElement(CatalogPOS.ORDERS_DONUT_AYAM_POP_BY_SEARCH);
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW_list1);
        await Expect.elementDisplayed(CatalogPOS.ORDERS_CART_SHOW_list2);
    }

    async clickPayment(){
        await Expect.elementDisplayed(CatalogPOS.ORDERS_PAYMENT_BUTTON);
        await Expect.clickElement(CatalogPOS.ORDERS_PAYMENT_BUTTON);
        await driver.pause(2000);
    }

    async clickOrder(){
        await Expect.clickElement(CatalogPOS.ORDERS_BUTTON_ADD_TO_CART);
        await driver.pause(2000);
    }


}
export default new OrderPOSPage();