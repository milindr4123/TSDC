const { Given, When, Then } = require('@cucumber/cucumber');


Given('I am logged', async function() {
    let identificationElement = await this.driver.$('#identification');
    await identificationElement.setValue("br.garciam1@uniandes.edu.co");

    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue("0123456789");
 
    let element = await this.driver.$('#ember5');
    return await element.click();
})
Given('I navigate to members section', async function() {
    let membersElement = await this.driver.$("a[href='#/members/']");
    return await membersElement.click();
})
Given('I navigate to tags section', async function() {
    let membersElement = await this.driver.$("a[href='#/tags/']");
    return await membersElement.click();
})
Given('I navigate to internal tags section', async function() {
    let membersElement = await this.driver.$("a[href='#/tags/?type=internal']");
    return await membersElement.click();
})
Given('I click to create a tag', async function() {
    let newTagElement = await this.driver.$('a[href="#/tags/new/"]');
    return await newTagElement.click();
})
Given('I navigate to create a member', async function() {
    let newMemberElement = await this.driver.$('a[href="#/members/new/"]');
    return await newMemberElement.click();
})
Given('I fill just name field for public tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    return await newTagElement.setValue(this.newTagName);
})
Given('I fill just name field for internal tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    return await newTagElement.setValue("#" + this.newTagName);
})
When('I edit an internal tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    await newTagElement.setValue(this.newTagName);

    let colorElement = await this.driver.$('input[name="accent-color"]');
    await colorElement.setValue("0000FF");

    let slugElement = await this.driver.$('input[data-test-input="tag-slug"]');
    await slugElement.setValue(this.newTagName);

    let textAreaElement = await this.driver.$('textarea.gh-tag-details-textarea');
    await textAreaElement.setValue(this.newTagDescription);
})

When('I edit a public tag', async function() {
    let newTagElement = await this.driver.$('input#tag-name');
    await newTagElement.setValue("#" + this.newTagName);

    let colorElement = await this.driver.$('input[name="accent-color"]');
    await colorElement.setValue("0000FF");

    let slugElement = await this.driver.$('input[data-test-input="tag-slug"]');
    await slugElement.setValue("#" + this.newTagName);

    let textAreaElement = await this.driver.$('textarea.gh-tag-details-textarea');
    await textAreaElement.setValue(this.newTagDescription);
})
When('I select public tags section', async function() {
    let saveElement = await this.driver.$('button[data-test-tags-nav="public"]');
    return await saveElement.click();
})

When('I select {string} tags section', async function(tagSetting) {
    let saveElement = await this.driver.$('button[data-test-tags-nav="' + tagSetting + '"]');
    return await saveElement.click();
})
When('I click to save', async function() {
    let saveElement = await this.driver.$('section button[data-test-button="save"]');
    return await saveElement.click();
})
When('I fill just name and email member fields', async function() {
    let emailElement = await this.driver.$('#member-email');
    await emailElement.setValue( this.newMemberEmail);

    let userElement = await this.driver.$('#member-name');
    await userElement.setValue(this.newMemberName);

    let saveElement = await this.driver.$('section button[data-test-button="save"]');
    await saveElement.click();
})
When('I fill all member fields', async function() {
    let emailElement = await this.driver.$('#member-email');
    await emailElement.setValue( this.newMemberEmail);

    let userElement = await this.driver.$('#member-name');
    await userElement.setValue(this.newMemberName);

    let labelsElement = await this.driver.$('input[type="search"]');
    await labelsElement.setValue(this.newMemberLabel);
    let addLabelsElement = await this.driver.$('.ember-power-select-options li');
    await addLabelsElement.click();

    let noteElement = await this.driver.$('textarea.gh-member-details-textarea');
    await noteElement.setValue(this.newMemberLabel);

    let saveElement = await this.driver.$('section button[data-test-button="save"]');
    await saveElement.click();
})
When('I edit a member', async function() {
    let membersElement = await this.driver.$("p.gh-members-list-email");
    await membersElement.click();

    let emailElement = await this.driver.$('#member-email');
    await emailElement.setValue( this.newMemberEmail);

    let userElement = await this.driver.$('#member-name');
    await userElement.setValue(this.newMemberName);

    let labelsElement = await this.driver.$('input[type="search"]');
    await labelsElement.setValue(this.newMemberLabel);
    let addLabelsElement = await this.driver.$('.ember-power-select-options li');
    await addLabelsElement.click();

    let noteElement = await this.driver.$('textarea.gh-member-details-textarea');
    await noteElement.setValue(this.newMemberLabel);

    let saveElement = await this.driver.$('section button[data-test-button="save"]');
    await saveElement.click();
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
    let postSettingsElement = await this.driver.$(".gh-btn-action-icon svg");
    return await postSettingsElement.click();
})
When('I add a tag to post', async function() {
    let postSettingsElement = await this.driver.$("#tag-input");
    await postSettingsElement.click();

    let tagsFirstElement = await this.driver.$('li[data-option-index="0"]');
    await tagsFirstElement.click();

    let updateBtnElement = await this.driver.$('button[data-test-button="publish-save"]');
    await updateBtnElement.click();
})
When('I click to delete the tag', async function() {
    let deleteBtnElement = await this.driver.$('button[data-test-button="delete-tag"]');
    await deleteBtnElement.click();
})
When('I confirm to delete the tag', async function() {
    let confirmBtnElement = await this.driver.$('button[data-test-button="confirm"]');
    await confirmBtnElement.click();
})
When('I close delete tag modal', async function() {
    let closeBtnElement = await this.driver.$('button.close');
    await closeBtnElement.click();
})
When('I cancel to delete the tag', async function() {
    let confirmBtnElement = await this.driver.$('button[data-test-button="cancel"]');
    await confirmBtnElement.click();
})
Then('I go back to posts section', async function() {
    let membersElement = await this.driver.$("a[href='#/posts/']");
    return await membersElement.click();
})
Then('I check if user is saved', async function() {
    let membersElement = await this.driver.$("a[href='#/members/']");
    await membersElement.click();

    const elementCreated = await this.driver.$('.gh-members-list-name');
    return elementCreated.click()
})
Then('I select the first member', async function() {
    const memberElement = await this.driver.$('.gh-members-list-name');
    await memberElement.click()
})

Then('I click settings button', async function() {
    let settingsElement = await this.driver.$(".view-actions .gh-btn:not(.gh-btn-primary):not(.gh-btn-blue):not(.gh-btn-green):not(.gh-btn-link)");
    await settingsElement.click();
})
Then('I click to delete a member', async function() {
    let deleteElement = await this.driver.$("button span.red");
    await deleteElement.click();
})
Then('I click to confirm delete a member', async function() {
    let deleteElement = await this.driver.$('button[data-test-button="confirm"]');
    await deleteElement.click();
})
Then('I click to cancel delete a member', async function() {
    let deleteElement = await this.driver.$('button[data-test-button="cancel"]');
    await deleteElement.click();
})
Then('I click to close delete member modal', async function() {
    let deleteElement = await this.driver.$('.modal-content .close svg');
    await deleteElement.click();
})
Then('I click the first tag', async function() {
    let tagElement = await this.driver.$('.gh-list h3');
    await tagElement.click();
})

