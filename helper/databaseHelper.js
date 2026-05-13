import knex from "../config/knex.js";
class DatabaseHelper {

    async getUserId(){
        const user = await knex('user').where('user_phone', phoneNumber).first();
        if (!user) return;
        return user.user_id;
    }
    async completeOrder() {
        const order = await knex('user_order')
            .where('user_id', await this.getUserId())
            .orderBy('created_date', 'desc')
            .first();

        if (!order) return;

        await knex('user_order')
            .where('uor_id', order.uor_id)
            .update({ uor_status: 'completed' });
    }
    async injectPoint() {
        const user_id = await this.getUserId();

        if (!user_id) {
            console.log('Gagal mendapatkan user_id.');
            return;
        }

        const existing = await knex('user_loyalty').where('user_id', user_id).first();

        if (existing) {
            await knex('user_loyalty')
                .where('user_id', user_id)
                .update({
                    ulyl_balance: 9999999.00,
                    updated_date: knex.fn.now()
                });
            console.log(`Berhasil update point untuk user_id ${user_id}`);
        } else {
            await knex('user_loyalty').insert({
                user_id: user_id,
                country_id: 1,
                lyllvl_id: 1,
                ulyl_balance: 9999999.00,
                updated_date: knex.fn.now(),
                created_date: knex.fn.now(),
            });
            console.log(`Berhasil insert point untuk user_id ${user_id}`);
        }
    }
    async deleteVoucher() {
        const user_id = await this.getUserId();

        if (!user_id) {
            console.warn("User ID not found, skip delete voucher.");
            return;
        }

        await knex('voucher').where('user_id', user_id).del();
        console.log(`Delete voucher for user_id: ${user_id}`);
    }




}
export default new DatabaseHelper()