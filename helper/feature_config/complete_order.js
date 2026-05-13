import DatabaseHelper from "../databaseHelper.js";

class completeOrder {
    async beforeScenario(skenarioId) {
        switch (skenarioId) {
            case "TC_DELIVERY_CC_01_001":
                // await Helper.GpsCheckOnAndroid();
                // await Helper.setMockLocation(-6.2374939, 106.6751555);
                break;
            default :
                console.log(`Skenario${skenarioId} tidak ditemukan`)
        }
    }
    async afterScenario(skenarioId) {
        switch (skenarioId) {
            case "TC_DELIVERY_CC_01_005":
            case "TC_CC_DOKU_03_004":
            case "TC_CC_DOKU_04_002":
                await DatabaseHelper.completeOrder()
            break;
                default :
                    console.log(`Skenario${skenarioId} tidak ditemukan`)
        }
    }
}

export default new completeOrder();




