import {Then, When} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";

import SettingPage from "../page-object/settings_page.js";


// ID
Then(/^user setting printers$/, async () => {
    await SettingPage.setBypassSystemValueAdjuster();
});

Then(/^user change mode to pickup$/, async () => {
    await SettingPage.changePickupMode();
});

Then(/^user change password store$/, async () => {
    await SettingPage.changePassStore();
});

Then(/^user change PIN barista$/, async () => {
    await SettingPage.changePinBarista();
});

Then(/^user rollback to default of password store$/, async () => {
    await SettingPage.changePassStoreDefault();
});

Then(/^user rollback to default of PIN barista$/, async () => {
    await SettingPage.changePinBaristaDefault();
});


// SG
Then(/^user change password store SG$/, async () => {
    await SettingPage.changePassStoreSG();
});

Then(/^user change PIN barista SG$/, async () => {
    await SettingPage.changePinBarista();
});

Then(/^user rollback to default of password store SG$/, async () => {
    await SettingPage.changePassStoreDefaultSG();
});

Then(/^user rollback to default of PIN barista SG$/, async () => {
    await SettingPage.changePinBaristaDefault();
});