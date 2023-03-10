class BasePage {
	/**
	 *Click on a link menu by text
	 * @param {String} element
	 * @param {String} text
	 */
	accessMenuByText(element, text, time) {
		if (time) {
			cy.get(element, { timeout: time }).contains(text).should('be.visible').click()
		} else {
			cy.fixture('env').then(data => {
				cy.get(element, { timeout: data.TIME_WAIT }).contains(text).should('be.visible').click()
			})
		}
	}
	/**
	 *Override click adding wait option
	 * @param {String} element
	 * @param {Integer} time
	 */
	clickWait(element, time) {
		if (time) {
			cy.get(element, { timeout: time }).should('be.visible').click()
		} else {
			cy.fixture('env').then(data => {
				cy.get(element, { timeout: data.TIME_WAIT }).should('be.visible').click()
			})
		}
	}
	authenticateAccess() {
		cy.fixture('env').then(data => {
			cy.visit(data.auth.user + ':' + data.auth.password + '@' + data.baseUrl + '/' + data.menus.BasicAuth)
		})
	}
}
export default BasePage
