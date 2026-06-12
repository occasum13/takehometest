TAKE-HOME TEST - João Paulo Assis Gayer.

Overview:

This project contains API and E2E automation tests written with Cypress+JS for both JSONPlaceholder API and the EE Global Website.

Endpoints tested:
- GET /todos
- GET /todos/id

Pages tested:
- Landing Page
- Product Page
- Checkout Page

Tech:
- Node.js
- Cypress
- Javascript

Installation:
- Clone the repo
- Navigate to project
- Run "npm i"

Running tests:
- API: "npm run cy:api"
- UI: "npm run cy:ui"

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


Project Structure:

├─ cypress
│   └─ e2e -> TEST SPEC FOLDERS
│   │   └─ api
│   |   |   └─ todo.cy.js - test spec file
│   |   └─ ui
│   |   |   └─ landing_page.cy.js
│   |   |   └─ product_page.cy.js
│   |   |   └─ checkout_page.cy.js
│   ├─ fixtures
│   └─ support -> CUSTOM COMMANDS & LOCATORS
│   |   └─ api
│   |   |   └─ todo_commands.js
│   |   └─ ui
│   |   |   └─ locators
│   |   |   |   └─ checkout_page_locators.js
│   |   |   |   └─ landing_page_locators.js
│   |   |   |   └─ product_page_locators.js
│   |   └─ e2e.js
│─ cypress.config.js -> CYPRESS CONFIGS
│─ package.json -> LIBS & SCRIPTS
│─ README.md -> THIS FILE :)