Feature: bundle

  Scenario: Create basic bundle order
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Take Away for Order
    And user click bundle menu for Order
    And user choose bundle menu by search feature
    And system will show order on cart
    And user click "Bayar" button
    And user input phone number customer
    And user payment with Cash

  Scenario: Create selectable bundle order
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Take Away for Order
    And user click bundle menu for Order
    And user choose selectable bundle menu by search feature
    And user edit Deli selectable bundle menu
    And user edit beverage selectable bundle menu
    And user click Order button
    And system will show order on cart
    And user click "Bayar" button
    And user input phone number customer
    And user payment with Cash


  Scenario: Create selectable bundle fixed price
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Take Away for Order
    And user click bundle menu for Order
    And user choose fix bundle menu by search feature
    And user click Order button
    And system will show order on cart
    And user click "Bayar" button
    And user input phone number customer
    And user payment with Cash