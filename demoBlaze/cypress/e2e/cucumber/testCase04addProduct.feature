Feature: test Case 04 - Add Product


    Scenario: Add product successful

        Given A valid user logged at webpage
        And Visit the laptops page
        And Add a product on the cart
        When The user add a laptop on the cart
        Then The order is successful