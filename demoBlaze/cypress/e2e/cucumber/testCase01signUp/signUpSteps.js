import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import mainPage from "../../../pageObjectModel/mainPage";
import formSignUpPage from "../../../pageObjectModel/formSignUpPage";

const newUsers = require("../../../fixtures/newUsers.json");

Given("Someone access to webpage demoblaze.com", () => {
  cy.visit("/index.html");
});

And("Press button Sign up", () => {
  mainPage.elements.signUp_button();
  cy.wait(2000);
});

And("Complete the inputs username and password", () => {
  formSignUpPage.elements.username_button().type(newUsers.userName);
  cy.wait(2000);
  formSignUpPage.elements.password_button().type(newUsers.password);
  cy.wait(2000);
});

When("Press button Sign up", () => {
  formSignUpPage.clickSignUp();
});

Then("The alert message is Sign up successful", () => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal("Sign up successful.");
  });
});
