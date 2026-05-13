
import {When, Then, Given} from "@wdio/cucumber-framework";
import loginPagePOS from "../page-object/login_pagePOS.js";
import Helper from "../helper/helper.js";
import {execSync} from "child_process";
import helper from "../helper/helper.js";
When(/^the user opens the Fore POS$/, async () => {
    // await browser.relaunchActiveApp();
    await Helper.restartApp();
})

When(/^the user start the Fore POS$/, async () => {
    await  Helper.resetApp()
})
Then(/^user allow gps$/, async () => {
    await loginPagePOS.allowedgps();
});
Then(/^user input username$/, async () => {
    await loginPagePOS.inputUsername();
});
When(/^user input password$/, async () => {
    await loginPagePOS.inputPassword();
})
Then(/^user click masuk$/, async () => {
    await loginPagePOS.clickMasuk();
});
Then(/^user choose role$/, async () => {
    await loginPagePOS.verifyBarista();
});
Then(/^user input barista id$/, async () => {
    await loginPagePOS.inputBaristaId();
});
Then(/^user input barista password$/, async () => {
    await loginPagePOS.inputBaristaPass();
});
Then(/^user success login$/, async () => {
    await loginPagePOS.verifyDashboardCashier();
});


// SG
Then(/^user input username SG$/, async () => {
    await loginPagePOS.inputUsernameSG();
});
When(/^user input password SG$/, async () => {
    await loginPagePOS.inputPasswordSG();
})