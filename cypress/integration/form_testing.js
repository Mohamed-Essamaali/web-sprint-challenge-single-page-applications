describe('form Testing',()=>{
    it('test form if it is working',()=>{
    cy.visit ('http://localhost:3000/pizza');
    cy.get('[data-cy=name]').type('Mohamed').should('have.value','Mohamed');
    cy.get('select').select('medium');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="checkbox"]').check() ;
    cy.get('form > a > .btn').click()
})
    })
   