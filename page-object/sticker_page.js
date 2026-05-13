import {getKey} from "../helper/keyFactory.js";
import Expect from "../helper/expect.js";
import Helper from "../helper/helper.js";

const StickerKey = await getKey('sticker', platform)

class StickerPage {

    async verifyStickerPage(){
        await driver.pause(2000);
        await Expect.elementDisplayed(StickerKey.STICKER_CREATE_NEW_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_EXPIRED_TITLE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_HISTORY_CREATE_TITLE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_SETENGAH_JADI_TYPE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_BAHAN_TYPE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_BAHAN_TYPE_BUTTON);
    }

    async createSticker(){
        await Expect.clickElement(StickerKey.STICKER_CREATE_NEW_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_CATALOG_CLOSE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_CATALOG_SETENGAH_JADI_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_CATALOG_BAHAN_BUTTON);
    }

    async createChizuSticker(){
        await Expect.elementDisplayed(StickerKey.STICKER_BLUE_VELVET_SAUCE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_CHIZU_SAUCE_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_CHIZU_SAUCE_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_ADD_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_DISCARD_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_ADD_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_ADD_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_MINUS_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_MINUS_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_CETAK_BUTTON);
    }

    async createWhipCreamSticker(){
        await Expect.clickElement(StickerKey.STICKER_CATALOG_BAHAN_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_BOTOL_RTD_250ML_CITILINK_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_OAT_MILK_BUTTON);
        await Expect.elementDisplayed(StickerKey.STICKER_WHIPPED_CREAM_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_WHIPPED_CREAM_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_ADD_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_ADD_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_ADD_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_MINUS_BUTTON);
        await Expect.clickElement(StickerKey.STICKER_CETAK_BUTTON);
    }



}

export default new StickerPage;