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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }