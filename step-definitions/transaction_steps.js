import {Then, When} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";

import PaymentPage from "../page-object/payments_pages.js";
import SetoranPage from "../page-object/setoran_page.js";


When(/^user verify payment method QRIS$/, async () => {
    // await PaymentPage.verifyItemAdditional();
    await PaymentPage.verifyPaymentLogo();
    await PaymentPage.verifyPaymentQRIS();
});

When(/^user verify payment method Card$/, async () => {
    await PaymentPage.verifyPaymentCard();
});

Then(/^user verify payment method Cash$/, async () => {
    await PaymentPage.verifyPaymentCash();
    await PaymentPage.verifyCustDetails();
    await PaymentPage.verifyPayButton();
});

Then(/^user payment with Cash$/, async () => {
    await PaymentPage.clickPayButtonCash();
});

Then(/^user add paperbag$/, async () => {
    await PaymentPage.addPaperBag();
});


Then(/^user verify total price with additional bag$/, async () => {
    await PaymentPage.detailTotalAdditionalBag();
});

Then(/^user change payment$/, async () => {
    await PaymentPage.changePayment();
    await PaymentPage.verifyPayButton();
});


Then(/^user input phone number customer$/, async () => {
    await PaymentPage.inputNoWaCustomer();
});

// VA
Then(/^the user verify VA page$/, async () => {
    await SetoranPage.verifySetoranPage();
});
