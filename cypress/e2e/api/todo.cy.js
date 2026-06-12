describe('ToDo API', () => {

  context('POST /todos', () => {

    const newTodo = { 
      title: 'Experience Universo Paralello', 
      completed: false, 
      userId: 1 
    }

    it('should return status 201', () => {
      cy.createTodo(newTodo).then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it('should return the created todo with an assigned id', () => {
      cy.createTodo(newTodo).then((response) => {
        expect(response.body.id).to.be.a('number')
      })
    })

    it('should reflect the sent data in the response', () => {
      cy.createTodo(newTodo).then((response) => {
        expect(response.body.title).to.eq(newTodo.title)
        expect(response.body.completed).to.eq(newTodo.completed)
        expect(response.body.userId).to.eq(newTodo.userId)
      })
    })
  })

  context('GET /todos', () => {

    it('should return status 200', () => {
      cy.getTodos().then((response) => {
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
        expect(response.body).to.have.length(200)
      })
    })

    it('should contain required keys', () => {
      cy.getTodos().then((response) => {
        response.body.forEach(todo => {
          expect(todo).to.have.all.keys('userId', 'id', 'title', 'completed')
        })
      })
    })

    it('should validate property types', () => {
      cy.getTodos().then((response) => {
        response.body.forEach(todo => {
          expect(todo.userId).to.be.a('number')
          expect(todo.id).to.be.a('number')
          expect(todo.title).to.be.a('string')
          expect(todo.completed).to.be.a('boolean')
        })
      })
    })
  })

  context('GET /todos/id', () => {

    it('should return status 200', () => {
      cy.getTodoById(1).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('should return the requested id', () => {
      cy.getTodoById(25).then((response) => {
        expect(response.body.id).to.eq(25)
      })
    })

    it('should contain required keys', () => {
      cy.getTodoById(1).then((response) => {
        expect(response.body).to.have.all.keys('userId', 'id', 'title', 'completed')
      })
    })

    it('should validate property types', () => {
      cy.getTodoById(1).then((response) => {
        expect(response.body.userId).to.be.a('number')
        expect(response.body.id).to.be.a('number')
        expect(response.body.title).to.be.a('string')
        expect(response.body.completed).to.be.a('boolean')
      })
    })

    it('should return 404 for non existing id', () => {
      cy.getTodoById(999999).then((response) => {
        expect(response.status).to.eq(404)
      })
    })

    it('should return 404 for invalid id format', () => {
      cy.getTodoById('abc').then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })

  context('GET /todos?userId=', () => {

    it('should return only todos from the specified user', () => {
      cy.getTodosByUserId(1).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        response.body.forEach(todo => {
          expect(todo.userId).to.eq(1)
        })
      })
    })

    it('should return empty array for non existing userId', () => {
      cy.getTodosByUserId(999999).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array').that.is.empty
      })
    })
  })

  context('PUT /todos/:id', () => {

    const updatedTodo = {
       id: 1, 
       title: 'Interview with Dmitri', 
       completed: true, 
       userId: 1 
    }

    it('should return status 200', () => {
      cy.updateTodo(1, updatedTodo).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('should reflect all updated fields in the response', () => {
      cy.updateTodo(1, updatedTodo).then((response) => {
        expect(response.body.title).to.eq(updatedTodo.title)
        expect(response.body.completed).to.eq(updatedTodo.completed)
      })
    })
  })

  context('PATCH /todos/id', () => {

    it('should return status 200', () => {
      cy.patchTodo(1, {completed: true}).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('should reflect the patched field in the response', () => {
      cy.patchTodo(1, {completed: true}).then((response) => {
        expect(response.body.completed).to.eq(true)
      })
    })
  })

  context('DELETE /todos/id', () => {

    it('should return status 200', () => {
      cy.deleteTodo(1).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})