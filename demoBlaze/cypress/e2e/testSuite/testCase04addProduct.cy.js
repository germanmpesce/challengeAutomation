import mainPage from "../../pageObjectModel/mainPage";
import formLogInPage from "../../pageObjectModel/formLogInPage";
import laptopsPage from "../../pageObjectModel/laptopsPage";
import buyPage from "../../pageObjectModel/buyPage";

const newUsers = require("../../fixtures/newUsers.json");
describe("test Case 04 - add to Cart and verify", function () {
  beforeEach(function () {
    //Login
    cy.visit("/index.html");
    mainPage.clickLogIn();
    cy.wait(2000);
    formLogInPage.elements.username_button().type(newUsers.userName);
    cy.wait(2000);
    formLogInPage.elements.password_button().type(newUsers.password);
    cy.wait(2000);
    formLogInPage.clickLogIn()

    cy.visit("https://www.demoblaze.com/index.html");
    //Navigate to section 'Laptops'
    mainPage.elements.laptops_button().click();
    //Select laptop Sony vaio i5
    laptopsPage.elements.item_laptop().click();
    buyPage.elements.addToCart_button().click();

    cy.visit("https://www.demoblaze.com/cart.html");
  });

  //Validatation: Laptot Sony vaio i5 is in the cart.
  it("item added to Cart successful", () => {
    cy.contains("Sony vaio i5").should("be.visible");
    cy.contains("Place Order").should("be.enabled");
  });
});
