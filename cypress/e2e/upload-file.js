/// <reference types="Cypress" />

describe("Testing File Upload", () => {
  it("Upload File", () => {
    cy.visit("/upload-download");
    cy.get('input[type="file"]').attachFile("Aleksoski Filip - CV.docx.pdf");
    cy.get("#uploadedFilePath").should(
      "include.text",
      "Aleksoski Filip - CV.docx.pdf"
    );
  });
});
