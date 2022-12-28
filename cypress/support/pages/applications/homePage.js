import BasePage from '../basePage'

const selectors = {
	menuLinks: 'div [id="content"]  a ',
	paragraph: 'div [class = example ] p'
}

class HomePage extends BasePage {
	accessABVariation() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.AB)
		})
	}
	validateTextParagraph() {
		cy.get(selectors.paragraph).should('be.visible')
	}
}
export default HomePage
