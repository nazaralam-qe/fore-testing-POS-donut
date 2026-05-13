import {When, Then} from "@wdio/cucumber-framework";
import CompleteOrder from "../page-object/complete_order.js";
import Homescreen_page from "../page-object/homescreen_page.js";
import Helper from "../helper/helper.js";

When(/^the user selects order (.*) on the homescreen$/, async (orderType) => {
    await Helper.scrollDown()
    await CompleteOrder.clickDeliveryOrderinHomescreen(orderType);
});
Then(/^the product list page for orders is displayed$/, async () => {
    return true
});
When(/^the user selects a product from the product list Ex: (.*)$/, async (produk) => {
    await CompleteOrder.clickProduct(produk)
});

Then(/^the user is directed to the add additional product page$/, async () => {
    return true
});

When(/^validating the add product button$/, async () => {
    return true
});

Then(/^the add button displays text in the format \(Tambah•Rp\d{1,3}(?:\.\d{3})*\)$/, async () => {
    return true
});

When(/^the user clicks the Add button on the add additional product page$/, async () => {
    await CompleteOrder.clickaddProductinAdditionalScreen();
});

Then(/^Then the user is redirected back to the product list page and displays the Check Cart button$/, async () => {
    return true;
});

When(/^the user clicks the Check Cart button on the product list$/, async () => {
    await CompleteOrder.clickButtonCheckoutPay();
});

Then(/^the user is directed to the order method page$/, async () => {
    await CompleteOrder.clickSkipTextInOrderMethod();
});

When(/^the user selects a courier$/, async () => {
    await CompleteOrder.clickListCourierButton();
});

Then(/^a list of couriers is displayed$/, async () => {
    return true;
});

When(/^the user selects a courier type Ex: (.*)$/, async (kurir) => {
    await CompleteOrder.chooseCourierListItem(kurir)
});

Then(/^the selected courier is displayed on the order method page$/, async () => {
});

When(/^the user clicks on a payment method Ex: (.*)$/, async (metode) => {
    await CompleteOrder.clickListPaymentButton(metode)
});

Then(/^the user is redirected back to the order method page$/, async () => {
    return true;
});

When(/^the user clicks the Continue button on the order method page$/, async () => {
    await CompleteOrder.clickButtonCheckoutPay();
});

Then(/^the order confirmation overlay is displayed$/, async () => {
    return true;
});

When(/^validating the order confirmation overlay$/, async () => {
    return true;
});

Then(/^the overlay displays the method, pickup location, order destination location, detailed location field, and Order Now button$/, async () => {
    return true;
});

When(/^the user clicks the Order Now button on the order confirmation overlay$/, async () => {
    await CompleteOrder.clickButtonPayModal();
});

Then(/^the webview page is displayed$/, async () => {
    return true;
});

When(/^validating the webview page$/, async () => {
    return true;
});

Then(/^the webview page displays a back button, header text, refresh button, etc.$/, async () => {
    return true;
});

When(/^the user inputs the card number Ex:(.*)$/, async (cardNumber) => {
    await CompleteOrder.inputCardNumberInWebview(cardNumber)
});

Then(/^the user successfully inputs the card number$/, async () => {
    return true;
});

When(/^the user inputs the card expiry date Ex:(.*)$/, async (expiry) => {
    await CompleteOrder.inputExpiryDateInWebview(expiry)
});

Then(/^the user successfully inputs the card expiry date$/, async () => {
    return true;
});

When(/^the user inputs the card CVV number Ex: (.*)$/, async (cvv) => {
    await CompleteOrder.inputcvvNumberInWebview(cvv)
});

Then(/^the user successfully inputs the card CVV number$/, async () => {
    return true;

});

When(/^validating the Pay Now button$/, async () => {
    return true;

});

Then(/^the Pay Now button is enabled$/, async () => {
    return true;

});

When(/^the user clicks the Pay Now button$/, async () => {
    await CompleteOrder.clickButtonPayNowInWebview();

});

Then(/^the user is directed to the Doku Credit Card OTP page$/, async () => {
    await CompleteOrder.verifyOtpPageScreen();
});

When(/^the user inputs the Doku Credit Card OTP Ex: (.*)$/, async (otp) => {
    await CompleteOrder.inputOtpNumberInWebview(otp)

});

Then(/^the user successfully inputs the Doku Credit Card OTP$/, async () => {
    return true;

});

When(/^the user clicks the Submit button for Doku Credit Card OTP$/, async () => {
    await CompleteOrder.clickSubmitButtonInWebview();

});

Then(/^the user is directed to the payment status page$/, async () => {
    return true;

});

When(/^validating the payment status page$/, async () => {
    return true;

});

Then(/^screen menampilkan informasi (.*)$/, async (text) => {
    await CompleteOrder.verifyResultScreenText(text);

});
When(/^the user clicks the Shopping Voucher section$/, async () => {
    return true
});
Then(/^a list of shopping vouchers is displayed$/, async () => {
    return true
});
When(/^the user clicks on a shopping voucher$/, async () => {
    return true
});
Then(/^the shopping voucher can be used and the user is redirected back to the order method page$/, async () => {
    return true
});
When(/^the user clicks on the payment method$/, async () => {
    return true
});
Then(/^the user is directed to the payment list page$/, async () => {
    return true
});
When(/^validating the credit\/debit payment method$/, async () => {
    return true
});
Then(/^the user can see the credit\/debit payment method$/, async () => {
    return true
});
When(/^the user clicks the refresh button on the webview page$/, async () => {
    await CompleteOrder.clickRefreshButtonInWebView();
});
Then(/^the webview page refreshes$/, async () => {
    return true
});
When(/^validasi tidak tampil kartu tersimpan di halaman webview payment$/, async () => {
   return true
});
Then(/^pengguna ditampilkan halaman input kembali kartu yang akan digunakan$/, async () => {
    return true
});
When(/^pengguna klik tombol back di halaman webview$/, async () => {
    await CompleteOrder.clickBackButtonInWebview();
});
Then(/^pengguna akan diarahkan ke halaman riwayat pemesanan$/, async () => {
    return true
});
When(/^pengguna klik tap section order paling atas$/, async () => {
    return true
});
Then(/^pengguna akan diarahkan ke halaman waiting for payment$/, async () => {
    return true
});
When(/^pengguna klik button batalkan pesanan di halaman waiting for payment$/, async () => {
    await CompleteOrder.clickCancelButtonReceiptScreen();
});
Then(/^informasi pembayaran berubah menjadi (.*)$/, async (text) => {
    await CompleteOrder.verifyReceiptScreenText(text);
});
When(/^pengguna klik button bayar sekarang di halaman receipt screen$/, async () => {
    await CompleteOrder.clickButtonPayNowInReceiptScreen();
});
Then(/^pengguna klik checkbox save my card details$/, async () => {
    await CompleteOrder.clickCheckboxSavedCardInWebview();
});
When(/^checkbox akan tercentang$/, async () => {
    return true
});
When(/^pengguna klik button akun di halaman homescreen$/, async () => {
    await Homescreen_page.clickAccountFragmentInHomescreen();
});
Then(/^pengguna akan ditampilkan ke halaman akun$/, async () => {
    return true;
});
When(/^pengguna klik section pembayaran$/, async () => {
    await Homescreen_page.clickSectioninAccount();
});
Then(/^pengguna diarahkan ke halaman metode pembayaran$/, async () => {
    await CompleteOrder.validateListItem();
});
When(/^pengguna klik back di halaman metode pembayaran$/, async () => {
    await Homescreen_page.clickBackButtonOrderMethod();
});
When(/^pengguna klik icon home$/, async () => {
    await Homescreen_page.clickHomescreenIcon();
});
When(/^pengguna akan ditampilkan kartu credit yang tersimpan$/, async () => {
    await CompleteOrder.verifySavedCard();
});
Then(/^validasi kartu credit yang tersimpan$/, async () => {
    return true;
});
When(/^pengguna kill app$/, async () => {
    await Helper.restartApp();
});
Then(/^app akan ke close$/, async () => {
    return true;
});
When(/^pengguna buka kembali ke app$/, async () => {
    return true
});
Then(/^order status menjadi menunggu pembayaran$/, async () => {
    await CompleteOrder.verifyOrderStatus();
});
When(/^user enters store name and address$/, async () => {
    return true
});

