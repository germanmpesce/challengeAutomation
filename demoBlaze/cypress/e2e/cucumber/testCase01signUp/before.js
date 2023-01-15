before(() => {
  cy.visit("/index.html");
  mainPage.elements.signUp_button();
  cy.wait(2000);
  formSignUpPage.elements.username_button().type(newUsers.userName);
  cy.wait(2000);
  formSignUpPage.elements.password_button().type(newUsers.password);
  cy.wait(2000);
  formSignUpPage.clickSignUp();
});
