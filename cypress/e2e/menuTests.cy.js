import Application from '../support/pages/application'
const application = new Application()

describe('Menu Application Tests', () => {
	beforeEach(() => {
		cy.visit('')
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
	it('AUR-13 Broken Images', () => {
		application.homePage.accessBrokenImagesPage()
		application.brokenImagesPage.validateBrokenImage()
		application.brokenImagesPage.validateImage()
	})
	it('AUR-14 Context Menu', () => {
		application.homePage.accessContextMenuPage()
		application.contextMenuPage.clickBox()
	})
	it('AUR-15 Drag and Drop', () => {
		application.homePage.accessDragAndDropPage()
		application.dragAndDropPage.changeSquarePositions()
		application.dragAndDropPage.validateChangedB()
		application.dragAndDropPage.changeSquarePositions()
		application.dragAndDropPage.validateChangedA()
	})
})
