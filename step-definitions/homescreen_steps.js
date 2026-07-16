import {Then, When} from "@wdio/cucumber-framework";
import homescreen_page from "../page-object/homescreen_page.js";
import shift_page from "../page-object/shift_page.js";
import Helper from "../helper/helper.js";


Then(/^the user is directed to the homescreen$/, async () => {
    await homescreen_page.clickHamburgerBtn();
});

When(/^user scroll left and right$/, async () => {
    await homescreen_page.scrollToLeftAndRight();
});

When(/^user go to setting$/, async () => {
    await homescreen_page.scrollToSetting();
});

Then(/^the user is directed to the homescreen dev2$/, async () => {
    await homescreen_page.clickHamburgerBtn();
    await driver.pause(4000)
    await Helper.scrollRight();
});

When(/^user go to setting section$/, async () => {
    await homescreen_page.clickHamburgerBtn();
    await homescreen_page.clickSettingSection();
});

When(/^user go to setting section with scroll left 2 times$/, async () => {
    await homescreen_page.clickHamburgerBtn();
    await homescreen_page.clickSettingSection2();
});

When(/^user click order menu page$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    // await Helper.scrollRight();
    await homescreen_page.clickOrderSection();
    await shift_page.verifyStart();
});

When(/^user click order menu page for SG$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickOrderSection();
    await shift_page.verifyStart();
});

// STICKER
When(/^user click Sticker button$/, async () => {
    await homescreen_page.clickStickerSection();
});


// homescreen
When(/^user click order Tab$/, async () => {
    await Helper.scrollRight();
    await homescreen_page.clickOrderSection();
});

When(/^user click antrian Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickAntrianSection();
});

When(/^user click shift Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickShiftSection();
});

When(/^user click setoran Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickCashManagementSection();
    await homescreen_page.clickSetoranSection();
    await driver.pause(3000)
});

When(/^user click Stock Management Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickStockManagementSection();
});

When(/^user click promo list Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickPromoListSection();
});

When(/^user click setting Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickPromoListSection();
});


When(/^user click server connection Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickConnectionSection();
    await driver.pause(3000)
});

Then(/^the user click setoran page$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickCashManagementSection();
    await homescreen_page.clickSetoranSection();
    await driver.pause(3000)
});

When(/^user click SR & PR calender Tab$/, async () => {
    await Helper.scrollRight();
    await Helper.scrollRight();
    await Helper.scrollRight();
    await homescreen_page.clickCalenderSection();
    await driver.pause(3000)
});

When(/^user click Donut Production section$/, async () => {
    await homescreen_page.clickDonutProductionSection();
});

When(/^user click Donut Waste section$/, async () => {
    await homescreen_page.clickDonutWasteSection();
});

When(/^user click Donut stock request section$/, async () => {
    await homescreen_page.clickSRSection();
});

When(/^user click Donut purchase request section$/, async () => {
    await homescreen_page.clickPRSection();
});

When(/^user click Donut transfer list section$/, async () => {
    await homescreen_page.clickTFListSection();
});

When(/^user click Donut goods receive section$/, async () => {
    await homescreen_page.clickGRSection();
});

When(/^user click Donut stock taking section$/, async () => {
    await homescreen_page.clickSTSection();
});

When(/^user click Donut out of stock section$/, async () => {
    await homescreen_page.clickOOSSection();
});