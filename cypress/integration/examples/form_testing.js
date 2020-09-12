describe('form Testing',()=>{
    it('test form if it is working',()=>{
    cy.visit ('http://localhost:3000/pizza');
    cy.get('[data-cy=name]').type('Mohamed').should('have.value','Mohamed')
})
    })
   