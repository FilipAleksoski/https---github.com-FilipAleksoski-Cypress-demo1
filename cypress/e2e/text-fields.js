/// <reference types="Cypress" />

describe("Testing Check Box", () => {
  it("Text Fields", () => {
    cy.visit("/text-box");
    cy.insertData(
      "Filip Aleksoski",
      "filip.aleksoski@gmail.com",
      "Volgogradska 1/15",
      "Str. Pitu Guli N.50"
    );

    cy.get(".border").should(
      "have.text",
      "Name:Filip AleksoskiEmail:filip.aleksoski@gmail.comCurrent Address :Volgogradska 1/15 Permananet Address :Str. Pitu Guli N.50"
    );
  });
});
