import Application from '../support/pages/applications'
const application = new Application()

describe('A/B Test Variation 1', () => {
	it('Validate if the text of the paragraph is visible', () => {
		cy.accessUrl()
		application.homePage.accessABVariation()
	})
})
