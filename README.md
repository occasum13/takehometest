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
