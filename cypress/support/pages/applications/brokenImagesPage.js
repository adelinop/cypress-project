import BasePage from '../basePage'
const selectors = {
	bImage1: 'img[src="asdf.jpg"]',
	bImage2: 'img[src="hjkl.jpg"]',
	image: 'img[src="img/avatar-blank.jpg"]'
}
class BrokenImagesPage extends BasePage {
	validateBrokenImage() {
		// 1. Select all image (`img`) elements on the page.
		cy.get(selectors.bImage1).each($img => {
			// 2. Scroll the image into view and check if it's visible.
			cy.wrap($img).scrollIntoView().should('be.visible')

			// 3. Ensure the natural width and height is greater than 0.
			expect($img[0].naturalWidth).to.be.equal(0)
			expect($img[0].naturalHeight).to.be.equal(0)
		})
		cy.get(selectors.bImage2).each($img => {
			cy.wrap($img).scrollIntoView().should('be.visible')
			expect($img[0].naturalWidth).to.be.equal(0)
			expect($img[0].naturalHeight).to.be.equal(0)
		})
	}
	validateImage() {
		cy.get(selectors.image).each($img => {
			cy.wrap($img).scrollIntoView().should('be.visible')
			expect($img[0].naturalWidth).to.be.greaterThan(0)
			expect($img[0].naturalHeight).to.be.greaterThan(0)
		})
	}
}
export default BrokenImagesPage
