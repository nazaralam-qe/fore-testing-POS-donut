export default class TransactionKeyPOS {

    // ADDITIONAL ITEM
    TRX_TITLE_ADDITONAL = `//*[@resource-id="com.fore.coffee.pos.dev:id/pay_channel"]`
    TRX_ITEM_PAPERBAG_S = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paperbag_layout"])[1]`
    TRX_ITEM_PAPERBAG_S_ADD = `(//android.widget.ImageView[@resource-id="com.fore.coffee.pos.dev:id/btn_init_add_paperbag"])[1]`
    TRX_ITEM_PAPERBAG_M = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paperbag_layout"])[2]`
    TRX_ITEM_PAPERBAG_M_ADD = `(//android.widget.ImageView[@resource-id="com.fore.coffee.pos.dev:id/btn_init_add_paperbag"])[2]`
    // TRX_ITEM_SPUNBOND_S = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paperbag_layout"])[3]`
    // TRX_ITEM_SPUNBOND_S_ADD = `(//android.widget.ImageView[@resource-id="com.fore.coffee.pos.dev:id/btn_init_add_paperbag"])[3]`
    TRX_ITEM_SPUNBOND_M = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paperbag_layout"])[3]`
    TRX_ITEM_SPUNBOND_M_ADD = `(//android.widget.ImageView[@resource-id="com.fore.coffee.pos.dev:id/btn_init_add_paperbag"])[3]`

    ITEM_PB_S_ADD = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paper_bag_item"])[1]`
    ITEM_PB_M_ADD = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paper_bag_item"])[2]`
    // ITEM_SB_S_ADD = `(//android.widget.ImageView[@resource-id="com.fore.coffee.pos.dev:id/btn_init_add_paperbag"])[3]`
    ITEM_SB_M_ADD = `(//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/paper_bag_item"])[3]`


    //PAYMENT METHOD
    TRX_QRIS_LOGO = `//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/e_wallet_icon"]`
    TRX_CARD_LOGO = `//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/card_icon_pay_method"]`
    TRX_CASH_LOGO = `//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/cashier_icon"]`

    /// QRIS
    TRX_QRIS_BUTTON = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/payment_image"])[1]`
    TRX_QRIS_BCA_BUTTON = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/payment_image"])[2]`
    TRX_QRIS_OTHER_BUTTON = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/payment_image"])[3]`

    /// CARD
    TRX_CARD_BCA_BUTTON = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/payment_image"])[2]`
    TRX_CARD_MANDIRI_BUTTON = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/payment_image"])[1]`


    /// CASH
    TRX_CASH_1ST_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[1]`
    TRX_CASH_2ND_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[2]`
    TRX_CASH_3RD_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[3]`
    // TRX_CASH_4TH_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[4]`
    // TRX_CASH_5TH_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[5]`
    // TRX_CASH_6TH_BUTTON = `(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/cash_item_layout"])[6]`

    TRX_CASH_INPUT_TEXTBOX = `//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text" and @text="Atau masukan jumlah uang"]`


    // PRICE AND CUSTOMER DETAILS
    TRX_CUSTOMER_NAME_INPUT = `//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text" and @text="test QA"]`
    TRX_CUSTOMER_NAME_LOGO = `(//android.widget.ImageButton[@resource-id="com.fore.donut.pos.dev:id/text_input_start_icon"])[2]`
    TRX_CUSTOMER_PRICE = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/detail_price_container"])[1]`
    TRX_CUSTOMER_PRICE_TOTAL_PAY = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_value"])[1]`
    TRX_PRICE_TOTAL_WITH_ADD_BAG = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_value"])[2]`

    TRX_CUSTOMER_WA_INPUT = `//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text" and @text="Masukkan Nomor Wa Customer"]`
    TRX_CUSTOMER_WA_LOGO = `(//android.widget.ImageButton[@resource-id="com.fore.donut.pos.dev:id/text_input_start_icon"])[1]`



    TRX_PAYMENT_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_body"]`


}
