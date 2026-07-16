Feature: Login

  Scenario: Pengguna dapat Login Aplikasi Fore POS Donut
    Given the user start the Fore POS
    And user allow gps
    When user input username
    And user input password
    And user click masuk
    When user choose role
    And user input barista id
    And user input barista password
    Then user success login

  Scenario: Pengguna dapat logout Aplikasi Fore POS Donut
    Given the user opens the Fore POS
    When the user is directed to the homescreen
    And user go to setting
    Then user log out


  Scenario: Pengguna dapat Login Aplikasi Fore POS dev2
    Given the user start the Fore POS
    And user allow gps
    When user input username
    And user input password
    And user click masuk
    When user choose role
    And user input barista id
    And user input barista password
    When the user is directed to the homescreen
    And user go to setting
    And user setting change base url to devapi2
    When the user is directed to the homescreen dev2
    And user go to setting
    Then user log out
    When user input username dev2
    And user input password dev2
    And user click masuk
    When user choose role
    And user input barista id
    And user input barista password
    Then user success login