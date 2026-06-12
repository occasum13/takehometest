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

    POST /todos
        - Status code validation
        - Response reflection
        - Assigned id validation

    GET /todos
        - Status code validation
        - Response array length validation
        - Required keys validation
        - Data type validation

    GET /todos/id
        - Status code validation
        - Required keys validation
        - Data type validation
        - Response reflection
        - Error handling validation

    GET /todos?userId=
        - Status code validation
        - Response format validation
        - userId filter validation
        - Error handling validation

    PUT /todos/id
        - Status code validation
        - Response reflection

    PATCH /todos/id
        - Status code validation
        - Response reflection

    DELETE /todos/id
        - Status code validation
        - Response body validation

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
