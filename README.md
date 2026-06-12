# TAKE-HOME TEST — João Paulo Assis Gayer

## Overview

This project contains API and E2E automation tests written with Cypress + JS for both the JSONPlaceholder API and the EE Global Website.

---

## Endpoints Tested

- `POST /todos`
- `GET /todos`
- `GET /todos/:id`
- `GET /todos?userId=`
- `PUT /todos/:id`
- `PATCH /todos/:id`
- `DELETE /todos/:id`

## Pages Tested

- Landing Page
- Product Page
- Checkout Page

---

## Tech

- Node.js
- Cypress
- JavaScript

---

## Installation

```bash
# Clone the repo
git clone <repo-url>

# Navigate to project
cd take-home-test

# Install dependencies
npm i
```

---

## Running Tests

```bash
# API tests
npm run cy:api

# UI tests
npm run cy:ui
```

---

## Project Structure

```
cypress/
├── e2e/
│   ├── api/
│   │   └── todo.cy.js
│   └── ui/
│       ├── checkout_page.cy.js
│       ├── landing_page.cy.js
│       └── product_page.cy.js
├── fixtures/
├── screenshots/
└── support/
    ├── api/
    │   └── todo_commands.js
    └── ui/
        ├── locators/
        │   ├── checkout_locators.js
        │   ├── landing_locators.js
        │   └── product_locators.js
        └── eeglobal_commands.js
cypress.config.js
e2e.js
package.json
```

---

## Test Coverage

### API

**`POST /todos`**
- Status code validation
- Response reflection
- Assigned id validation

**`GET /todos`**
- Status code validation
- Response array length validation
- Required keys validation
- Data type validation

**`GET /todos/:id`**
- Status code validation
- Required keys validation
- Data type validation
- Response reflection
- Error handling validation

**`GET /todos?userId=`**
- Status code validation
- Response format validation
- userId filter validation
- Error handling validation

**`PUT /todos/:id`**
- Status code validation
- Response reflection

**`PATCH /todos/:id`**
- Status code validation
- Response reflection

**`DELETE /todos/:id`**
- Status code validation
- Response body validation

---

### UI

**Landing Page**
- Acessing
- Validating butons navigation

**Product Page**
- Acessing
- Validating butons navigation

**Checkout Page**
- Acessing
- Validating Form Inputs
- Validating status messages
- Validating navigation
