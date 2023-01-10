import BasePage from '../basePage'
const selectors = {
	boxClicable: 'div[id=hot-spot]'
}
class ContextMenuPage extends BasePage {
	clickBox() {
		cy.log('Do right click and handling alert').get(selectors.boxClicable).rightclick()
		cy.on('window:alert', alertText => {
			expect(alertText).eq('You selected a context menu')
		})
	}
}
export default ContextMenuPage
