import BasePage from '../basePage'
const selectors = {
	title: 'div [class = example] h3'
}

class BasicAuthPage extends BasePage {
	validatePageLoad() {
		cy.get(selectors.title).should('be.visible')
	}
}
export default BasicAuthPage
