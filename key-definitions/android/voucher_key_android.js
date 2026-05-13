export default class VoucherMenuKeyPOS {
    // VOUCHER UNELIGIBLE
    VOUCHER_SECTION_UNELIGIBLE = `(//*[@resource-id="com.fore.donut.pos.dev:id/container_title"])[1]`
    VOUCHER_UNELIGIBLE_TEXT = `(//*[@resource-id="com.fore.donut.pos.dev:id/tv_voucher_error"])[1]`
    VOUCHER_UNELIGIBLE_BUTTON = `(//*[@content-desc="text_item_voucher_in_cart"])[1]`


    // VOUCHER ELIGIBLE
    VOUCHER_SECTION_ELIGIBLE = `(//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/container_title"])[2]`
    VOUCHER_ELIGIBLE_DESC = `(//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/voucher_desc"])[2]`
    VOUCHER_ELIGIBLE_BUTTON = `(//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/button_body"])[2]`

    VOUCHER_ELIGIBLE_USE_NOW_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_body"]`

    // SEARCH FEATURE FOR VOUCHER
    VOUCHER_INPUT_TEXTBOX = `//*[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]`
    VOUCHER_SEARCH_BUTTON = `//android.widget.FrameLayout[@resource-id="com.fore.donut.pos.dev:id/search_voucher_button"]`
    VOUCHER_APPLY_BY_SEARCH_BTN = `//*[@content-desc="text_item_voucher_in_cart"]`




    // VOUCHER APPLIED ON CART
    VOUCHER_ELIGIBLE_APPLIED = `//*[@resource-id="com.fore.donut.pos.dev:id/label_see_promo"]`
    VOUCHER_ELIGIBLE_DELETE_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/text_chosen_voucher"]`
    VOUCHER_ELIGIBLE_ANOTHER_VOUCHER = `//*[@resource-id="com.fore.donut.pos.dev:id/btn_delete_voucher"]`






}
