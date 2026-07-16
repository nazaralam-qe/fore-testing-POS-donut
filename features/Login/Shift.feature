Feature: Shift

  Scenario: User start shift needs to production donut first
    Given the user opens the Fore POS
    And user click order button
    And user click start shift button
    Then the user access production donut on Fore donut
    When user click production donut stock
    And user create stock donut for offline stock
    And user re-confirm create stock donut
    And user confirm donut stock after production for offline stock
    Then user confirm stock donut by input staff id & pin
    And user Back to main menu


  Scenario: User start shift ID
    Given the user opens the Fore POS
    And user click order button
    And user click start shift button
    When user input 250 to cash drawer
    And user input staff identification
    And user shift should start successfully
    And user verify shift end displayed


  Scenario: User end shift ID *setting printer enable value adjuster
    Given the user opens the Fore POS
    And user click start order button
    And user click shift end
    When user input 250 to cash drawer
    And user input staff identification
    And user shift should end successfully
    And user verify shift start displayed