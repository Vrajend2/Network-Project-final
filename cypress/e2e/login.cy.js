describe('Login Page', () => {
    it('show Login error when trying to login with unknown registered user', () => {
      cy.visit('http://localhost:3001/login')
      cy.get('[data-cy=login]', { timeout: 20000 }).should('exist');
      
    })
  })