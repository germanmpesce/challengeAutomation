import mainPage from "../../pageObjectModel/mainPage";
import formSignUpPage from "../../pageObjectModel/formSignUpPage";

const newUsers = require("../../fixtures/newUsers.json");

describe("Test Case 01 - Sign Up", function () {
  beforeEach(function () {
    cy.visit("/index.html");
    mainPage.elements.signUp_button();
    cy.wait(2000);
    formSignUpPage.elements.username_button().type(newUsers.userName);
    cy.wait(2000);
    formSignUpPage.elements.password_button().type(newUsers.password);
    cy.wait(2000);
    formSignUpPage.clickSignUp();
  });

  it("signUp successful", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign up successful.");
    });
  });
});
