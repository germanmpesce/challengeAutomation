Feature: test Case 01 - Sign Up


    Scenario: SignUp successful

        Given Someone access to webpage demoblaze.com
        And Press button Sign up
        And Complete the inputs username and password
        When Press button Sign up
        Then The alert message is Sign up successful