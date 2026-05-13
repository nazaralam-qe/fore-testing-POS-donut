Feature: Shift

  Scenario: User start shift ID
    Given the user start the Fore POS
    And user click start order button
    And user click start shift button
    When user input 250 to cash drawer
    Then user input quantities cups total
    And user input staff identification
    And user shift should start successfully
    And user verify shift end displayed
