
import {When, Then, Given} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";
import {execSync} from "child_process";
import OrderPOSPage from "../page-object/order_fnb_POS.js";
import VoucherPage from "../page-object/voucher_page.js";
import Expect from "../helper/expect.js";


// ORDER ID
When(/^user click Dine In for Order$/, async () => {
    await OrderPOSPage.clickDineInBtn();
})

When(/^user click Take Away for Order$/, async () => {
    await OrderPOSPage.clickTakeAwayBtn();
})

When(/^user click Donut menu for Order$/, async () => {
    await OrderPOSPage.clickDonutMenuBtn();
})




When(/^system will show order on cart$/, async () => {
    await OrderPOSPage.verifyCartWithOrder();
})

When(/^user add spunbond$/, async () => {
    await OrderPOSPage.addSpunBond();
})

When(/^system will show list order on cart$/, async () => {
    await OrderPOSPage.verifyCartOrderListed();
})


When(/^system will show one order on cart$/, async () => {
    await OrderPOSPage.verifyCartOneOrder();
})


When(/^user click voucher button$/, async () => {
    await OrderPOSPage.verifyVoucher();
})

When(/^user Verify voucher button$/, async () => {
    await Helper.androidBackBtn();
    await OrderPOSPage.verifyVoucher();
})

When(/^user input donut by search feature$/, async () => {
    await OrderPOSPage.searchOrder();
})

When(/^user click "Bayar" button$/, async () => {
    await OrderPOSPage.clickPayment();
})

Then(/^user click Order button$/, async () => {
    await OrderPOSPage.clickOrder();
})




// VOUCHER
When(/^user verify uneligible voucher for payment$/, async () => {
    await VoucherPage.verifyUneligibleVoucher();
})

When(/^user verify eligible voucher for payment$/, async () => {
    await VoucherPage.verifyEligibleVoucher();
})

Then(/^user verify applied Voucher for order$/, async () => {
    await VoucherPage.verifyAppliedVoucherOrder();
})

Then(/^user verify applied Voucher by search$/, async () => {
    await VoucherPage.verifySearchVoucher();
})

Then(/^user verify general Voucher by search$/, async () => {
    await VoucherPage.verifyGeneralVoucher();
})

Then(/^user verify free cups Voucher by search$/, async () => {
    await VoucherPage.verifyFreeCupVoucher();
})

Then(/^user verify delete voucher order$/, async () => {
    await VoucherPage.verifyDeleteVoucherOrder();
})


// ORDER SG
When(/^user click Dine In SG for Order$/, async () => {
    await OrderPOSPage.clickDineInSGBtn();
})

When(/^user click coffee menu SG for Order$/, async () => {
    await OrderPOSPage.clickCoffeeMenuSGBtn();
})

When(/^user choose caffe latte for details menu on SG$/, async () => {
    await OrderPOSPage.clickCoffeeLatteSG();
    await OrderPOSPage.clickOrder();
})