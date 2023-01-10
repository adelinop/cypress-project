import BasePage from '../basePage'
const selectors = {
	squareA: 'div[id="column-a"]',
	squareB: 'div[id="column-b"]',
	listSquare: 'div[draggable="true"]'
}
class DragAndDropPage extends BasePage {
	changeSquarePositions() {
		const dataTransfer = new DataTransfer()
		cy.get(selectors.squareA).trigger('dragstart', { dataTransfer })
		cy.get(selectors.squareB).trigger('drop', { dataTransfer })
	}
	validateChangedB() {
		cy.get(selectors.listSquare).then(index => {
			cy.get(index[0]).should('have.text', 'B')
		})
	}
	validateChangedA() {
		cy.get(selectors.listSquare).then(index => {
			cy.get(index[0]).should('have.text', 'A')
		})
	}
}
export default DragAndDropPage
