Cypress.Commands.add('accessUrl', () => {
	cy.fixture('env').then(data => {
		cy.visit(data.baseUrl)
	})
})
