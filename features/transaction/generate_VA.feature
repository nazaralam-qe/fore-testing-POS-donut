Feature: transfer via Virtual Account

  Scenario: transfer via VA from setoran page
    Given the user opens the Fore POS
    And the user is directed to the homescreen
    When the user click setoran page
    Then the user verify VA page
