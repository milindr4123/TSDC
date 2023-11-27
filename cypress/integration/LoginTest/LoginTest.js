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

When("I enter valid email", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="identification"]').type(credentials.email, {force: true})
  });
  cy.screenshot(datetime + "-PageGhostV5/PageValidEmail");
});

When("I enter valid password", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="password"]').type(credentials.password, {force: true})
  });
  cy.screenshot(datetime + "-PageGhostV5/PageValidPassword");
});

When("I enter invalid email", async () => {
  cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/usersEmail.json?key=ba212b80",
  }).then((response) => {
    expect(response.status).to.eq(200);
    const randomElement = Cypress._.sample(response.body);
    cy.get('input[name="identification"]').type(randomElement.email, {force: true})
  });
});

When("I enter invalid password", async () => {
  cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/password.json?key=ba212b80",
  }).then((response) => {
    expect(response.status).to.eq(200);
    const randomElement = Cypress._.sample(response.body);
    cy.get('input[name="password"]').type(randomElement.password, {force: true})
  });
});

When("I click in Sign in button", () => {
  cy.get("#ember5").click({force: true});
  cy.screenshot(datetime + '-PageGhostV5/ClickSignInButton');
  cy.wait(2000);
});

Then('The error message {string}', (error) => {
  cy.get('p.main-error').invoke('text').should('contains', error);
  cy.screenshot(datetime + '-PageGhostV5/PageErrorLogin');
  cy.wait(2000);
});

When("I enter empty email and valid password", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="identification"]').invoke('val', '')
    cy.get('input[name="password"]').type(credentials.password, {force: true})
  });
  cy.screenshot(datetime + "-PageGhostV5/PageEmptyEmail");
});

When("I enter valid email and empty password", async () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get('input[name="identification"]').type(credentials.email, {force: true})
    cy.get('input[name="password"]').invoke('val', '')
  });
  cy.screenshot(datetime + "-PageGhostV5/PageEmptyPassword");
});

When("I enter empty email and empty password", async () => {
  cy.fixture('credentials').then(() => {
    cy.get('input[name="identification"]').invoke('val', '')
    cy.get('input[name="password"]').invoke('val', '')
  });
  cy.screenshot(datetime + "-PageGhostV5/PageEmptyFields");
});