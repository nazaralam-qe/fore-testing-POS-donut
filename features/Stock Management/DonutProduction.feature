Feature: Donut production

  Scenario: User create donut production for offline store
    Given the user opens the Fore POS
    And user click start order button
#    add production donut
    Then the user access production donut on Fore donut
    When user click production donut stock
    And user create stock donut for offline stock
    And user re-confirm create stock donut
    And user confirm donut stock after production for offline stock
    Then user confirm stock donut by input staff id & pin
    And user Back to main menu


  Scenario: User create donut production for online store
    Given the user opens the Fore POS
    And user click start order button
#    add production donut
    Then the user access production donut on Fore donut
    When user click production donut stock
    And user create stock donut for online stock
    And user re-confirm create stock donut
    And user confirm donut stock after production for online stock
    Then user confirm stock donut by input staff id & pin
    And user Back to main menu