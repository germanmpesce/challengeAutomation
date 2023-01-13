class laptopsPage {
  elements = {
    item_laptop: () => cy.contains("Sony vaio i5"),
  };
}

module.exports = new laptopsPage();
