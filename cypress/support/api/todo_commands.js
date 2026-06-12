const baseUrl = Cypress.env('apiBaseUrl')

// POST
Cypress.Commands.add('createTodo', (body) => {
  return cy.request({
    method: 'POST',
    url: `${baseUrl}/todos`,
    body,
    headers: { 'Content-Type': 'application/json' }
  })
})

// GET all
Cypress.Commands.add('getTodos', () => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/todos`
  })
})

// GET by id
Cypress.Commands.add('getTodoById', (id) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/todos/${id}`,
    failOnStatusCode: false
  })
})

// GET filtered by userId
Cypress.Commands.add('getTodosByUserId', (userId) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/todos`,
    qs: { userId }
  })
})

// PUT (full update)
Cypress.Commands.add('updateTodo', (id, body) => {
  return cy.request({
    method: 'PUT',
    url: `${baseUrl}/todos/${id}`,
    body,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

// PATCH (partial update)
Cypress.Commands.add('patchTodo', (id, body) => {
  return cy.request({
    method: 'PATCH',
    url: `${baseUrl}/todos/${id}`,
    body,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

// DELETE
Cypress.Commands.add('deleteTodo', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `${baseUrl}/todos/${id}`,
    failOnStatusCode: false
  })
})