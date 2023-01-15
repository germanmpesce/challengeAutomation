before(() => {
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
