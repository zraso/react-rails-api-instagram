/// <reference types="Cypress" />

context("Posts", () => {
  describe("When user signs in", () => {
    it("displays all your posts", () => {
      cy.visit("http://localhost:5000/");
      cy.get("#caption").should("contain", "I'm so sexy");
    });
  });
});

// it('displays the user name on the page', () => {
//   cy.visit('baseURL');
//   cy.get('#sign-up-handle').type('melvin');
//   cy.get('#sign-up-password').type('123');
//   cy.get('#sign-up-submit').click();
//   cy.get('#user-dashboard').should('contain', 'melvin');
// });
