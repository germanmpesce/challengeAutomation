import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import mainPage from "../../../pageObjectModel/mainPage";
import formLogInPage from "../../../pageObjectModel/formLogInPage";

const newUsers = require("../../../fixtures/newUsers.json");

Given("A valid user who want to login at webpage", () => {
  cy.visit("/index.html");
});

And("Press button Log in", () => {
  mainPage.clickLogIn();
  cy.wait(2000);
});

And("Complete the inputs username and password", () => {
  formLogInPage.elements.username_button().type(newUsers.userName);
  cy.wait(2000);
  formLogInPage.elements.password_button().type(newUsers.password);
  cy.wait(2000);
});

When("Press button Log in", () => {
  formLogInPage.clickLogIn();
  cy.wait(2000);
});

Then("The logIn is successful", () => {
  cy.get("#nameofuser").should("be.visible");
});
