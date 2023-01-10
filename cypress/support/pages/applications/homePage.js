import BasePage from '../basePage'

const selectors = {
	menuLinks: 'div [id="content"]  a '
}

class HomePage extends BasePage {
	accessABVariation() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.AB)
		})
	}
	accessRemoveElementsPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.RemoveElement)
		})
	}
	accessBrokenImagesPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.BrokenImages)
		})
	}
	accessContextMenuPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.ContextMenu)
		})
	}
}
export default HomePage
