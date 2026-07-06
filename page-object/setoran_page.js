import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const SetoranKey = await getKey('Setoran', platform)


class SetoranPage {

    async verifySetoranPage() {
        await Expect.elementDisplayed(SetoranKey.SETORAN_TRF_TAB_BUTTON);
        await Expect.elementDisplayed(SetoranKey.SETORAN_VA_LAYOUT);
        await Expect.elementDisplayed(SetoranKey.SETORAN_HISTORY_TAB_BUTTON);
        await Expect.clickElement(SetoranKey.SETORAN_HISTORY_TAB_BUTTON);
        await Expect.elementDisplayed(SetoranKey.HISTORY_PERIODE_TEXT);
        await Expect.elementDisplayed(SetoranKey.HISTORY_TOTAL_SETORAN_TEXT);
        await Expect.elementDisplayed(SetoranKey.HISTORY_STATUS_TEXT);
        await driver.pause(2000);
        await Expect.elementDisplayed(SetoranKey.HISTORY_VA_LIST_1);
        await Expect.elementDisplayed(SetoranKey.HISTORY_VA_LIST_2);
        await Expect.elementDisplayed(SetoranKey.HISTORY_VA_LIST_3);
        await Expect.elementDisplayed(SetoranKey.HISTORY_VA_LIST_4);
        await Expect.elementDisplayed(SetoranKey.HISTORY_VA_LIST_5);
    }



}

export default new SetoranPage;