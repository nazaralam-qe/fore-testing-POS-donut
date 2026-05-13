import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";
import helper from "../helper/helper.js";

const QueueKey = await getKey('antrean', platform)

class queuePage {

    async refreshOrder() {
        await Expect.elementDisplayed(QueueKey.QUEUE_SEARCH_ORDER_TEXTBOX);
        await Expect.clickElement(QueueKey.QUEUE_REFRESH_ANTRIAN_BUTTON);
        await driver.pause(2000);
        await Expect.elementDisplayed(QueueKey.QUEUE_REFRESH_ANTRIAN_BUTTON);
    }

    async searchOrder() {
        await Expect.elementDisplayed(QueueKey.QUEUE_SEARCH_ORDER_TEXTBOX);
        await Expect.clickElement(QueueKey.QUEUE_SEARCH_ORDER_TEXTBOX);
        await Expect.clickElement(QueueKey.SEARCH_DINE_IN_BUTTON);
        await driver.pause(2000);
        await Helper.sendText(QueueKey.SEARCH_ORDER_INPUT_TEXTBOX,"5004"); //change
        await Expect.elementDisplayed(QueueKey.QUEUE_ORDER_LIST);
        await Expect.clickElement(QueueKey.QUEUE_ORDER_LIST);
    }

    async reprintReceipt() {
        await Expect.clickElement(QueueKey.QUEUE_DETAILS_MORE_INFO_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_MORE_INFO_REPRINT_RECEIPT);
        await Expect.clickElement(QueueKey.QUEUE_MORE_INFO_REPRINT_RECEIPT);
        await driver.pause(2000);
        await Expect.elementDisplayed(QueueKey.SHEET_REPRINT_RECEIPT_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_REPRINT_NOTES_REASON_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_REPRINT_NOTES_REASON_TEXTBOX);
        await Helper.sendText(QueueKey.SHEET_REPRINT_NOTES_REASON_TEXTBOX,"Testing reprint receipt Automation");
        await Expect.elementDisplayed(QueueKey.SHEET_NOTES_USERNAME_TEXTBOX);
        await Expect.elementDisplayed(QueueKey.SHEET_NOTES_USERNAME_PHONE);
        await Expect.elementDisplayed(QueueKey.SHEET_RECEIPT_PRINTED_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_REPRINT_RECEIPT_BUTTON);
        await Expect.clickElement(QueueKey.SHEET_REPRINT_RECEIPT_BUTTON);
    }

    async requestCancelOrder() {
        await Expect.clickElement(QueueKey.QUEUE_ORDER_LIST);
        await Expect.clickElement(QueueKey.QUEUE_DETAILS_MORE_INFO_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_MORE_INFO_CANCEL_REQUEST);
        await Expect.clickElement(QueueKey.QUEUE_MORE_INFO_CANCEL_REQUEST);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_ORDER_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_NOTES_REASON_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_NOTES_REASON_TEXTBOX);
        await Helper.sendText(QueueKey.SHEET_CANCEL_NOTES_REASON_TEXTBOX,"Testing reprint receipt Automation");
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_PHOTO_LABEL);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_ADD_IMG_BUTTON);
        await Expect.clickElement(QueueKey.SHEET_CANCEL_ADD_IMG_BUTTON);
        await Expect.clickElement(QueueKey.GALLERY_ADD_IMG_BUTTON);
        await driver.pause(5000);
        await Expect.clickElement(QueueKey.GALLERY_CHOOSE_IMG);
        await driver.pause(5000);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_ORDER_BUTTON);
        await Expect.clickElement(QueueKey.SHEET_CANCEL_ORDER_BUTTON);
    }

    async requestCancelOrderConfirm() {
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_WARNING_ICON);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_WARNING_TITLE);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_WARNING_DESC);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_CONFIRM_BUTTON);
        await Expect.elementDisplayed(QueueKey.SHEET_CANCEL_RECHECK_BUTTON);
        await Expect.clickElement(QueueKey.SHEET_CANCEL_CONFIRM_BUTTON);
        await driver.pause(7000);
        await helper.androidBackBtn();
    }

    async verifyQueuePage() {
        await driver.pause(2000);
        await Expect.elementDisplayed(QueueKey.QUEUE_CARD_ORDER_LIST_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_SEARCH_ORDER_TEXTBOX);
        await Expect.elementDisplayed(QueueKey.QUEUE_TOGGLE_ALL_ORDER_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_ORDER_LIST);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_NUMBER);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_CUSTOMER_NAME);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_CHANNEL_TYPE);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_ETA_VALUE);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_INFORMATION_ORDER)
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_PRODUCT_DETAILS_ALL);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_READY_PICKUP_LABEL);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_MORE_INFO_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_DETAILS_READY_TO_PICKUP_BUTTON);
        await driver.pause(3000);
        await Expect.elementDisplayed(QueueKey.QUEUE_ORDER_TAB);
    }

    async verifySheetCompleteOrder() {
        await driver.pause(2000);
        await Expect.clickElement(QueueKey.QUEUE_DETAILS_READY_TO_PICKUP_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_ORDER_WARNING_ICON);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_ORDER_WARNING_TITLE);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_ORDER_WARNING_DESC);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_ORDER_DONE_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_ORDER_RECHECK_BUTTON);
        await Expect.clickElement(QueueKey.QUEUE_FINISH_ORDER_DONE_BUTTON);
    }

    async clickAllOrderToggle() {
        await driver.pause(2000);
        await Expect.clickElement(QueueKey.QUEUE_TOGGLE_ALL_ORDER_BUTTON);
    }

    async clickHamburgerBtn() {
        await driver.pause(1000);
        await Expect.clickElement(QueueKey.QUEUE_HAMBURGER_BUTTON);
    }

    async clickListOrderForComplete() {
        await driver.pause(2000);
        await Expect.clickElement(QueueKey.QUEUE_ORDER_LIST);
    }


    async verifyTabOrder() {
        await driver.pause(2000);
        await Expect.elementDisplayed(QueueKey.QUEUE_ORDER_TAB);
    }

    async verifyManualComplete() {
        await Expect.clickElement(QueueKey.QUEUE_ORDER_LIST);
        await driver.pause(2000);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_CONFIRM_LABEL);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_CALL_AGAIN_BUTTON);
        await Expect.elementDisplayed(QueueKey.QUEUE_FINISH_MANUAL_COMPLETE_BUTTON);
        await Expect.clickElement(QueueKey.QUEUE_FINISH_MANUAL_COMPLETE_BUTTON);
    }

    async verifyInflightManualComplete() {
        await Expect.elementDisplayed(QueueKey.INFLIGHT_FINISH_ORDER_CHECK_ICON);
        await Expect.elementDisplayed(QueueKey.INFLIGHT_FINISH_QUEUE_NUMBER_LABEL);
        await Expect.elementDisplayed(QueueKey.INFLIGHT_FINISH_ITEMS_LABEL);
        await Expect.elementDisplayed(QueueKey.INFLIGHT_FINISH_DIVIDER_LINE);
        await Expect.elementDisplayed(QueueKey.INFLIGHT_FINISH_PROCESS_LABEL);
        await driver.pause(3000);
        await Expect.elementDisplayed(QueueKey.QUEUE_ORDER_TAB);
    }



}

export default new queuePage;