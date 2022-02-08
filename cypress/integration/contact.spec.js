describe('Submit form data', () => {
  it('Renders the contact page', () => {
    cy.visit('/contact');
    cy.get('.contact-form').should('exist');
  });

  it('Allows the form to be filled in', () => {
    cy.get('#first-name').type('Brian');
    cy.get('#last-name').type('Nguyen');
    cy.get('#email').type('fakeemail@email.com');
    cy.get('#message').type('Hi, hello, goodbye');
  });

  it('Allows the button to be clickable', () => {
    cy.contains('button', 'Submit').click();
  });
});
