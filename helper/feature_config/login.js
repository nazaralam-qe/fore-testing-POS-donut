import Helper from "../helper.js";
import knex from "../../config/knex.js";
import { execSync } from "child_process";

class loginConfig {
    async beforeScenario(skenarioId) {
        // Daftar Scenario ID yang memerlukan login user existing
        const existingUserScenarios = ["TC_LGN_02", "TC_LGN_03"];

        if (existingUserScenarios.includes(skenarioId)) {
            // 1. Reset state aplikasi agar bersih (opsional tapi disarankan)
            execSync(`adb shell pm clear ${process.env.APP_PACKAGE_ANDROID}`);

            const username = process.env.TEST_USERNAME;

            if (!username) {
                console.warn("⚠️ TEST_USERNAME tidak ditemukan di .env!");
                return;
            }

            console.log(`🔍 Memvalidasi data testing untuk user: ${username}`);

            // 2. Cek apakah user benar-benar ada di database
            const user = await knex("users")
                .where("username", username)
                .first();

            if (!user) {
                throw new Error(`❌ ABORT: User ${username} tidak ditemukan di database. Test tidak bisa dilanjutkan.`);
            }

            console.log(`✅ User ${username} ditemukan. Memulai testing...`);
        }
    }

    async afterScenario(skenarioId) {
        // Kosongkan jika tidak ada aksi khusus setelah test
    }
}

export default new loginConfig();