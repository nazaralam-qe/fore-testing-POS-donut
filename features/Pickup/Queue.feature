Feature: queue

#  Scenario: Order placed
#    Given the user opens the Fore POS
#    And the user is directed to the homescreen
#    When  user click order menu page
#    And user click Dine In for Order
#    And user click Donut menu for Order
#    And system will show order on cart
#    Then user click "Bayar" button
#    And user payment with Cash
#    When user go to setting section
#    Then user change mode to pickup
#    And user refresh order on pickup mode
#    And user verify antrian page

#  Scenario: Manual complete
#    Given the user opens the Fore POS
#    And the user is directed to the homescreen
#    When  user click order menu page
#    And user click Dine In for Order
#    And user click Donut menu for Order
#    And system will show order on cart
#    Then user click "Bayar" button
#    And user payment with Cash
#    When user go to setting section
#    And user change mode to pickup
#    And user refresh order on pickup mode
#    And user click toggle all menu
#    And user click order list for complete manual
#    Then user verify manual complete on pickup mode
#    And user verify inflight manual complete

  Scenario: Search order
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    Then user click "Bayar" button
    And user payment with Cash
    When user go to setting section
    Then user change mode to pickup
    And user refresh order on pickup mode
    And user search order
#
#  Scenario: Reprint receipt order
#    Given the user opens the Fore POS
#    And the user is directed to the homescreen
#    When  user click order menu page
#    And user click Dine In for Order
#    And user click Donut menu for Order
#    And system will show order on cart
#    Then user click "Bayar" button
#    And user payment with Cash
#    And user payment with Cash
#    When user go to setting section
#    And user change mode to pickup
#    And user refresh order on pickup mode
#    Then user request reprint receipt
#    And user input barista id
#    And user input barista password
#
#  Scenario: Request cancel order
#    Given the user opens the Fore POS
#    And the user is directed to the homescreen
#    When  user click order menu page
#    And user click Dine In for Order
#    And user click Donut menu for Order
#    And system will show order on cart
#    Then user click "Bayar" button
#    And user payment with Cash
#    And user payment with Cash
#    When user go to setting section
#    Then user change mode to pickup
#    And user refresh order on pickup mode
#    And user verify request cancel order
#    And user confirm request cancel order
#    And user input barista id
#    And user input barista password
#    And user verify Tab order

