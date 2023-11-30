import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import {faker} from '@faker-js/faker'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('TransitionAborted') || err.message.includes('TaskCancelation')) {
      return false;
  }  
  return true;
});

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given('I navigate to Ghost V3', () => {
  cy.fixture('ports').then((port) => {
    portVersion = port.v2
    cy.visit(`http://localhost:${portVersion}/ghost//#/signin`);
  });
   cy.screenshot(datetime + '-PostGhostV3/SignInGhost');
});

When("I Enter Address Email Login", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get("#ember8").type(credentials.email, {force: true});
  });
   cy.screenshot(datetime + '-PostGhostV3/EnterYourEmail');
  cy.wait(1000);
});

Then("I should notificate publish", () => {
  cy.get('span[class="gh-notification-title"]').should('exist');
  cy.screenshot(datetime + '-PageGhostV5/PreviewButtonNotExist');
  cy.wait(1000);
});

When("I click publish button", () => {
  cy.contains('span', 'Publish').click();
   cy.screenshot(datetime + '-PostGhostV3/ClickSignInButton');
  cy.wait(1000);
});

When("I Enter Password Login", () => {
  cy.fixture('credentials').then((credentials) => {
    cy.get(".password").type(credentials.password, {force: true});
  });
   cy.screenshot(datetime + '-PostGhostV3/EnterYourPassword');
  cy.wait(1000);
});

When("I Click in Sign In button", () => {
  cy.get("#ember12").click();
   cy.screenshot(datetime + '-PostGhostV3/ClickSignInButton');
  cy.wait(1000);
});

When("I click in any screen post", () => {
  cy.get("div[class='gh-koenig-editor-pane flex flex-column mih-100']").click();
   cy.screenshot(datetime + '-PostGhostV3/ClickSignInButton');
  cy.wait(1000);
});


Then("I Should be redirected to Dashboard", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/site`);
   cy.screenshot(datetime + '-PostGhostV3/DashboardPage');
  cy.wait(1000);
});

When("I click in Posts", () => {
  cy.get("a[href='#/posts/']").click({ multiple: true, force: true});
   cy.screenshot(datetime + '-PostGhostV3/PostsLink');
  cy.wait(1000);
});

Then("I should be redirected to the Posts", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/posts`);
   cy.screenshot(datetime + '-PostGhostV3/PostsPage');
  cy.wait(1000);
});

When('I Click the {string} Button', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
   cy.screenshot(datetime + '-PostGhostV3/NewPostsButton');
  cy.wait(1000);
});

Then("I should be redirected to the new post", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/post`);
   cy.screenshot(datetime + '-PostGhostV3/NewPostRedirect');
  cy.wait(1000);
});

Then("The error message error {string}", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/editor/post`);
   cy.screenshot(datetime + '-PostGhostV3/NewPostRedirect');
  cy.wait(1000);
});

When("I Enter Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
   cy.screenshot(datetime + '-PostGhostV3/EnterTitlePost');
  cy.wait(1000);
});

When("I click the Settings Button", () => {
  cy.get("button.post-settings").click();
   cy.screenshot(datetime + '-PostGhostV3/SettingsButton');
  cy.wait(1000);
});

Then('The Settings Menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
   cy.screenshot(datetime + '-PostGhostV3/SettingsMenuVisible');
  cy.wait(1000);
});

When("I Click in Preview Button", () => {
  cy.get("div.form-group a").click({ force: true});
   cy.screenshot(datetime + '-PostGhostV3/PreviewButton');
  cy.wait(1000);
});

When("I click delete button", () => {
  cy.contains('span', 'Delete post').click({ force: true});
   cy.screenshot(datetime + '-PostGhostV3/PreviewButton');
  cy.wait(1000);
});

Then("I close notificate publish", () => {
  cy.get("button[class='gh-notification-close']").click({ force: true});
   cy.screenshot(datetime + '-PostGhostV3/PreviewButton');
  cy.wait(1000);
});

When("I click on the Close settings", () => {
  cy.get("button.close").click({ force: true});
   cy.screenshot(datetime + '-PageGhostV3/PostSettingsMenuAgain');
  cy.wait(1000);
});

When("I Click in Preview Button", () => {
  cy.get("div.form-group a").click({ force: true});
   cy.screenshot(datetime + '-PostGhostV3/PreviewButton');
  cy.wait(1000);
});

When("I Click in Editor Button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
   cy.screenshot(datetime + '-PostGhostV3/EditorButton');
  cy.wait(1000);
});

Then("I should be redirected to the Post", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/post`);
   cy.screenshot(datetime + '-PostGhostV3/PostsPage');
  cy.wait(1000);
});

When("I Click in Posts link again", () => {
  cy.get("a[href='#/posts/'].gh-editor-back-button").click();
   cy.screenshot(datetime + '-PostGhostV3/PostLinkAgain');
  cy.wait(1000);
});

When("I Enter Edit Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
   cy.screenshot(datetime + '-PostGhostV3/EnterTitlePage');
  cy.wait(1000);
});

When("I Click in Publish Button", () => {
  cy.get('section button[data-test-button="publish-flow"]').click();
   cy.screenshot(datetime + '-PostGhostV3/PublishButton');
  cy.wait(1000);
});

When("I Click in Continue, final review button", () => {
  cy.get('button[data-test-button="continue"]').click()
   cy.screenshot(datetime + '-PostGhostV3/ContinuePublish');
  cy.wait(1000);
});

When("I Click in Publish Post, right now button", () => {
  cy.get('button[data-test-button="confirm-publish"]').click();
   cy.screenshot(datetime + '-PostGhostV3/ConfirmPublish');
  cy.wait(1000);
});

When("I click in Published Post", () => {
  cy.get('div.gh-post-bookmark-content').click();
   cy.screenshot(datetime + '-PostGhostV3/PostPublished');
  cy.wait(1000);
});

Then("I should be redirected to the Published Post", () => {
  cy.url().should("include", `http://localhost:${portVersion}/ghost/#/editor/post`);
   cy.screenshot(datetime + '-PostGhostV3/NewPostRedirected');
  cy.wait(1000);
});

When("I click in the Delete Post", () => {
  cy.get("button.gh-btn-outline").click();
   cy.screenshot(datetime + '-PostGhostV3/DeletePostButton');
  cy.wait(1000);
});

When("I Click in the Delete Button", () => {
  cy.get("button.gh-btn-red").click();
   cy.screenshot(datetime + '-PostGhostV3/DeleteButton');
  cy.wait(1000);
});

Then("I should be redirected", () => {
  cy.url().should("eq", `http://localhost:${portVersion}/ghost/#/posts`);
   cy.screenshot(datetime + '-PostGhostV3/Posts');
  cy.wait(1000);
});

When("I Click in Back to Editor Link", () => {
  cy.get('button[data-test-button="back-to-editor"]').click();
   cy.screenshot(datetime + '-PostGhostV3/BackToEditor');
  cy.wait(1000);
});

When("I Click in Unpublish Button", () => {
  cy.get('section button[data-test-button="update-flow"]').click();
   cy.screenshot(datetime + '-PostGhostV3/UnpublishButton');
  cy.wait(1000);
});

When("I Click in Unpublish and revert to private draft Button", () => {
  cy.get('button[data-test-button="revert-to-draft"]').click();
   cy.screenshot(datetime + '-PostGhostV3/Unpublish');
  cy.wait(1000);
});