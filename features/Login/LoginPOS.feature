Feature: Login

  Scenario: Pengguna dapat Login Aplikasi Fore POS
    Given the user start the Fore POS
    And user allow gps
    When user input username
    And user input password
    And user click masuk
    When user choose role
    And user input barista id
    And user input barista password
    Then user success login
