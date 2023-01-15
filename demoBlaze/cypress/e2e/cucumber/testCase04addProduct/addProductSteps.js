import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import mainPage from "../../pageObjectModel/mainPage";
import formLogInPage from "../../pageObjectModel/formLogInPage";
import laptopsPage from "../../pageObjectModel/laptopsPage";
import buyPage from "../../pageObjectModel/buyPage";

const newUsers = require("../../../fixtures/newUsers.json");

Given("A valid user logged at webpage", () => {
  cy.visit("/index.html");
  mainPage.clickLogIn();
  cy.wait(2000);
  formLogInPage.elements.username_button().type(newUsers.userName);
  cy.wait(2000);
  formLogInPage.elements.password_button().type(newUsers.password);
  cy.wait(2000);
  formLogInPage.clickLogIn()
});

And("Visit the laptops page", () => {
  mainPage.elements.laptops_button().click();
});

And("Add a product on the cart", () => {
    laptopsPage.elements.item_laptop().click();
});

When("The user add a laptop on the cart", () => {
  buyPage.elements.addToCart_button().click();

  cy.visit("https://www.demoblaze.com/cart.html");
});

Then("The order is successful", () => {
  cy.contains("Sony vaio i5").should("be.visible");
  cy.contains("Place Order").should("be.enabled");
});
