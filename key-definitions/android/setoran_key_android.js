export default class VoucherMenuKeyPOS {
    // TRF VA ELIGIBLE
    SETORAN_TRF_TAB_BUTTON = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/btn_upload_transfer"]/android.widget.ImageView`
    SETORAN_HISTORY_TAB_BUTTON = `//androidx.cardview.widget.CardView[@resource-id="com.fore.donut.pos.dev:id/btn_history_transfer"]/android.widget.ImageView`
    SETORAN_VA_LAYOUT = `//android.view.ViewGroup[@resource-id="com.fore.donut.pos.dev:id/transfer_upload_button_layout"]`

    // TRF VA NOT ELIGIBLE


    //VA HISTORY DETAILS
    HISTORY_PERIODE_TEXT = `//android.widget.TextView[@text="Periode"]`
    HISTORY_TOTAL_SETORAN_TEXT = `//android.widget.TextView[@text="Jumlah Setoran"]`
    HISTORY_STATUS_TEXT = `//android.widget.TextView[@text="Status"]`

    HISTORY_VA_LIST_1 = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/transfer_history_item_layout"])[2]`
    HISTORY_VA_LIST_2 = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/transfer_history_item_layout"])[3]`
    HISTORY_VA_LIST_3 = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/transfer_history_item_layout"])[4]`
    HISTORY_VA_LIST_4 = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/transfer_history_item_layout"])[5]`
    HISTORY_VA_LIST_5 = `(//android.widget.LinearLayout[@resource-id="com.fore.donut.pos.dev:id/transfer_history_item_layout"])[6]`




}
