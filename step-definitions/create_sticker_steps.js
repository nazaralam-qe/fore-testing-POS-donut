import {Then, When} from "@wdio/cucumber-framework";
import Helper from "../helper/helper.js";

import StickerPage from "../page-object/sticker_page.js";


Then(/^user verify sticker page$/, async () => {
    await StickerPage.verifyStickerPage();
});

Then(/^user create sticker$/, async () => {
    await StickerPage.createSticker();
});

Then(/^user create chizu sticker dari bahan setengah jadi$/, async () => {
    await StickerPage.createChizuSticker();
});

Then(/^user create whip cream dari bahan baku$/, async () => {
    await StickerPage.createWhipCreamSticker();
});