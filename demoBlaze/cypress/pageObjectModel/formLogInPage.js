class formLogInPage {
  elements = {
    username_button: () => cy.get("#loginusername").click(),
    password_button: () => cy.get("#loginpassword").click(),
    logIn_button: () => cy.contains("button", "Log in"),
  };

  clickLogIn() {
    this.elements.logIn_button().click();
  }
}

module.exports = new formLogInPage();
