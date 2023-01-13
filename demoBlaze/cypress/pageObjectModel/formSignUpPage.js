class formSignUpPage {
  elements = {
    username_button: () => cy.get("#sign-username").click(),
    password_button: () => cy.get("#sign-password").click(),
    singUp_button: () => cy.contains("button", "Sign up"),
  };

  clickSignUp() {
    this.elements.singUp_button().click();
  }
}

module.exports = new formSignUpPage();
