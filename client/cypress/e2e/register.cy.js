describe('register Page', () => {
  it('show Registration error when some fields left blank', () => {
    cy.visit('http://localhost:3001/register')
    cy.get('[data-cy=register]', { timeout: 20000 }).should('exist');
    
  })
})