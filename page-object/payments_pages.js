import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const PaymentKey = await getKey('transaction', platform)

class PaymentPage {

    async verifyItemAdditional(){
        await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.TRX_TITLE_ADDITONAL);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_PAPERBAG_S);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_PAPERBAG_S_ADD);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_PAPERBAG_M);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_PAPERBAG_M_ADD);
        // await Expect.elementDisplayed(PaymentKey.TRX_ITEM_SPUNBOND_S);
        // await Expect.elementDisplayed(PaymentKey.TRX_ITEM_SPUNBOND_S_ADD);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_SPUNBOND_M);
        await Expect.elementDisplayed(PaymentKey.TRX_ITEM_SPUNBOND_M_ADD);
    }

    async verifyPaymentLogo(){
        await Expect.elementDisplayed(PaymentKey.TRX_QRIS_LOGO);
        await Expect.elementDisplayed(PaymentKey.TRX_CARD_LOGO);
        await Expect.elementDisplayed(PaymentKey.TRX_CASH_LOGO);
    }

    async verifyPaymentQRIS(){
        await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.TRX_QRIS_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_QRIS_BCA_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_QRIS_OTHER_BUTTON);
    }

    async verifyPaymentCard(){
        await Expect.clickElement(PaymentKey.TRX_CARD_LOGO);
        await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.TRX_CARD_MANDIRI_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_CARD_BCA_BUTTON);
    }


    async verifyPaymentCash(){
        await Expect.clickElement(PaymentKey.TRX_CASH_LOGO);
        await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.TRX_CASH_1ST_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_CASH_2ND_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_CASH_3RD_BUTTON);
        await Expect.elementDisplayed(PaymentKey.TRX_CASH_INPUT_TEXTBOX);
    }

    async verifyCustDetails(){
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_NAME_INPUT);
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_NAME_LOGO);
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_PRICE);
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_PRICE_TOTAL_PAY);
    }

    async verifyPayButton(){
        await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.TRX_PAYMENT_BUTTON);
    }

    async clickPayButton(){
        await driver.pause(2000);
        await Expect.clickElement(PaymentKey.TRX_PAYMENT_BUTTON);
    }

    async addPaperBag(){
        // await driver.pause(2000);
        await Expect.elementDisplayed(PaymentKey.ITEM_PB_S_ADD);
        await Expect.clickElement(PaymentKey.ITEM_PB_S_ADD);
        await Expect.elementDisplayed(PaymentKey.ITEM_PB_M_ADD);
        await Expect.clickElement(PaymentKey.ITEM_PB_M_ADD);
    }



    async clickPayButtonCash(){
        await Expect.clickElement(PaymentKey.TRX_CASH_LOGO);
        await driver.pause(2000);
        await Helper.sendText(PaymentKey.TRX_CUSTOMER_NAME_INPUT,"Automation");
        await Expect.clickElement(PaymentKey.TRX_PAYMENT_BUTTON);
        await driver.pause(5000);
    }

    async changePayment(){
        await Expect.clickElement(PaymentKey.TRX_QRIS_LOGO);
        await Expect.clickElement(PaymentKey.TRX_QRIS_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_QRIS_BCA_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_QRIS_OTHER_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_CARD_LOGO);
        await Expect.clickElement(PaymentKey.TRX_CARD_BCA_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_CARD_MANDIRI_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_CASH_LOGO);
        await Expect.clickElement(PaymentKey.TRX_CASH_1ST_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_CASH_2ND_BUTTON);
        await Expect.clickElement(PaymentKey.TRX_CASH_3RD_BUTTON);
    }

    async detailTotalAdditionalBag(){
        await Expect.elementDisplayed(PaymentKey.TRX_PRICE_TOTAL_WITH_ADD_BAG);
        await Expect.elementDisplayed(PaymentKey.TRX_PAYMENT_BUTTON);
    }

    async inputNoWaCustomer(){
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_WA_LOGO);
        await Expect.elementDisplayed(PaymentKey.TRX_CUSTOMER_WA_INPUT);
        await Helper.sendText(PaymentKey.TRX_CUSTOMER_WA_INPUT,"08156354668");
        await driver.pause(2000);
    }



}

export default new PaymentPage;