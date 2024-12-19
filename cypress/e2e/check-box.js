/// <reference types="Cypress" />

describe("Testing Check Box", () => {
    it("Check Box ", () => {
      cy.visit("/checkbox");
      cy.get('[title="Expand all"]').click();
      cy.get('input[type="checkbox"]')
        .eq(11)
        .check({ force: true })
        .should("be.checked"); 
    });
  });