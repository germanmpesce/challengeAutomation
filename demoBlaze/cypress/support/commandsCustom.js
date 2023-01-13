Cypress.Commands.add('headersValidation', (endpoint) => {
    cy.request('GET', endpoint).then((response) => {
        expect(response.status).to.eq(200)
    })
})

