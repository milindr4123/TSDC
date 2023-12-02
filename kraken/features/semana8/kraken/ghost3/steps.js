const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

Given('I am logged with version 3', async function () {
    let identificationElement = await this.driver.$('input[name="identification"]');
    await identificationElement.setValue(this.email);

    let passwordElement = await this.driver.$('input[name="password"]');
    await passwordElement.setValue(this.oldPassword);

    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})
Given('I navigate to tags section', async function () {
    let membersElement = await this.driver.$("a[href='#/tags/']");
    return await membersElement.click();
})
Given('I navigate to internal tags section', async function () {
    let membersElement = await this.driver.$("a[href='#/tags/?type=internal']");
    return await membersElement.click();
})
Given('I click to create a tag', async function () {
    let newTagElement = await this.driver.$('a[href="#/tags/new/"]');
    return await newTagElement.click();
})
Given('I fill just name field for public tag', async function () {
    let newTagElement = await this.driver.$('input#tag-name');
    return await newTagElement.setValue(this.newTagName);
})
Given('I fill just name field for internal tag', async function () {
    let newTagElement = await this.driver.$('input#tag-name');
    return await newTagElement.setValue("#" + this.newTagName);
})
Then('I click the first tag', async function () {
    let tagElement = await this.driver.$('.gh-list h3');
    await tagElement.click();
})
When('I click to save', async function () {
    let saveElement = await this.driver.$('header section button');
    return await saveElement.click();
})
When('I select public tags section', async function() {
    let publicTagsElement = await this.driver.$$('section.view-actions button.gh-btn')[0];
    return await publicTagsElement.click();
})
When('I edit a public tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    await newTagElement.setValue("#" + this.newTagName);

    let colorElement = await this.driver.$('input[name="accent-color"]');
    await colorElement.setValue("0000FF");

    let slugElement = await this.driver.$('input[name="slug"]');
    await slugElement.setValue("#" + this.newTagName);

    let textAreaElement = await this.driver.$('textarea.gh-tag-details-textarea');
    await textAreaElement.setValue(this.newTagDescription);
})
When('I select internal tags section', async function() {
    let internalSectionElement = await this.driver.$$('section.view-actions button.gh-btn')[1];
    return await internalSectionElement.click();
})
When('I edit an internal tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    await newTagElement.setValue(this.newTagName);

    let colorElement = await this.driver.$('input[name="accent-color"]');
    await colorElement.setValue("0000FF");

    let slugElement = await this.driver.$('input[name="slug"]');
    await slugElement.setValue("#" + this.newTagName);

    let textAreaElement = await this.driver.$('textarea.gh-tag-details-textarea');
    await textAreaElement.setValue(this.newTagDescription);
})

When('I navigate to post section', async function() {
    let membersElement = await this.driver.$("a[href='#/posts/']");
    return await membersElement.click();
})
When('I select a post', async function() {
    let membersElement = await this.driver.$(".gh-posts-list-item");
    return await membersElement.click();
})
When('I click to open post settings', async function() {
    let postSettingsElement = await this.driver.$("button.post-settings");
    return await postSettingsElement.click();
})
When('I add a tag to post', async function() {
    let postSettingsElement = await this.driver.$("#tag-input");
    await postSettingsElement.click();

    let tagsFirstElement = await this.driver.$('li[data-option-index="0"]');
    await tagsFirstElement.click();

    let closeSettingsBtnElement = await this.driver.$('button.close');
    await closeSettingsBtnElement.click();
    await sleep(3000);

    let publishMenuBtnElement = await this.driver.$('section div[role="button"]');
    await publishMenuBtnElement.click();

    let updateBtnElement = await this.driver.$('button.gh-btn-blue span');
    await updateBtnElement.click();
})
Then('I go back to posts section', async function() {
    let membersElement = await this.driver.$("a[href='#/posts/']");
    return await membersElement.click();
})
When('I click to delete the tag', async function() {
    let deleteBtnElement = await this.driver.$('button.gh-btn-red');
    await deleteBtnElement.click();
})
When('I confirm to delete the tag', async function() {
    let confirmBtnElement = await this.driver.$('.modal-footer button.gh-btn-red');
    await confirmBtnElement.click();
})
When('I click user settings', async function() {
    let profileSettingsElement = await this.driver.$('div.gh-user-avatar.relative');
    await profileSettingsElement.click();
})
When('I click to go to profile', async function() {
    let profileSettingsElement = await this.driver.$$('li[role="presentation"]')[2];
    await profileSettingsElement.click();
    
})
When('I click to change password', async function() {
    let changePasswordElement = await this.driver.$('div.p-8.py-0 div.false button.cursor-pointer.bg-grey-100 span');
    await changePasswordElement.click();
})
When('I put my old password', async function() {
    let passwordsElement = await this.driver.$('#user-password-old');
    await passwordsElement.setValue(this.oldPassword);
})
When('I put my new password', async function() {
    let passwordsElement = await this.driver.$('#user-password-new');
    await passwordsElement.setValue(this.newPassword);
})
When('I confirm my new password', async function() {
    let passwordsElement = await this.driver.$('#user-new-password-verification');
    await passwordsElement.setValue(this.newPassword);
})
When('I click to accept change the password', async function() {
    let changePasswordElement = await this.driver.$('button.button-change-password span');
    await changePasswordElement.click();
})
When('I click to save and close', async function() {
    let changePasswordElement = await this.driver.$('div.p-8.py-6 div.flex.gap-3 button.cursor-pointer.bg-black span');
    await changePasswordElement.click();
})
When('I click in done button', async function() {
    let doneButtonElement = await this.driver.$('header button.gh-btn-blue');
    await doneButtonElement.click();
})
When('I click to logout', async function() {
    let doneButtonElement = await this.driver.$('a[href="#/signout/"]');
    await doneButtonElement.click();
})
Then('I login with new credentials', async function() {
    let identificationElement = await this.driver.$('input[name="identification"]');
    await identificationElement.setValue(this.email);

    let passwordElement = await this.driver.$('input[name="password"]');
    await passwordElement.setValue(this.newPassword);

    let element = await this.driver.$('button[type="submit"]');
    return await element.click();
})
Then('I invert passwords', async function() {
    let auxPassword = this.oldPassword
    this.oldPassword = this.newPassword
    this.newPassword = auxPassword
})
Given('I click in New Post link', async function () {
    let editor_post = await this.driver.$('a[href="#/editor/post/"]');
    await editor_post.click();
});
Given('I click the Post settings button', async function () {
    let element  = await this.driver.$('button.post-settings');
    await element.click();
});
When('I Fill Post', async function () {
    let element  = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await element.setValue("Prueba");
    await element.click();
});
When('I come back to post section', async function () {
    let element  = await this.driver.$('button.close');
    await element.click();
    let membersElement = await this.driver.$("a[href='#/posts/']");
    return await membersElement.click();
});
When('I close settings', async function () {
    let element  = await this.driver.$('button.close');
    await element.click();
    let membersElement = await this.driver.$("a[href='#/posts/']");
    return await membersElement.click();
});
When('I Edit a Post {kraken-string}', async function (message) {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await element.setValue(message);
});
When('I enter Post URL {kraken-string}', async function (url) {
    let element = await this.driver.$('#url');
    await element.setValue(url);
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }