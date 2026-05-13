Feature: Payment

  Scenario: Checkout page
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    Then user click "Bayar" button
    And user verify payment method QRIS
    And user verify payment method Card
    And user verify payment method Cash


  Scenario: Create order with packaging
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    Then user add spunbond
    Then user click "Bayar" button
    And user verify payment method Cash
    And user verify total price with additional bag


  Scenario: change payment method
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    And user click Donut menu for Order
    And system will show order on cart
    And user click "Bayar" button
    Then user change payment