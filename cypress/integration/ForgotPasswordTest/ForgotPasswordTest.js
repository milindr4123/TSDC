import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given('I navigate to page Ghost Web', () => {
  cy.fixture('ports').then((port) => {
    portVersion = port.v5;
    cy.visit(`http://localhost:${portVersion}/ghost/`);
  });
  cy.screenshot(datetime + '-PageGhostV5/SignInPage');
});

When("I enter invalid email", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="identification"]').type(credentials.invalidEmail, {force: true})
  });
  cy.screenshot(datetime + "-PageGhostV5/PageInvalidEmailAndValidPassword");
});

When("I enter invalid email format", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="identification"]').type(credentials.invalidEmailFormat, {force: true})
  });
  cy.screenshot(datetime + "-PageGhostV5/PageInvalidEmailAndValidPassword");
});

When("I click in forgot button", () => {
  cy.get("#ember4").click({force: true});
  cy.screenshot(datetime + '-PageGhostV5/ClickForgotButton');
  cy.wait(4000);
});

Then('The error message {string}', (error) => {
  cy.get('p.main-error').invoke('text').should('contains', error);
  cy.screenshot(datetime + '-PageGhostV5/PageErrorForgotPassword');
  cy.wait(5000);
});