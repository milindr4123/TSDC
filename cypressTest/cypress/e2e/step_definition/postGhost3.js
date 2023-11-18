import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to page Ghost 3.42.', () => {
  cy.visit("http://localhost:3001/ghost/#/signin");
  cy.screenshot('SignInPage');
  cy.wait(2000);
});

When("I enter Email Address", () => {
  cy.get("#ember8").type("j.corredore@uniandes.edu.co");
  cy.screenshot('EnterYourEmail');
  cy.wait(1000);
});

When("I enter Password", () => {
  cy.get(".password").type("01234567890");
  cy.screenshot('EnterYourPassword');
  cy.wait(1000);
});

When("I click in Sign In button", () => {
  cy.get("#ember12").click();
  cy.screenshot('ClickSignInButton');
  cy.wait(2000);
});

Then("I should be redirected to the View Site", () => {
  cy.url().should("eq", "http://localhost:3001/ghost/#/site");
  cy.screenshot('ViewSite');
  cy.wait(5000);
});

When("I click in Pages view", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot('PageLink');
  cy.wait(3000);
});

Then("I should be redirected to the pages view", () => {
  cy.url().should("eq", "http://localhost:3001/ghost/#/pages");
  cy.screenshot('PagesPage1');
  cy.wait(5000);
});

When('I click the {string} button', () => {
  cy.get("section.view-actions a[href='#/editor/page/'], #ember404").click();
  cy.screenshot('NewPagesButton');
  cy.wait(2000);
});

Then("I should be redirected to the create new page", () => {
  cy.url().should("eq", "http://localhost:3001/ghost/#/editor/page");
  cy.screenshot('NewPage1');
  cy.wait(2000);
});

When("I enter title page {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePage');
  cy.wait(1000);
});

When("I click the Page settings", () => {
  cy.get("button.post-settings").click();
  cy.screenshot('PageSettingsMenu');
  cy.wait(2000);
});

When("I click the Page settings again", () => {
  cy.get("button.post-settings").click();
  cy.screenshot('PageSettingsMenu');
  cy.wait(2000);
});

Then('The menu settings should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot('PageSettingsMenuVisible');
  cy.wait(2000);
});

When("I click in Preview Button", () => {
  cy.get("div.form-group a").click();
  cy.screenshot('PreviewButton');
  cy.wait(3000);
});

When("I click on the close settings", () => {
  cy.get("button.close").click();
  cy.screenshot('PageSettingsMenuAgain');
  cy.wait(1000);
});

Then("I should be redirected to the page view", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/page/");
  cy.screenshot('NewPageRedirected');
  cy.wait(2000);
});

When("I click in Pages", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot('PageLink2');
  cy.wait(2000);
});

When("I edit title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePage');
  cy.wait(3000);
});

When("I click in Publish", () => {
  cy.get('div[role="button"].gh-publishmenu-trigger').click();
  cy.screenshot('PublishButton');
  cy.wait(3000);
});

When("I click in Publish Button", () => {
  cy.get('button.gh-publishmenu-button').click()
  cy.screenshot('ContinuePublish');
  cy.wait(3000);
});

When("I click in Unpublish Button", () => {
  cy.get('button.gh-publishmenu-button').click()
  cy.screenshot('ContinuePublish');
  cy.wait(3000);
});

When("I click in Unpublish radio button", () => {
  cy.get('div.gh-publishmenu-radio-label').contains('Unpublished').parent().click();
  cy.screenshot('ContinuePublish');
  cy.wait(3000);
});

When("I click in Published Page", () => {
  cy.get('button.gh-publishmenu-button').click();
  cy.screenshot('PagePublished');
  cy.wait(2000);
});

When("I click in the Delete Page Button", () => {
  cy.get("button.settings-menu-delete-button").click();
  cy.screenshot('DeletePageButton');
  cy.wait(2000);
});

When("I click in the Delete Button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot('DeleteButton');
  cy.wait(2000);
});

Then("I should be redirected Pages", () => {
  cy.url().should("eq", "http://localhost:3001/ghost/#/pages");
  cy.screenshot('Pages');
  cy.wait(2000);
});