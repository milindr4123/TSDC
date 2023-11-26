import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import {faker} from '@faker-js/faker'


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('TransitionAborted') || err.message.includes('TaskCancelation')) {
      return false;
  }
  
  return true;
});

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given('I navigate to Ghost', () => {
  cy.fixture('ports').then((port) => {
    portVersion = port.v5
    cy.visit(`http://localhost:${port.v5}/ghost//#/signin`);
  });
  cy.screenshot(datetime + '-PostGhostV5/SignInGhost');
});

When("I Enter Address Email", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#identification").type(credentials.email, {force: true})
  });
  cy.screenshot(datetime + '-PostGhostV5/EnterYourEmail');
  cy.wait(1000);
});

When("I Enter Password", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#password").type(credentials.password, {force: true})
  });
  cy.screenshot(datetime + '-PostGhostV5/EnterYourPassword');
  cy.wait(1000);
});

When("I Click in Sign In", () => {
  cy.get("#ember5").click();
  cy.screenshot(datetime + '-PostGhostV5/ClickSignInButton');
  cy.wait(1000);
});

Then("I should be redirected to Dashboard", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/dashboard`);
  cy.screenshot(datetime + '-PostGhostV5/DashboardPage');
  cy.wait(1000);
});

When("I click in Posts", () => {
  cy.get("a[href='#/posts/'][data-test-nav='posts']").click();
  cy.screenshot(datetime + '-PostGhostV5/PostsLink');
  cy.wait(1000);
});

Then("I should be redirected to the Posts", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/posts`);
  cy.screenshot(datetime + '-PostGhostV5/PostsPage');
  cy.wait(1000);
});

When('I Click the {string} Button', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
  cy.screenshot(datetime + '-PostGhostV5/NewPostsButton');
  cy.wait(1000);
});

Then("I should be redirected to the new post", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/post`);
  cy.screenshot(datetime + '-PostGhostV5/NewPostRedirect');
  cy.wait(1000);
});

When("I fill form dynamic data {string}", (post) => {
  cy.get("textarea.gh-editor-title").invoke('val', post);;
  cy.screenshot(datetime + '-PostGhostV5/EnterTitlePost');
  cy.wait(1000);
});

Then("The error message error {string}", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/post`);
  cy.screenshot(datetime + '-PostGhostV5/NewPostRedirect');
  cy.wait(1000);
});

When("I Enter Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PostGhostV5/EnterTitlePost');
  cy.wait(1000);
});


When("I Enter Title faker", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(30));
  cy.screenshot(datetime + '-PostGhostV5/EnterTitlePost');
  cy.wait(1000);
});


When("I Enter Title faker major 255", () => {
  cy.get("textarea.gh-editor-title").type(faker.lorem.sentence(256));
  cy.screenshot(datetime + '-PostGhostV5/EnterTitlePost');
  cy.wait(1000);
});

When("I click the Settings Button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot(datetime + '-PostGhostV5/SettingsButton');
  cy.wait(1000);
});

Then('The Settings Menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot(datetime + '-PostGhostV5/SettingsMenuVisible');
  cy.wait(1000);
});

When("I click again on the Settings Button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot(datetime + '-PostGhostV5/SettingsMenuAgain');
  cy.wait(1000);
});

When("I Click in Preview Button", () => {
  cy.get('button[data-test-button="publish-preview"]').click();
  cy.screenshot(datetime + '-PostGhostV5/PreviewButton');
  cy.wait(1000);
});

When("I Click in Editor Button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
  cy.screenshot(datetime + '-PostGhostV5/EditorButton');
  cy.wait(1000);
});

Then("I should be redirected to the Post", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/post`);
  cy.screenshot(datetime + '-PostGhostV5/PostsPage');
  cy.wait(1000);
});

When("I Click in Posts link again", () => {
  cy.get("a[href='#/posts/'].gh-editor-back-button").click();
  cy.screenshot(datetime + '-PostGhostV5/PostLinkAgain');
  cy.wait(1000);
});

When("I Enter Edit Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot(datetime + '-PostGhostV5/EnterTitlePage');
  cy.wait(1000);
});

When("I Click in Publish Button", () => {
  cy.get('section button[data-test-button="publish-flow"]').click();
  cy.screenshot(datetime + '-PostGhostV5/PublishButton');
  cy.wait(1000);
});

When("I Click in Continue, final review button", () => {
  cy.get('button[data-test-button="continue"]').click()
  cy.screenshot(datetime + '-PostGhostV5/ContinuePublish');
  cy.wait(1000);
});

When("I Click in Publish Post, right now button", () => {
  cy.get('button[data-test-button="confirm-publish"]').click();
  cy.screenshot(datetime + '-PostGhostV5/ConfirmPublish');
  cy.wait(1000);
});

When("I click in Published Post", () => {
  cy.get('div.gh-post-bookmark-content').click();
  cy.screenshot(datetime + '-PostGhostV5/PostPublished');
  cy.wait(1000);
});

Then("I should be redirected to the Published Post", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/post`);
  cy.screenshot(datetime + '-PostGhostV5/NewPostRedirected');
  cy.wait(1000);
});

When("I click in the Delete Post", () => {
  cy.get("button.gh-btn-outline").click();
  cy.screenshot(datetime + '-PostGhostV5/DeletePostButton');
  cy.wait(1000);
});

When("I Click in the Delete Button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot(datetime + '-PostGhostV5/DeleteButton');
  cy.wait(1000);
});

Then("I should be redirected", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/posts`);
  cy.screenshot(datetime + '-PostGhostV5/Posts');
  cy.wait(1000);
});

When("I Click in Back to Editor Link", () => {
  cy.get('button[data-test-button="back-to-editor"]').click();
  cy.screenshot(datetime + '-PostGhostV5/BackToEditor');
  cy.wait(1000);
});

When("I Click in Unpublish Button", () => {
  cy.get('section button[data-test-button="update-flow"]').click();
  cy.screenshot(datetime + '-PostGhostV5/UnpublishButton');
  cy.wait(1000);
});

When("I Click in Unpublish and revert to private draft Button", () => {
  cy.get('button[data-test-button="revert-to-draft"]').click();
  cy.screenshot(datetime + '-PostGhostV5/Unpublish');
  cy.wait(1000);
});