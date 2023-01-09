// ------------------------------------------------------------- Components -------------------------------------------------------//

// ----------------------------------------------------------------Pages -----------------------------------------------------------//
import HomePage from './applications/homePage'
import AbPage from './applications/abPage'
import AddRemoveElementsPage from './applications/addRemoveElementsPage'
import BasicAuthPage from './applications/basicAuthPage'
import BrokenImagesPage from './applications/brokenImagesPage'
/**
 * This is the main class the encapsulates all pages regarding the application (Except base pages since they are not meant to be directly called).
 *
 * Because of this class, you don't need to import and create objects to all the pages, so you can just call this Application class instead.
 *
 * All new pages regarding the application need to be added in here, so they can be used
 */
class Application {
	constructor() {
		// -------------------------------------------------------------------------- Components --------------------------------------------------------------------//

		// --------------------------------------------------------------------------------Pages ----------------------------------------------------------------------//
		// Statement Management
		this.homePage = new HomePage()
		this.abPage = new AbPage()
		this.addRemoveElementsPage = new AddRemoveElementsPage()
		this.basicAuthPage = new BasicAuthPage()
		this.brokenImagesPage = new BrokenImagesPage()
	}
}

export default Application
