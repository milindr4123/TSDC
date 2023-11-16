import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to page Ghost', () => {
  cy.visit("http://localhost:2368/ghost/#/signin");
  
});

When("I enter email", () => {
  cy.get("#identification").type("j.corredore@uniandes.edu.co");
  cy.wait(1000);
});

When("I enter password", () => {
  cy.get("#password").type("01234567890");
  cy.wait(1000);
});

When("I click in Sign in button", () => {
  cy.get("#ember5").click();
  cy.wait(2000);
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/dashboard");
  cy.wait(5000);
});

When("I click in Pages link", () => {
  cy.get("a[href='#/pages/']").click();
  cy.wait(3000);
});

Then("I should be redirected to the pages", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
  cy.wait(5000);
});

When('I click the {string} link', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
  cy.wait(5000);
});

Then("I should be redirected to the new page", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
  cy.wait(2000);
});

When("I enter title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.wait(1000);
});

When("I click the Page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.wait(2000);
});

Then('The settings menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
});

When("I click again on the page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.wait(1000);
});

When("I click in Preview button", () => {
  cy.get('button[data-test-button="publish-preview"]').click();
  cy.wait(5000);
});

When("I click in Editor button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
  cy.wait(5000);
});

Then("I should be redirected to the page", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/page/");
  cy.wait(2000);
});

When("I click in Pages link again", () => {
  cy.get("a[href='#/pages/']").click();
  cy.wait(2000);
});