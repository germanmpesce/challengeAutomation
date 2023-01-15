import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import mainPage from "../../../pageObjectModel/mainPage";
import formLogInPage from "../../../pageObjectModel/formLogInPage";

const newUsers = require("../../../fixtures/newUsers.json");

Given("A valid user who want to logout from webpage", () => {
  cy.visit("/index.html");
  formLogInPage.elements.username_button().type(newUsers.userName);
  cy.wait(2000);
  formLogInPage.elements.password_button().type(newUsers.password);
  cy.wait(2000);
  formLogInPage.clickLogIn();
  cy.wait(2000);
});

When("Press button Log out", () => {
  mainPage.clickLogOut();
  cy.wait(2000);
});

Then("The logOut is successful", () => {
  cy.on("window:alert", (str) => {
    cy.get("#nameofuser").should("not.be.visible");
  });
});
