class mainPage {
  elements = {
    signUp_button: () => cy.get("#signin2").click(),
    logIn_button: () => cy.get("#login2"),
    logOut_button: () => cy.get("#logout2"),
    cart_button: () => cy.get("#cartur").click(),

    laptops_button: () => cy.contains("Laptops"),
  };

  clickLogIn() {
    this.elements.logIn_button().click();
  }

  clickLogOut() {
    this.elements.logOut_button().click();
  }
}

module.exports = new mainPage();
