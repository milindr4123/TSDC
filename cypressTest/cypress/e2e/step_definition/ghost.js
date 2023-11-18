import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to page Ghost', () => {
  cy.visit("http://localhost:2368/ghost/#/signin");
  cy.screenshot('SignInPage');
});

When("I enter email", () => {
  cy.get("#identification").type("j.corredore@uniandes.edu.co");
  cy.screenshot('EnterYourEmail');
  cy.wait(1000);
});

When("I enter password", () => {
  cy.get("#password").type("01234567890");
  cy.screenshot('EnterYourPassword');
  cy.wait(1000);
});

When("I click in Sign in button", () => {
  cy.get("#ember5").click();
  cy.screenshot('ClickSignInButton');
  cy.wait(2000);
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/dashboard");
  cy.screenshot('DashboardPage');
  cy.wait(5000);
});

When("I click in Pages link", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot('PageLink');
  cy.wait(3000);
});

Then("I should be redirected to the pages", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
  cy.screenshot('PagesPage1');
  cy.wait(5000);
});

When('I click the {string} link', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
  cy.screenshot('NewPagesButton');
  cy.wait(5000);
});

Then("I should be redirected to the new page", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
  cy.screenshot('NewPage1');
  cy.wait(2000);
});

When("I enter title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePage');
  cy.wait(1000);
});

When("I click the Page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot('PageSettingsMenu');
  cy.wait(2000);
});

Then('The settings menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot('PageSettingsMenuVisible');
  cy.wait(2000);
});

When("I click again on the page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot('PageSettingsMenuAgain');
  cy.wait(1000);
});

When("I click in Preview button", () => {
  cy.get('button[data-test-button="publish-preview"]').click();
  cy.screenshot('PreviewButton');
  cy.wait(5000);
});

When("I click in Editor button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
  cy.screenshot('EditorButton');
  cy.wait(5000);
});

Then("I should be redirected to the page", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/page/");
  cy.screenshot('NewPageRedirected');
  cy.wait(2000);
});

When("I click in Pages link again", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot('PageLink2');
  cy.wait(2000);
});

When("I enter New title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePage');
  cy.wait(1000);
});

When("I click in Publish button", () => {
  cy.get('section button[data-test-button="publish-flow"]').click();
  cy.screenshot('PublishButton');
  cy.wait(5000);
});

When("I click in Continue, final review button", () => {
  cy.get('button[data-test-button="continue"]').click()
  cy.screenshot('ContinuePublish');
  cy.wait(5000);
});

When("I click in Publish page, right now button", () => {
  cy.get('button[data-test-button="confirm-publish"]').click();
  cy.screenshot('ConfirmPublish');
  cy.wait(3000);
});

When("I click in Published Page", () => {
  cy.get('div.gh-post-bookmark-image').click();
  cy.screenshot('PagePublished');
  cy.wait(3000);
});

Then("I should be redirected to the Published page", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/page/");
  cy.screenshot('NewPageRedirected');
  cy.wait(2000);
});

When("I click in the Delete page button", () => {
  cy.get("button.gh-btn-outline").click();
  cy.screenshot('DeletePageButton');
  cy.wait(3000);
});

When("I click in the Delete button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot('DeleteButton');
  cy.wait(3000);
});

Then("I should be redirected", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
  cy.screenshot('Pages');
  cy.wait(2000);
});

When("I click in Back to Editor link", () => {
  cy.get('button[data-test-button="back-to-editor"]').click();
  cy.screenshot('BackToEditor');
  cy.wait(3000);
});

When("I click in Unpublish button", () => {
  cy.get('section button[data-test-button="update-flow"]').click();
  cy.screenshot('UnpublishButton');
  cy.wait(3000);
});

When("I click in Unpublish and revert to private draft button", () => {
  cy.get('button[data-test-button="revert-to-draft"]').click();
  cy.screenshot('Unpublish');
  cy.wait(3000);
});