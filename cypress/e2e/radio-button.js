/// <reference types="Cypress" />

describe("Testing Radio button", () => {
  it("Radio button", () => {
    cy.visit("/radio-button"); 
    cy.get('input[type="radio"]')
      .eq(1)
      .check({ force: true })
      .should("be.checked");
  });
});
