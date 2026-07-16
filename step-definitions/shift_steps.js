
import {When, Then, Given} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";
import {execSync} from "child_process";
import shift_page from "../page-object/shift_page.js";
import login_pagePOS from "../page-object/login_pagePOS.js";
import homescreen_page from "../page-object/homescreen_page.js";



When(/^user open POS apps$/, async () => {
    // await Helper.restartApp();
    await  Helper.resetApp()
})

When(/^user click start order button$/, async () => {
    await login_pagePOS.loginForePOS();
    await shift_page.verifyStart();
})

When(/^user click order button$/, async () => {
    await shift_page.verifyStart();
})

Then(/^user click start shift button$/, async () => {
    await shift_page.verifyShiftStart();
})

Then(/^user input 250 to cash drawer$/, async () => {
    await shift_page.inputCashDrawer();
})

Then(/^user input quantities cups total$/, async () => {
    await shift_page.inputCup();
})

When(/^user click start order button on SG region$/, async () => {
    await login_pagePOS.loginForeSG();
    await shift_page.verifyStart();
})

Then(/^user input 150 to cash drawer$/, async () => {
    await shift_page.inputCashDrawerSG();
})

Then(/^user input quantities cups total SG$/, async () => {
    await shift_page.inputCupSG();
})

Then(/^user input staff identification$/, async () => {
    await shift_page.inputShift();
})

Then(/^user shift should start successfully$/, async () => {
    await shift_page.verifyHomescreen();
})

Then(/^user shift should end successfully$/, async () => {
    await shift_page.verifyHomescreen();
})

Then(/^user verify shift end displayed$/, async () => {
    await shift_page.verifyEndShiftBtn();
})


Then(/^user click shift end$/, async () => {
    await shift_page.clickEndShiftBtn();
})

Then(/^user verify shift start displayed$/, async () => {
    await shift_page.verifyStartShiftBtn();
})