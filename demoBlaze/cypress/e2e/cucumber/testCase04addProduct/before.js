before(() => {
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
