import {Then, When} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";

import queue_page from "../page-object/queue_page.js";


Then(/^user verify antrian page$/, async () => {
    await queue_page.verifyQueuePage();
});

Then(/^user refresh order on pickup mode$/, async () => {
    await queue_page.refreshOrder();
});

Then(/^user search order$/, async () => {
    await queue_page.searchOrder();
});

Then(/^user click hamburger button$/, async () => {
    await queue_page.clickHamburgerBtn();
});

Then(/^user request reprint receipt$/, async () => {
    await queue_page.reprintReceipt();
});

Then(/^user complete manual order$/, async () => {
    await queue_page.refreshOrder();
});

When(/^user verify Order was ready$/, async () => {
    await queue_page.verifySheetCompleteOrder();
});

When(/^user click toggle all menu$/, async () => {
    await queue_page.clickAllOrderToggle();
});

When(/^user click order list for complete manual$/, async () => {
    await queue_page.clickListOrderForComplete();
});

Then(/^user verify manual complete on pickup mode$/, async () => {
    await queue_page.verifyManualComplete();
});

Then(/^user verify inflight manual complete$/, async () => {
    await queue_page.verifyInflightManualComplete();
});

Then(/^user verify request cancel order$/, async () => {
    await queue_page.requestCancelOrder();
});

Then(/^user confirm request cancel order$/, async () => {
    await queue_page.requestCancelOrderConfirm();
});

Then(/^user verify Tab order$/, async () => {
    await queue_page.verifyTabOrder();
});