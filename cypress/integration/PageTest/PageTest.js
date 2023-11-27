import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {faker} from '@faker-js/faker'

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given('I navigate to page Ghost', () => {
  cy.fixture('ports').then((port) => {
    portVersion = port.v5
    cy.visit(`http://localhost:${portVersion}/ghost/`);
  });
  cy.screenshot(datetime + '-PageGhostV5/SignInPage');
});

When("I enter email", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#identification").type(credentials.email, {force: true});
  });
  cy.screenshot(datetime + '-PageGhostV5/EnterYourEmail');
  cy.wait(1000);
});

When("I enter password", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#password").type(credentials.password, {force: true});
  });
  cy.screenshot(datetime + '-PageGhostV5/EnterYourPassword');
  cy.wait(1000);
});

When("I click in Sign in button", () => {
  cy.get("#ember5").click({force: true});
  cy.screenshot(datetime + '-PageGhostV5/ClickSignInButton');
  cy.wait(2000);
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/dashboard`);
  cy.screenshot(datetime + '-PageGhostV5/DashboardPage');
  cy.wait(1000);
});

When("I click in Pages link", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot(datetime + '-PageGhostV5/PageLink');
  cy.wait(1000);
});

Then("I should be redirected to the pages", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/pages`);
  cy.screenshot(datetime + '-PageGhostV5/PagesPage1');
  cy.wait(1000);
});

When('I click the {string} link', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
  cy.screenshot(datetime + '-PageGhostV5/NewPagesButton');
  cy.wait(1000);
});

Then("I should be redirected to the new page", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/page`);
  cy.screenshot(datetime + '-PageGhostV5/NewPage1');
  cy.wait(1000);
});

When("I enter title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PageGhostV5/EnterTitlePage');
  cy.wait(5000);
});

When("I click the Page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot(datetime + '-PageGhostV5/PageSettingsMenu');
  cy.wait(1000);
});

Then('The settings menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot(datetime + '-PageGhostV5/PageSettingsMenuVisible');
  cy.wait(1000);
});

When("I click again on the page settings button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot(datetime + '-PageGhostV5/PageSettingsMenuAgain');
  cy.wait(3000);
});

When("I click in Preview button", () => {
  cy.get('button[data-test-button="publish-preview"]').click();
  cy.screenshot(datetime + '-PageGhostV5/PreviewButton');
  cy.wait(2000);
});

When("I click in Editor button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
  cy.screenshot(datetime + '-PageGhostV5/EditorButton');
  cy.wait(1000);
});

Then("I should be redirected to the page", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/page`);
  cy.screenshot(datetime + '-PageGhostV5/NewPageRedirected');
  cy.wait(1000);
});

When("I click in Pages link again", () => {
  cy.get("a[href='#/pages/']").click();
  cy.screenshot(datetime + '-PageGhostV5/PageLink2');
  cy.wait(1000);
});

When("I enter New title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PageGhostV5/EnterTitlePage');
  cy.wait(1000);
});

When("I click in Publish button", () => {
  cy.get('section button[data-test-button="publish-flow"]').click();
  cy.screenshot(datetime + '-PageGhostV5/PublishButton');
  cy.wait(3000);
});

When("I click in Continue, final review button", () => {
  cy.get('button[data-test-button="continue"]').click()
  cy.screenshot(datetime + '-PageGhostV5/ContinuePublish');
  cy.wait(1000);
});

When("I click in Publish page, right now button", () => {
  cy.get('button[data-test-button="confirm-publish"]').click();
  cy.screenshot(datetime + '-PageGhostV5/ConfirmPublish');
  cy.wait(1000);
});

When("I click in Published Page", () => {
  cy.get('div.gh-post-bookmark-image').click();
  cy.screenshot(datetime + '-PageGhostV5/PagePublished');
  cy.wait(1000);
});

Then("I should be redirected to the Published page", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/page`);
  cy.screenshot(datetime + '-PageGhostV5/NewPageRedirected');
  cy.wait(1000);
});

When("I click in the Delete page button", () => {
  cy.get("button.gh-btn-outline").click();
  cy.screenshot(datetime + '-PageGhostV5/DeletePageButton');
  cy.wait(1000);
});

When("I click in the Delete button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot(datetime + '-PageGhostV5/DeleteButton');
  cy.wait(1000);
});

Then("I should be redirected", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/pages`);
  cy.screenshot(datetime + '-PageGhostV5/Pages');
  cy.wait(1000);
});

When("I click in Back to Editor link", () => {
  cy.get('button[data-test-button="back-to-editor"]').click();
  cy.screenshot(datetime + '-PageGhostV5/BackToEditor');
  cy.wait(1000);
});

When("I click in Unpublish button", () => {
  cy.get('section button[data-test-button="update-flow"]').click();
  cy.screenshot(datetime + '-PageGhostV5/UnpublishButton');
  cy.wait(1000);
});

When("I click in Unpublish and revert to private draft button", () => {
  cy.get('button[data-test-button="revert-to-draft"]').click();
  cy.screenshot(datetime + '-PageGhostV5/Unpublish');
  cy.wait(1000);
});

When("I enter long title in Page", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(100));
  cy.screenshot(datetime + '-PageGhostV5/EnterLongTitlePage');
  cy.wait(1000);
});

Then("Preview button does not exist", () => {
  cy.get('button[data-test-button="publish-preview"]').should('not.exist');
  cy.screenshot(datetime + '-PageGhostV5/PreviewButtonNotExist');
  cy.wait(1000);
});

When("I enter short title in Page", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(1));
  cy.screenshot(datetime + '-PageGhostV5/EnterShortTitlePage');
  cy.wait(1000);
});

When("I edit title in Page", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(50));
  cy.screenshot(datetime + '-PageGhostV5/EnterLongTitlePage');
  cy.wait(3000);
});

Then("A validation message will be displayed", () => {
  cy.get('.gh-alert-content').invoke('text').should('contains', 'Validation failed: Title cannot be longer than 255 characters.');
  cy.screenshot(datetime + '-PageGhostV5/ValidationTitlePage');
  cy.wait(3000);
});

When("I enter title on New Page", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(5));
  cy.screenshot(datetime + '-PageGhostV5/EnterTitlePage');
  cy.wait(5000);
});

When("I insert an invalid publication date format", () => {
  cy.get('input[data-test-date-time-picker-date-input=""]').type(faker.lorem.sentence(5)); 
  cy.screenshot(datetime + '-PageGhostV5/InvalidDateFormat');
  cy.wait(2000);
});

When("I click on hour field", () => {
  cy.get('input[data-test-date-time-picker-time-input=""]').click();
  cy.screenshot(datetime + '-PageGhostV5/InvalidDateFormat');
  cy.wait(2000);
});

Then("A validation date format will be displayed", () => {
  cy.get('div[data-test-date-time-picker-error=""]').invoke('text').should('contains', 'Invalid date format, must be YYYY-MM-DD');
  cy.screenshot(datetime + '-PageGhostV5/ValidationPublicationDate');
  cy.wait(3000);
});

When("I insert an invalid publication hour", () => {
  cy.get('input[data-test-date-time-picker-time-input=""]').type(faker.number.int()); 
  cy.get('input[data-test-date-time-picker-date-input=""]').click();
  cy.screenshot(datetime + '-PageGhostV5/InvalidHour');
  cy.wait(2000);
});

Then("A validation hour format will be displayed", () => {
  cy.get('div.gh-date-time-picker-error').invoke('text').should('contains', 'Must be in format: "15:00"');
  cy.screenshot(datetime + '-PageGhostV5/ValidationPublicationHour');
  cy.wait(3000);
});

When("I delete author", () => {
  cy.get('span.ember-power-select-multiple-remove-btn').click();  
  cy.screenshot(datetime + '-PageGhostV5/InvalidAuthor');
  cy.wait(2000);
});

Then("The validation message {string} will be displayed", (message) => {
  cy.get('p[data-test-error="authors"]').invoke('text').should('contains', message);
  cy.screenshot(datetime + '-PageGhostV5/ValidationMessage');
  cy.wait(3000);
});

When("I Click in Meta data", () => {
  cy.get('button[data-test-button="meta-data"]').click();
  cy.screenshot(datetime + '-PageGhostV5/InvalidURLMetaData');
  cy.wait(2000);
});

When("I Enter invalid information in Canonical URL", () => {
  cy.request({
    method: "GET",
    url: "https://my.api.mockaroo.com/url.json?key=ba212b80",
  }).then((response) => {
  expect(response.status).to.eq(200);  
  const randomElement = Cypress._.sample(response.body);
  cy.get('input[name="post-setting-canonicalUrl"]').type(randomElement.url);
  cy.get('input[name="post-setting-meta-title"]').click();  
  });
});

Then("Validation message will be displayed", () => {
  cy.get('p.response').should('be.visible');
  cy.screenshot(datetime + '-PageGhostV5/ValidationURLPost');
  cy.wait(3000);
});

When("I Enter invalid information on Excerpt", () => {
  cy.get('textarea[name="post-setting-custom-excerpt"]').type(faker.lorem.sentence(50));
  cy.get('small[data-test-date-time-picker-timezone=""]').click();  
});