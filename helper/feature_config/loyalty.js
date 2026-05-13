import knex from "../../config/knex.js";
import databaseHelper from "../databaseHelper.js";

class loyaltyConfig {
    async beforeScenario(skenarioId) {
        switch (skenarioId) {
            case "TC_LOY_01":
            case "TC_LOY_02":
                await databaseHelper.injectPoint();
                await databaseHelper.deleteVoucher()
                break;
        }
    }
    async afterScenario(skenarioId) {
    }
}

export default new loyaltyConfig()