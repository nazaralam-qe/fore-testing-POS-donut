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

Then(/^user log out$/, async () => {
    await SettingPage.userLogOut();
});

Then(/^user setting change base url to devapi2$/, async () => {
    await SettingPage.setDevApi2();
});
