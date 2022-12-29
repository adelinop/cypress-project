import BasePage from '../basePage'
const selectors = {
	paragraph: 'div [class = example ] p'
}
class AbPage extends BasePage {
	validateTextParagraph() {
		cy.get(selectors.paragraph).should('be.visible')
	}
}
export default AbPage
