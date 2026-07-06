export default class ProductionDonutMenuKeyPOS {
    // check stock donut
    CATAT_STOCK_BUTTON = `//android.widget.Button[@resource-id="com.fore.donut.pos.dev:id/btn_review"]`
    CATAT_STOCK_TEXT = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_title"]`
    CATAT_STOCK_INFO = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/container_warning"]`

    // LIST STOCK DONUT CONFIRM AFTER CREATE STOCK
    CONFIRM_STOCK_SUBMIT_BUTTON = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/btn_confirm"]`
    CONFIRM_STOCK_EDIT_BUTTON = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/btn_edit"]`


    // stock donut production ISI
    STOCK_DONUT_PRODUCTION_LIST = ``

    // stock donut production EMPTY
    BUAT_STOCK_DONUT_BUTTON = `//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"]`
    BUAT_STOCK_ICON_EMPTY_STATE = `//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/layout_empty"]/android.widget.ImageView`
    BUAT_STOCK_TEXT_EMPTY_STATE = `//android.widget.TextView[@text="Belum ada stock diinput"]`
    BUAT_STOCK_HAMBURGER_ICON = `//android.widget.ImageButton[@content-desc="hamburger_menu_button"]`



    // STOCK DONUT
    PLAIN_DONUT_BUTTON = `(//android.widget.TextView[@text="Plain Donut"])[1]`
    OFFLINE_DONUT_BUTTON = `//android.widget.TextView[@text="Online"]`
    ONLINE_DONUT_BUTTON = `//android.widget.TextView[@text="Offline"]`
    DONUT_SEARCH_PRODUCT = `//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]`

    Plain_DONUT_input = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`


    // STOCK DONUT sweet sensation
    ONLINE_DONUT_CHOCO_HAZELNUT_IMG = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/product_image"])[1]`
    ONLINE_DONUT_CHOCO_HAZELNUT_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[1]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_MATCHA_ON_CLOUDS_IMG = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/product_image"])[2]`
    ONLINE_DONUT_MATCHA_ON_CLOUDS_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[2]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_BERRY_CHEESE_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[3]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`

    // STOCK DONUT SHELL DONUT
    ONLINE_DONUT_SLOOPY_JOE_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[5]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_KALEYO_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[5]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`

    // STOCK DONUT SHELL DONUT
    ONLINE_DONUT_AYAM_POP_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[1]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_PBJ_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[6]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_CREME_BRULEE_IMG = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/product_image"])[4]`
    ONLINE_DONUT_CREME_BRULEE_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[8]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`
    ONLINE_DONUT_COFFEE_BRULEE_IMG = `(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/product_image"])[4]`
    ONLINE_DONUT_COFFEE_BRULEE_input = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/root"])[8]/android.view.ViewGroup/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView`


    SUBMIT_PRODUCTION_DONUT_BUTTON = `//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"]`

    // VALIDATE QTY DONUT PRODUCTION
    POPUP_PAGE_SUBMIT_DONUT_TEXT = `//android.widget.TextView[@text="Pastikan quantity produksi donut sudah sesuai"]`
    POPUP_PAGE_PERIKSA_KEMBALI_BUTTON = `//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]`
    POPUP_PAGE_SUBMIT_BUTTON = `//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[5]`


    // RE-CONFIRM STOCK DONUT ACTUAL OFFLINE
    ACTUAL_DONUT_STOCK_OFFLINE_INPUT1 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[1]`
    ACTUAL_DONUT_STOCK_OFFLINE_INPUT2 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[3]`
    ACTUAL_DONUT_STOCK_OFFLINE_INPUT3 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[5]`

    // RE-CONFIRM STOCK DONUT ACTUAL ONLINE
    ACTUAL_DONUT_STOCK_ONLINE_INPUT1 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[2]`
    ACTUAL_DONUT_STOCK_ONLINE_INPUT2 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[4]`
    ACTUAL_DONUT_STOCK_ONLINE_INPUT3 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[6]`
    ACTUAL_DONUT_STOCK_ONLINE_INPUT4 = `(//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/input_text"])[8]`

    //RE-CONFIRM
    ACTUAL_DONUT_CONFIRM_STOCK_BUTTON = `//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"]`
    ACTUAL_DONUT_SUBMIT_STOCK_BUTTON = `//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]`



}
