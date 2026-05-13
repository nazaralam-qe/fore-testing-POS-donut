export default class SettingMenuKeyPOS {
    // SETTINGS
    SETTING_DEBUG_BUTTON = `//*[@content-desc="section_debug_button"]`
    SETTING_CHANGE_MODE_BUTTON = `//*[@content-desc="section_change_mode_button"]`

    // SETTING DEBUG SECTION
    SETTING_DEBUG_CONFIGURE_BUTTON = `//android.widget.Button[@resource-id="com.fore.donut.pos.dev:id/btn" and @text="CONFIGURE"]`

    // CONFIGURE
    SETTING_DEBUG_CONFIGURE_SYS_VALUE_ADJUSTER = `//android.widget.Button[@resource-id="com.fore.donut.pos.dev:id/btn" and @text="SYSTEM VALUE ADJUSTER"]`

    // BYPASS CHECK PRINTER
    SETTING_DEBUG_CONFIGURE_BYPASS_CHECK_PRINTER_FALSE = `//android.widget.TextView[@text="false"]`
    SETTING_DEBUG_CONFIGURE_BYPASS_CHECK_PRINTER_TRUE = `//android.widget.TextView[@text="true"]`

    // BYPASS CHECK PRINTER TOGGLE
    SETTING_DEBUG_CONFIGURE_BYPASS_TOGGLE = `//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]`

    // CHANGE MODE
    SETTING_MODE_KASIR_UTAMA = `//android.widget.RadioButton[@resource-id="com.fore.donut.pos.dev:id/rb_cashier_main"]`
    SETTING_MODE_KASIR_TAMBAHAN = `//android.widget.RadioButton[@resource-id="com.fore.donut.pos.dev:id/rb_cashier_addi"]`
    SETTING_MODE_PICKUP = `//android.widget.RadioButton[@resource-id="com.fore.donut.pos.dev:id/rb_pickup"]`
    SETTING_MODE_CHANGE_BUTTON = `//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/button_body"]`

    // CHANGE PASSWORD
    SETTING_CHANGE_PASS_STORE = `//*[@content-desc="section_change_password_store_button"]`
    CHANGE_PASS_STORE_OLD = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="Password Store lama"]`
    CHANGE_PASS_STORE_OLD_LOGO = `//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_start_icon"]`
    CHANGE_PASS_STORE_OLD_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[1]`

    CHANGE_PASS_STORE_NEW = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="Masukkan Password Store Baru"]`
    CHANGE_PASS_STORE_NEW_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[2]`

    CHANGE_PASS_STORE_CONFIRM = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="Konfirmasi Password Store Baru"]`
    CHANGE_PASS_STORE_CONFIRM_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[3]`

    CHANGE_PASS_STORE_SUBMIT_BTN = `//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/modal_change_password_confirm_button"]`

    // CHANGE PIN
    SETTING_CHANGE_BARISTA_PIN = `//*[@content-desc="section_change_barista_pin_button"]`
    CHANGE_BARISTA_PIN_OLD = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="PIN Barista lama"]`
    CHANGE_BARISTA_PIN_OLD_LOGO = `//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_start_icon"]`
    CHANGE_BARISTA_PIN_OLD_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[1]`

    CHANGE_BARISTA_PIN_NEW = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="Masukkan PIN Barista Baru"]`
    CHANGE_BARISTA_PIN_NEW_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[2]`

    CHANGE_BARISTA_PIN_CONFIRM = `//android.widget.EditText[@resource-id="com.fore.coffee.pos.dev:id/inputbar_text" and @text="Konfirmasi PIN Barista Baru"]`
    CHANGE_BARISTA_PIN_CONFIRM_VISIBLE = `(//android.widget.ImageButton[@resource-id="com.fore.coffee.pos.dev:id/text_input_end_icon"])[3]`

    CHANGE_BARISTA_PIN_SUBMIT_BTN = `//android.widget.FrameLayout[@resource-id="com.fore.coffee.pos.dev:id/modal_change_password_confirm_button"]`

}
