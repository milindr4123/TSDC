import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given('I navigate to page Ghost 3.42.', () => {
  cy.fixture('ports').then((port) => {
    portVersion = port.v2
    cy.visit(`http://localhost:${portVersion}/ghost/#/signin`);
  });
  cy.screenshot(datetime + '-PageGhostV3/SignInPage');
  cy.wait(1000);
});

When("I enter Email Address", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#ember8").type(credentials.email, {force: true});
  });
  cy.screenshot(datetime + '-PageGhostV3/EnterYourEmail');
  cy.wait(1000);
});

When("I enter Password", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get(".password").type(credentials.password, {force: true});
  });
  cy.screenshot(datetime + '-PageGhostV3/EnterYourPassword');
  cy.wait(1000);
});

When("I click in Sign In button", () => {
  cy.get("#ember12").click();
  cy.screenshot(datetime + '-PageGhostV3/ClickSignInButton');
  cy.wait(1000);
});

Then("I should be redirected to the View Site", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/site`);
  cy.screenshot(datetime + '-PageGhostV3/ViewSite');
  cy.wait(1000);
});

When("I click in Pages view", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot(datetime + '-PageGhostV3/PageLink');
  cy.wait(1000);
});

Then("I should be redirected to the pages view", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/pages`);
  cy.screenshot(datetime + '-PageGhostV3/PagesPage1');
  cy.wait(1000);
});

When('I click the {string} button', () => {
  cy.get("section.view-actions a[href='#/editor/page/'], #ember404").click();
  cy.screenshot(datetime + '-PageGhostV3/NewPagesButton');
  cy.wait(1000);
});

Then("I should be redirected to the create new page", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/page`);
  cy.screenshot(datetime + '-PageGhostV3/NewPage1');
  cy.wait(1000);
});

When("I enter title page {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PageGhostV3/EnterTitlePage');
  cy.wait(1000);
});

When("I click the Page settings", () => {
  cy.get("button.post-settings").click();
  cy.screenshot(datetime + '-PageGhostV3/PageSettingsMenu');
  cy.wait(1000);
});

When("I click the Page settings again", () => {
  cy.get("button.post-settings").click();
  cy.screenshot(datetime + '-PageGhostV3/PageSettingsMenu');
  cy.wait(1000);
});

Then('The menu settings should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot(datetime + '-PageGhostV3/PageSettingsMenuVisible');
  cy.wait(1000);
});

When("I click in Preview Button", () => {
  cy.get("div.form-group a").click();
  cy.wait(1000);
  cy.screenshot(datetime + '-PageGhostV3/PreviewButton');
});

When("I click on the close settings", () => {
  cy.get("button.close").click();
  cy.screenshot(datetime + '-PageGhostV3/PageSettingsMenuAgain');
  cy.wait(1000);
});

Then("I should be redirected to the page view", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/page`);
  cy.screenshot(datetime + '-PageGhostV3/NewPageRedirected');
  cy.wait(1000);
});

When("I click in Pages", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot(datetime + '-PageGhostV3/PageLink2');
  cy.wait(1000);
});

When("I edit title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PageGhostV3/EnterTitlePage');
  cy.wait(1000);
});

When("I click in Publish", () => {
  cy.get('div[role="button"].gh-publishmenu-trigger').click();
  cy.screenshot(datetime + '-PageGhostV3/PublishButton');
  cy.wait(1000);
});

When("I click in Publish Button", () => {
  cy.get('button.gh-publishmenu-button').click()
  cy.screenshot(datetime + '-PageGhostV3/ContinuePublish');
  cy.wait(1000);
});

When("I click in Unpublish Button", () => {
  cy.get('button.gh-publishmenu-button').click()
  cy.screenshot(datetime + '-PageGhostV3/ContinuePublish');
  cy.wait(1000);
});

When("I click in Unpublish radio button", () => {
  cy.get('div.gh-publishmenu-radio-label').contains('Unpublished').parent().click();
  cy.screenshot(datetime + '-PageGhostV3/ContinuePublish');
  cy.wait(1000);
});

When("I click in Published Page", () => {
  cy.get('button.gh-publishmenu-button').click();
  cy.screenshot(datetime + '-PageGhostV3/PagePublished');
  cy.wait(1000);
});

When("I click in the Delete Page Button", () => {
  cy.get("button.settings-menu-delete-button").click();
  cy.screenshot(datetime + '-PageGhostV3/DeletePageButton');
  cy.wait(1000);
});

When("I click in the Delete Button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot(datetime + '-PageGhostV3/DeleteButton');
  cy.wait(1000);
});

Then("I should be redirected Pages", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/pages`);
  cy.screenshot(datetime + '-PageGhostV3/Pages');
  cy.wait(1000);
});