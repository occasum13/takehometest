// This is the spec file for the Cypress tests

// Here we have "describe", which is used to literally describe what we are testing on this file
describe('Todo API', () => {

  // Here we have "context" which adds further context to differentiate between tests which are testing what
  context('GET /todos', () => {

    // And this is the test structure, calling a custom command from /cypress/support/todos_commands.js
    it('should return status 200', () => {
      cy.getTodos().then((response) => {
          console.log(response)
        expect(response.status).to.eq(200)
      })
    })

    it('should return an array of todos', () => {
      cy.getTodos().then((response) => {
        expect(response.body).to.be.an('array')
      })
    })

    it('should return 200 todos', () => {
      cy.getTodos().then((response) => {
        expect(response.body).length(200)
      })
    })

    it('should contain required keys', () => {
      cy.getTodos().then((response) => {
        let body = response.body
        body.forEach(todo => {
          expect(todo).to.have.all.keys(
            'userId',
            'id',
            'title',
            'completed'
          )
        })
      })
    })

    it('should validate property types', () => {
      cy.getTodos().then((response) => {
        let body = response.body
        body.forEach(todo => {
          expect(todo.userId).to.be.a('number')
          expect(todo.id).to.be.a('number')
          expect(todo.title).to.be.a('string')
          expect(todo.completed).to.be.a('boolean')
        })
      })
    })
  })
})