Feature: WA Notifications

  Scenario: order placed with WA notif for receipt
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    Then user click "Bayar" button
    And user input phone number customer
    And user payment with Cash