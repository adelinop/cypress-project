# Cypress project for automation e2e tests

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)


### Suggested IDEs by [Cypress documentation](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins):
- VsCode (I recommend using this one)
- Intellij

If you are gonna use VsCode, I suggest you use the following extensions:

- ESLint (from Microsoft)
- Prettier (from Prettier)
- vscode-ions (from VSCode Icons Team)
- Git Lens - Git supercharged (from GitKraken)

### Official framework link:

- [Cypress website](https://www.cypress.io/).

---
<br>

## Dependencies

You will need to install Node.js to execute the project.
Download the latest stable Node version [here](https://nodejs.org/en/).

After completing node's installation, you will need to clone this current repo

## Installing the dependencies

Open the repo folder on CLI mode and install all dev dependencies using npm.
Just type:

> ```bash
>  npm install
> ```

## Dependencies used in this project

- cypress mochawesome reporter [here](https://www.npmjs.com/package/wdio-mochawesome-reporter).
- eslint [here](https://www.npmjs.com/package/eslint).
- eslint config prettier [here](https://www.npmjs.com/package/eslint-config-prettier).
- eslint plugin cypress [here](https://www.npmjs.com/package/eslint-plugin-cypress).
- prettier [here](https://www.npmjs.com/package/prettier).

---
<br>

## Run the tests with Cypress using CLI

> ```bash
> # Starting the tests via CLI:
> npm run cy:run
>
># Starting the tests via browser:
> npm run cy:open
>
> ```

---
<br>

## Format and code pattern

This project has eslint and prettier configured to mantain the code pattern 

> ```bash
> #Run this command for formatt all project with eslint and prettier rules 
> npm run format
> ```

