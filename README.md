TAKE-HOME TEST - João Paulo Assis Gayer.

Overview:

This project contains API and E2E automation tests written with Cypress+JS for both JSONPlaceholder todo API and EE Global Website.

Endpoints tested:
- GET /todos
- GET /todos/id

Tech:
- Node.js
- Cypress
- Javascript

Installation:
- Clone the repo
- Navigate to project
- Run "npm i"
- Run "npm run test"

Test Coverage:

API: 

GET /todos
- Status code validation
- Response format validation
- Response array length validation
- Required keys validation
- Data type validation
- Content-Type validation
- Error handling validation

GET /todos/id
- Status code validation
- Response format validation
- Error handling validation

UI:

Landing Page
- Acessing
- Validating butons navigation

Product Page
- Acessing
- Validating butons navigation

Checkout Page
- Acessing
- Validating Form Inputs
- Validating status messages
- Validating navigation


Project Structure
cypress
 ├─ e2e - folder where all the test specs are located
 │   └─ todos.cy.js - test spec file
 ├─ fixtures - additional test data/mocks that we could use if needed
 └─ support - folder where all the custom commands are located

cypress.config.js - cypress configs
package.json - node configs/libraries
README.md - this file XD