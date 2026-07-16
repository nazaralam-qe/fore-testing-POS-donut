import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const VoucherKey = await getKey('voucher', platform)

class VoucherPage {

    async verifyUneligibleVoucher() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_SECTION_UNELIGIBLE);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_UNELIGIBLE_TEXT);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_UNELIGIBLE_BUTTON);
        await Expect.clickElement(VoucherKey.VOUCHER_UNELIGIBLE_BUTTON);
        await driver.pause(2000);
    }

    async verifyEligibleVoucher() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_SECTION_ELIGIBLE);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_DESC);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_BUTTON);
        await Expect.clickElement(VoucherKey.VOUCHER_SECTION_ELIGIBLE);
        await Expect.clickElement(VoucherKey.VOUCHER_ELIGIBLE_USE_NOW_BUTTON);
        await driver.pause(2000);
    }

    async verifyAppliedVoucherOrder() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_APPLIED);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_DELETE_BUTTON);
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_ANOTHER_VOUCHER);
        await driver.pause(2000);
    }

    async verifySearchVoucher() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await Expect.clickElement(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard("offline");
        await Expect.elementDisplayed(VoucherKey.VOUCHER_SEARCH_BUTTON);
        await Expect.clickElement(VoucherKey.VOUCHER_SEARCH_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(VoucherKey.VOUCHER_APPLY_BY_SEARCH_BTN);
    }

    async verifyFreeCupVoucher() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await Expect.clickElement(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard("free cup classic");
        await Expect.clickElement(VoucherKey.VOUCHER_SEARCH_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(VoucherKey.VOUCHER_APPLY_BY_SEARCH_BTN);
    }

    async verifyGeneralVoucher() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await Expect.clickElement(VoucherKey.VOUCHER_INPUT_TEXTBOX);
        await driver.pause(2000);
        await Helper.pressKeyboard("offline general");
        await Expect.clickElement(VoucherKey.VOUCHER_SEARCH_BUTTON);
        await driver.pause(2000);
        await Expect.clickElement(VoucherKey.VOUCHER_APPLY_BY_SEARCH_BTN);
    }

    async verifyDeleteVoucherOrder() {
        await Expect.elementDisplayed(VoucherKey.VOUCHER_ELIGIBLE_DELETE_BUTTON);
        await Expect.clickElement(VoucherKey.VOUCHER_ELIGIBLE_DELETE_BUTTON);
        await driver.pause(2000);
    }



}

export default new VoucherPage;