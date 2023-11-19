import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to Ghost', () => {
  cy.visit("http://localhost:2368/ghost/#/signin");
  cy.screenshot('SignInGhost');
});

When("I Enter Address Email", () => {
  cy.get("#identification").type("j.corredore@uniandes.edu.co");
  cy.screenshot('EnterYourEmail');
  cy.wait(1000);
});

When("I Enter Password", () => {
  cy.get("#password").type("01234567890");
  cy.screenshot('EnterYourPassword');
  cy.wait(1000);
});

When("I Click in Sign In", () => {
  cy.get("#ember5").click();
  cy.screenshot('ClickSignInButton');
  cy.wait(2000);
});

Then("I should be redirected to Dashboard", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/dashboard");
  cy.screenshot('DashboardPage');
  cy.wait(5000);
});

When("I click in Posts", () => {
  cy.get("a[href='#/posts/'][data-test-nav='posts']").click();
  cy.screenshot('PostsLink');
  cy.wait(3000);
});

Then("I should be redirected to the Posts", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
  cy.screenshot('PostsPage');
  cy.wait(5000);
});

When('I Click the {string} Button', (linkText) => {
  cy.get('section.view-actions').contains(linkText).click();
  cy.screenshot('NewPostsButton');
  cy.wait(5000);
});

Then("I should be redirected to the new post", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/editor/post");
  cy.screenshot('NewPostRedirect');
  cy.wait(2000);
});

When("I Enter Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePost');
  cy.wait(1000);
});

When("I click the Settings Button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot('SettingsButton');
  cy.wait(2000);
});

Then('The Settings Menu should be opened', () => {
  cy.get('div.settings-menu-container').should('be.visible');
  cy.screenshot('SettingsMenuVisible');
  cy.wait(2000);
});

When("I click again on the Settings Button", () => {
  cy.get("button.settings-menu-toggle").click();
  cy.screenshot('SettingsMenuAgain');
  cy.wait(1000);
});

When("I Click in Preview Button", () => {
  cy.get('button[data-test-button="publish-preview"]').click();
  cy.screenshot('PreviewButton');
  cy.wait(5000);
});

When("I Click in Editor Button", () => {
  cy.get('.left').find('button.gh-editor-back-button').click()
  cy.screenshot('EditorButton');
  cy.wait(5000);
});

Then("I should be redirected to the Post", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/post");
  cy.screenshot('PostsPage');
  cy.wait(5000);
});

When("I Click in Posts link again", () => {
  cy.get("a[href='#/posts/'].gh-editor-back-button").click();
  cy.screenshot('PostLinkAgain');
  cy.wait(2000);
});

When("I Enter Edit Title {string}", (title) => {
  cy.get("textarea.gh-editor-title").type(title);
  cy.screenshot('EnterTitlePage');
  cy.wait(1000);
});

When("I Click in Publish Button", () => {
  cy.get('section button[data-test-button="publish-flow"]').click();
  cy.screenshot('PublishButton');
  cy.wait(5000);
});

When("I Click in Continue, final review button", () => {
  cy.get('button[data-test-button="continue"]').click()
  cy.screenshot('ContinuePublish');
  cy.wait(2000);
});

When("I Click in Publish Post, right now button", () => {
  cy.get('button[data-test-button="confirm-publish"]').click();
  cy.screenshot('ConfirmPublish');
  cy.wait(3000);
});

When("I click in Published Post", () => {
  cy.get('div.gh-post-bookmark-content').click();
  cy.screenshot('PostPublished');
  cy.wait(3000);
});

Then("I should be redirected to the Published Post", () => {
  cy.url().should("include", "http://localhost:2368/ghost/#/editor/post/");
  cy.screenshot('NewPostRedirected');
  cy.wait(2000);
});

When("I click in the Delete Post", () => {
  cy.get("button.gh-btn-outline").click();
  cy.screenshot('DeletePostButton');
  cy.wait(3000);
});

When("I Click in the Delete Button", () => {
  cy.get("button.gh-btn-red").click();
  cy.screenshot('DeleteButton');
  cy.wait(3000);
});

Then("I should be redirected", () => {
  cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
  cy.screenshot('Posts');
  cy.wait(2000);
});

When("I Click in Back to Editor Link", () => {
  cy.get('button[data-test-button="back-to-editor"]').click();
  cy.screenshot('BackToEditor');
  cy.wait(3000);
});

When("I Click in Unpublish Button", () => {
  cy.get('section button[data-test-button="update-flow"]').click();
  cy.screenshot('UnpublishButton');
  cy.wait(3000);
});

When("I Click in Unpublish and revert to private draft Button", () => {
  cy.get('button[data-test-button="revert-to-draft"]').click();
  cy.screenshot('Unpublish');
  cy.wait(3000);
});