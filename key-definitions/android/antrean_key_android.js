export default class AntrianMenuKeyPOS {

    QUEUE_REFRESH_ANTRIAN_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/btn_refresh_antrian"]`
    QUEUE_CARD_ORDER_LIST_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/queue_card"]`
    QUEUE_SEARCH_ORDER_TEXTBOX = `//*[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]`
    QUEUE_TOGGLE_ALL_ORDER_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/layout_see_all_order"]`
    QUEUE_HAMBURGER_BUTTON = `//*[@content-desc="hamburger_menu_button"]`

    QUEUE_ORDER_LIST = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/queue_card"]`
    QUEUE_ORDER_LIST_1 = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/queue_card"])[1]`
    QUEUE_ORDER_LIST_2 = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/queue_card"])[2]`
    QUEUE_ORDER_LIST_3 = `(//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/queue_card"])[3]`

    //SEARCH SECTIONON PICKUP
    SEARCH_ORDER_INPUT_TEXTBOX = `//*[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]`
    SEARCH_DINE_IN_BUTTON = `//android.view.View[@resource-id="com.fore.donut.pos.dev:id/layout_selected"]`


    // DETAILS ORDER
    QUEUE_DETAILS_NUMBER = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_queue_number"]`
    QUEUE_DETAILS_CUSTOMER_NAME = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_cust_name"]`
    QUEUE_DETAILS_CHANNEL_TYPE = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_channel_name"]`
    QUEUE_DETAILS_ETA_VALUE = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/tv_eta_value"]`
    QUEUE_DETAILS_INFORMATION_ORDER = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/btn_detail_info"]`
    QUEUE_DETAILS_PRODUCT_DETAILS_ALL = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/rv_product_order"]`
    QUEUE_DETAILS_READY_PICKUP_LABEL = `//android.widget.FrameLayout[@content-desc="qrcode_and_call"]`
    QUEUE_DETAILS_MORE_INFO_BUTTON = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/btn_more"]`
    QUEUE_DETAILS_READY_TO_PICKUP_BUTTON = `//android.widget.TextView[@resource-id="com.fore.donut.pos.dev:id/button_body"]`

    // MORE INFO DETAILS ORDER
    QUEUE_MORE_INFO_REPRINT_RECEIPT = `//android.widget.TextView[@text="Request reprint receipt"]`
    QUEUE_MORE_INFO_CANCEL_REQUEST = `//android.widget.TextView[@text="Request cancel order"]`

    // INFORMASI PESANAN SHEETS
    QUEUE_SHEETS_INFO_ORDER_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_title"]`
    QUEUE_SHEETS_INFO_METHOD_PAYMENT_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_title_payment_method"]`
    QUEUE_SHEETS_INFO_METHOD_PAYMENT_DETAILS = `//*[@resource-id="com.fore.donut.pos.dev:id/card_payment_method"]`
    QUEUE_SHEETS_INFO_CLOSE_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_body"]`

    // FINISH ORDER SHEETS
    QUEUE_FINISH_ORDER_WARNING_ICON = `//*[@resource-id="com.fore.donut.pos.dev:id/design_right_sheet"]/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView`
    QUEUE_FINISH_ORDER_WARNING_TITLE = `//*[@resource-id="com.fore.donut.pos.dev:id/warning_title"]`
    QUEUE_FINISH_ORDER_WARNING_DESC = `//*[@resource-id="com.fore.donut.pos.dev:id/warning_body"]`
    QUEUE_FINISH_ORDER_DONE_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button" and @text="Iya, Sudah Sesuai"]`
    QUEUE_FINISH_ORDER_RECHECK_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button" and @text="Periksa Kembali"]`

    // CONFIRM FINISH ORDER
    QUEUE_FINISH_CONFIRM_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/flag_ready_for_pickup"]`
    QUEUE_FINISH_CALL_AGAIN_BUTTON = `//android.widget.TextView[@content-desc="text_qrcode_and_call"]`
    QUEUE_FINISH_MANUAL_COMPLETE_BUTTON = `//android.widget.TextView[@content-desc="text_Manual Complete"]`

    QUEUE_ORDER_TAB = `//*[@resource-id="com.fore.donut.pos.dev:id/constraintLayout5"]`

    // POP UP PESANAN DITERIMA CUSTOMER
    INFLIGHT_FINISH_ORDER_CHECK_ICON = `//*[@resource-id="com.fore.donut.pos.dev:id/progressbar"]`
    INFLIGHT_FINISH_QUEUE_NUMBER_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/queue_number"]`
    INFLIGHT_FINISH_ITEMS_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/text_items"]`
    INFLIGHT_FINISH_DIVIDER_LINE = `//*[@resource-id="com.fore.donut.pos.dev:id/view_line"]`
    INFLIGHT_FINISH_PROCESS_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/processing_text"]`


    //REQUEST REPRINT RECEIPT SHEETS
    SHEET_REPRINT_RECEIPT_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_title"]`
    SHEET_REPRINT_NOTES_REASON_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_reprint_reason"]`
    SHEET_REPRINT_NOTES_REASON_TEXTBOX = `(//android.widget.EditText[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"])[1]`
    SHEET_NOTES_USERNAME_TEXTBOX = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/inputbar_layout"])[2]`
    SHEET_NOTES_USERNAME_PHONE = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/inputbar_layout"])[3]`
    SHEET_RECEIPT_PRINTED_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_reprint_info"]`
    SHEET_REPRINT_RECEIPT_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button"]`


    //REQUEST CANCEL ORDER SHEETS
    SHEET_CANCEL_ORDER_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_title"]`
    SHEET_CANCEL_NOTES_REASON_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_reject_reason"]`
    SHEET_CANCEL_NOTES_REASON_TEXTBOX = `//*[@resource-id="com.fore.donut.pos.dev:id/inputbar_text"]`
    SHEET_CANCEL_PHOTO_LABEL = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_photo"]`
    SHEET_CANCEL_ADD_IMG_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/img_add"]`
    SHEET_CANCEL_ORDER_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button"]`
    /// REQUEST CANCEL ORDER CONFIRM SHEETS
    SHEET_CANCEL_WARNING_ICON = `//*[@resource-id="com.fore.donut.pos.dev:id/img"]`
    SHEET_CANCEL_WARNING_TITLE = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_title"]`
    SHEET_CANCEL_WARNING_DESC = `//*[@resource-id="com.fore.donut.pos.dev:id/tv_text"]`
    SHEET_CANCEL_CONFIRM_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button" and @text="Iya, Batalkan"]`
    SHEET_CANCEL_RECHECK_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/button_text_button" and @text="Periksa Kembali"]`

    //ADD IMAGE ON CANCEL ORDER
    GALLERY_ADD_IMG_BUTTON = `//*[@resource-id="com.fore.donut.pos.dev:id/lytGalleryPick"]`
    GALLERY_CHOOSE_IMG = `//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"]`




}
