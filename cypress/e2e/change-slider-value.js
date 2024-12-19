/// <reference types="Cypress" />

describe("Testing slider value changed", () => {
  it("Slider value", () => {
    cy.visit("/slider"); 
    cy.get('input[type="range"]')
      .then(($el) => $el[0].stepUp(40)) 
      .trigger("change");
    cy.get("#sliderValue").should("have.value", 65); 
  });
});
