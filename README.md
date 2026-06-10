TAKE-HOME TEST - João Paulo Assis Gayer.

Overview:

This project contains API automation tests written with Cypress+JS for the JSONPlaceholder todo API.

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

Project Structure
cypress
 ├─ e2e - folder where all the test specs are located
 │   └─ todos.cy.js - test spec file
 ├─ fixtures - additional test data/mocks that we could use if needed
 └─ support - folder where all the custom commands are located

cypress.config.js - cypress configs
package.json - node configs/libraries
README.md - this file XD