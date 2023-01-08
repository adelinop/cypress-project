import Application from '../support/pages/application'
const application = new Application()

describe('Menu Application Tests', () => {
	beforeEach(() => {
		cy.accessUrl()
	})
	it('AUR-8 A/B Test Variation 1', () => {
		application.homePage.accessABVariation()
		application.abPage.validateTextParagraph()
	})
	it('AUR-9 Add/Remove Elements', () => {
		application.homePage.accessRemoveElementsPage()
		application.addRemoveElementsPage.clickOnAddElement()
		application.addRemoveElementsPage.validateButtonIsVisible()
		application.addRemoveElementsPage.validateButtonIsNotVisible()
	})
	it('AUR-11 Basic-Auth', () => {
		application.homePage.authenticateAccess()
		application.basicAuthPage.validatePageLoad()
	})
})
