Feature: test Case 02 - log In


    Scenario: logIn successful

        Given A valid user who want to login at webpage
        And Press button Log in
        And Complete the inputs username and password
        When Press button Log in
        Then The logIn is successful