class buyPage {
  elements = {
    addToCart_button: () => cy.contains("Add to cart"),
  };
}

module.exports = new buyPage();
