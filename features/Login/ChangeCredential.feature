Feature: change PIN & Password

  Scenario: change password store POS
    Given the user opens the Fore POS
    When the user is directed to the homescreen
    And user go to setting
    Then user change password store

  Scenario: change PIN barista POS
    Given the user opens the Fore POS
    When the user is directed to the homescreen
    And user go to setting
    Then user change PIN barista

  Scenario: change password store POS to default
    Given the user opens the Fore POS
    When the user is directed to the homescreen
    And user go to setting
    Then user rollback to default of password store

  Scenario: change PIN barista POS to default
    Given the user opens the Fore POS
    When the user is directed to the homescreen
    And user go to setting
    Then user rollback to default of PIN barista