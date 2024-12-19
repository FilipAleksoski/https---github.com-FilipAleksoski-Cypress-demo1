

Cypress.Commands.add('insertData', (name, email, current_adress, permanent_address) => {
  cy.get('#userName').type(name);
  cy.get('#userEmail').type(email);
  cy.get('#currentAddress').type(current_adress);
  cy.get('#permanentAddress').type(permanent_address);
  cy.get('#submit').click();
});

Cypress.Commands.add("landingPage", () => {
  cy.visit("https://www.demoqa.com/");
});


import 'cypress-file-upload';
