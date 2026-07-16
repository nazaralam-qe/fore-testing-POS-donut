import {Then, When} from "@wdio/cucumber-framework";
import production_donut_page from "../page-object/production_donut_page.js";



Then(/^the user access production donut on Fore donut$/, async () => {
    await production_donut_page.accessProductionDonut();
});

When(/^user click production donut stock$/, async () => {
    await production_donut_page.clickProductionDonut();
});

// When(/^user click production donut stock$/, async () => {
//     await production_donut_page.clickProductionDonut();
// });

When(/^user create stock donut for offline stock$/, async () => {
    await production_donut_page.createProductionDonutOffline();
});

When(/^user create stock donut for online stock$/, async () => {
    await production_donut_page.createProductionDonutOnline();
});

When(/^user re-confirm create stock donut$/, async () => {
    await production_donut_page.popUpPageConfirmDonutProduction();
});

When(/^user confirm donut stock after production for online stock$/, async () => {
    await production_donut_page.confirmCreateDonutProductionOnline();
});

When(/^user confirm donut stock after production for offline stock$/, async () => {
    await production_donut_page.confirmCreateDonutProductionOffline();
});

Then(/^user confirm stock donut by input staff id & pin$/, async () => {
    await production_donut_page.confirmDonutId();
});

Then(/^user Back to main menu$/, async () => {
    await production_donut_page.backToMainMenu();
});

