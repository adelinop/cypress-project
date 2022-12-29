/* eslint-disable linebreak-style */
const { defineConfig } = require('cypress')
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	trashAssetsBeforeRuns: true,
	defaultCommandTimeout: 15000,
	viewportWidth: 1920,
	viewportHeight: 1080,
	reporterOptions: {
		reportDir: 'reports',
		overwrite: true
	},
	e2e: {
		setupNodeEvents(on) {
			on('before:run', async details => {
				console.log('override before:run')
				await beforeRunHook(details)
			})

			on('after:run', async () => {
				console.log('override after:run')
				await afterRunHook()
			})
		}
	}
})
