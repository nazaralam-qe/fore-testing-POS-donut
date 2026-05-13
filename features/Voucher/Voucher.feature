Feature: Voucher

#  Scenario: Apply eligible and uneligible voucher
#    Given the user opens the Fore POS
#    And the user is directed to the homescreen
#    When  user click order menu page
#    And user click Dine In for Order
#    And user click Donut menu for Order
#    And system will show order on cart
#    Then user click voucher button
#    And user verify uneligible voucher for payment
#    And user verify eligible voucher for payment
#    And user verify applied Voucher for order
#    And user click "Bayar" button

  Scenario: Apply by search voucher and remove eligible voucher
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    Then user click voucher button
    And user verify applied Voucher by search
    And user verify applied Voucher for order
    And user verify delete voucher order
    And user Verify voucher button
