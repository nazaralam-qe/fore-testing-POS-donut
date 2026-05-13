Feature: Catalog

  Scenario: User Open catalog all channel
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    Then user scroll left and right

  Scenario: User Open category product and see product details
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    Then user click Dine In for Order
    And user click Donut menu for Order

  Scenario: User add to cart main product + additional
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    Then user click Donut menu for Order
    And system will show order on cart

  Scenario: User Search product on catalog and add to cart
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When  user click order menu page
    And user click Dine In for Order
    Then user input donut by search feature
    And system will show order on cart


