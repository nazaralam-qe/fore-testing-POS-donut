export default class CatalogPOSkey {

    // POS 1st ID
    ORDERS_BULK_SECTION_BUTTON = '//*[@content-desc="section_bulk_order_button"]'
    ORDERS_OFFLINE_SECTION_BUTTON = '//*[@content-desc="section_donut_offline_button"]'
    ORDERS_DINE_IN_SECTION_BUTTON = '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]'
    ORDERS_TAKE_AWAY_SECTION_BUTTON = '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]'


    // INFO CUSTOMER
    ORDERS_INPUT_NO_WA = '//android.widget.ScrollView/android.widget.EditText[1]/android.view.View[4]'
    ORDERS_INPUT_NAME_CUSTOMER = '//android.widget.ScrollView/android.widget.EditText[2]/android.view.View[3]'
    ORDERS_INPUT_ORDER_CUSTOMER_BUTTON = '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.Button'


    // POS 2nd ID
    ORDERS_DONUT_BOX_12_BUTTON = '//*[@resource-id="com.fore.donut.pos.dev:id/add_to_cart_button"]'
    // DONUT BUNDLE 12
    BOX_12_BUNDLE_1_BUTTON = '//*[@resource-id="com.fore.donut.pos.dev:id/tv_text" and @text="Box 1"]'
    BOX_12_BUNDLE_2_BUTTON = '//*[@resource-id="com.fore.donut.pos.dev:id/tv_text" and @text="Box 2"]'
    BOX_12_TIPE_DONUT_1_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/img_add"])[1]'
    BOX_12_TIPE_DONUT_2_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/img_add"])[1]'
    BOX_12_TIPE_DONUT_3_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/img_add"])[1]'
    MASUKKAN_KERANJANG_BUTTON = '(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"])[1]'
    BOX_12_TIPE_DONUT_ADD_1_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/btn_plus"])[1]'
    BOX_12_TIPE_DONUT_ADD_2_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/btn_plus"])[2]'
    BOX_12_TIPE_DONUT_ADD_3_BUTTON = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/btn_plus"])[3]'



    /// Donut
    ORDERS_DONUT_AYAM_POP_BY_SEARCH = '//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/root"]'
    ORDERS_DONUT_AYAM_POP_BY_ORDER = '(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/product_photo_card"])[4]'

    ORDERS_DONUT_COFFEE_BRULEE_ORDER = '(//android.widget.ImageView[@resource-id="com.fore.donut.pos.dev:id/product_image"])[1]'



    // ADD TO CART
    ORDERS_BUTTON_ADD_TO_CART = '//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"]'


    // CART
    ORDERS_CART_SHOW = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.donut.pos.dev:id/rv_list_cart"]/android.view.ViewGroup[1]'
    ORDERS_PAYMENT_BUTTON = '//*[@resource-id="com.fore.donut.pos.dev:id/button_body"]'
    ORDERS_BAG_BUTTON = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.donut.pos.dev:id/rv_list_cart"]/android.view.ViewGroup[2]'
    ORDERS_ADD_BAG_BUTTON = '//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/container_eco_bag"]'
    ORDERS_VOUCHERS_BUTTON = '//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/container_voucher"]'
    ORDERS_VOUCHERS_EXIST_BUTTON = '//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/container_voucher"]'


    // LIST CART
    ORDERS_CART_SHOW_list1 = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.donut.pos.dev:id/rv_list_cart"]/android.view.ViewGroup[1]'
    ORDERS_CART_SHOW_list2 = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.donut.pos.dev:id/rv_list_cart"]/android.view.ViewGroup[2]'
    ORDERS_CART_SHOW_list3 = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.donut.pos.dev:id/rv_list_cart"]/android.view.ViewGroup[3]'


    // SEARCH FOR ORDER
    ORDERS_SEARCH_ACTION = '//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]'

    /// SEPERATED ///
    ORDERS_COFFEE_scrollUp = '(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/materialCardView"])[1]/android.view.ViewGroup'
    ORDERS_COFFEE_scrollDown = '(//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/container"])[7]/android.view.ViewGroup'
}
