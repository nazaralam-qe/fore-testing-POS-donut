export default class LoginKeyPOS {

    // Permission tab
    POS_PERMISSION_ALLOWED = `//*[@resource-id='com.android.permissioncontroller:id/permission_allow_button']`

    // login page
    POS_LOGO_LOGIN_ICON = `//*[@content-desc="fore_logo_icon"]`
    POS_CHANGE_LANGUAGE_BUTTON = `//*[@content-desc="pos_lang_change_dropdown"]`
    POS_INPUT_USERNAME_STORE_TEXTBOX = `//*[@content-desc="login_input_username_store_txtbox"]`
    POS_INPUT_PASSWORD_STORE_TEXTBOX = `//*[@content-desc="login_input_password_store_txtbox"]`
    POS_EYE_CLOSE_PASSWORD_STORE_ICON = `//*[@content-desc="login_pass_eye_icon"]`
    POS_EYE_OPEN_PASSWORD_STORE_ICON = `//*[@content-desc="login_pass_eye_icon"]`
    POS_SIGN_IN_STORE_BUTTON = `//*[@content-desc="text_pos_login_masuk_button"]`
    POS_VERSION_LABEL = `//*[@content-desc="pos_version_subtitle"]`

    // language
    POS_CHANGE_LANGGUAGE_TITLE = `//*[@resource-id='com.fore.coffee.pos.dev:id/choose_language_text']`
    POS_CHANGE_LANGGUAGE_ID = `//*[@xpath='//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.coffee.pos.dev:id/language_recyclervierw"]/android.view.ViewGroup[1]']`
    POS_CHANGE_LANGGUAGE_EN = `//*[@xpath='//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fore.coffee.pos.dev:id/language_recyclervierw"]/android.view.ViewGroup[2]']`
    POS_CHANGE_LANG_BTN = `//*[@resource-id='com.fore.coffee.pos.dev:id/button_body']`

    // POS sidesheet after login
    POS_SIDESHEET_MAIN_CASHIER_MODE = `//*[@resource-id="com.fore.donut.pos.dev:id/rb_cashier_main"]`
    POS_SIDESHEET_ADDITIONAL_CASHIER_MODE = `//*[@resource-id="com.fore.donut.pos.dev:id/rb_cashier_addi"]`
    POS_SIDESHEET_PICKUP_MODE = `//*[@resource-id="com.fore.donut.pos.dev:id/rb_pickup"]`
    POS_SIDESHEET_KITCHEN_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/rb_kitchen"]`
    POS_SIDESHEET_CHANGE_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/layout_body"]`

    // STAFF ID sidesheet
    POS_STAFFID_PINPAD_1 = "//*[@content-desc='text_key_1']"
    POS_STAFFID_PINPAD_2 = "//*[@content-desc='text_key_2']"
    POS_STAFFID_PINPAD_3 = "//*[@content-desc='text_key_3']"
    POS_STAFFID_PINPAD_4 = "//*[@content-desc='text_key_4']"
    POS_STAFFID_PINPAD_5 = "//*[@content-desc='text_key_5']"
    POS_STAFFID_PINPAD_6 = "//*[@content-desc='text_key_6']"
    POS_STAFFID_PINPAD_7 = "//*[@content-desc='text_key_7']"
    POS_STAFFID_PINPAD_8 = "//*[@content-desc='text_key_8']"
    POS_STAFFID_PINPAD_9 = "//*[@content-desc='text_key_9']"
    POS_STAFFID_PINPAD_0 = "//*[@content-desc='text_key_0']"
    POS_STAFFID_PINPAD_QOMA = "//*[@content-desc='text_key_coma']"
    POS_STAFFID_PINPAD_DELETE = "//*[@content-desc='text_key_delete']"
    POS_STAFFID_PINPAD_ENTER = `//androidx.cardview.widget.CardView[@content-desc="key_confirm"]/android.widget.LinearLayout`
    POS_STAFFID_MASUK_BUTTON = `//*[@resource-id='com.fore.donut.pos.dev:id/login_button']`


}
