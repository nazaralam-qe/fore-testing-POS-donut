Feature: Sticker

  Scenario: Create sticker sauce
    Given the user opens the Fore POS
    And user go to setting section with scroll left 2 times
    And user change mode to pickup
    When user click hamburger button
    And user click Sticker button
    When user verify sticker page
    And user create sticker
    Then user create chizu sticker dari bahan setengah jadi
    And user input barista id
    And user input barista password

  Scenario: Create sticker raw material
    Given the user opens the Fore POS
    And user go to setting section with scroll left 2 times
    And user change mode to pickup
    When user click hamburger button
    And user click Sticker button
    When user verify sticker page
    And user create sticker
    And user create whip cream dari bahan baku
    And user input barista id
    And user input barista password



