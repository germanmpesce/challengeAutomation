import mainPage from "../../pageObjectModel/mainPage";
import formLogInPage from "../../pageObjectModel/formLogInPage";

const newUsers = require("../../fixtures/newUsers.json");

describe("Test Case 02 - Log In", function () {
  beforeEach(function () {
    cy.visit("/index.html");
    mainPage.clickLogIn();
    cy.wait(2000);
    formLogInPage.elements.username_button().type(newUsers.userName);
    cy.wait(2000);
    formLogInPage.elements.password_button().type(newUsers.password);
    cy.wait(2000);
    formLogInPage.clickLogIn();
    cy.wait(2000);
  });

  it("logIn successful", () => {
    cy.get("#nameofuser").should("be.visible");
  });
});
