import BasePage from '../basePage'
const selectors = {
	buttonAddElement: 'button[onclick="addElement()"] ',
	buttonsDelete: 'button[class="added-manually"]'
}
class AddRemoveElementsPage extends BasePage {
	clickOnAddElement() {
		this.clickWait(selectors.buttonAddElement)
	}
	validateButtonIsVisible() {
		cy.get(selectors.buttonsDelete).should('be.visible').click()
	}
	validateButtonIsNotVisible() {
		cy.get(selectors.buttonsDelete).should('not.exist')
	}
}
export default AddRemoveElementsPage
