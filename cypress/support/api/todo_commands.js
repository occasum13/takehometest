const baseUrl = Cypress.env('apiBaseUrl')

Cypress.Commands.add('getTodos', () => {
  console.log(baseUrl)
  cy.log(baseUrl)
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/todos`
  })
})

Cypress.Commands.add('getTodoById', (id) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/todos/${id}`,
    failOnStatusCode: false
  })
})