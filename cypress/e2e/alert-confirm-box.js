/// <reference types="Cypress" />

describe("Testing allert - confirm box", () => {
  it("Alert - Confirm box", () => {
    cy.visit("/alerts");
    cy.get("#confirmButton").click();
    cy.on("window:alert", (str) => {
      return true;
    });
    cy.get("#confirmResult").should("include.text", "You selected Ok");
  });
});
