const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const faker = require('faker');

Given('I am logged', async function() {
    let identificationElement = await this.driver.$('#identification');
    await identificationElement.setValue(this.email);

    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(this.oldPassword);
 
    let element = await this.driver.$('#ember5');
    return await element.click();
})
Given('I am logged random', async function() {
    let identificationElement = await this.driver.$('#identification');
    

    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(this.oldPassword);
 
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

Given('I navigate to post {string}', async function (postURL) {
    await this.driver.url(postURL);
});

Given('I click in Post link', async function () {
    let element = await this.driver.$('a[href="#/posts/"]');
    waitForElement(element)
    await element.click();
});

Given('I click in New Post link', async function () {
    let editor_post = await this.driver.$('a[href="#/editor/post/"]');
    waitForElement(editor_post)
    await editor_post.click();
});

Given('I click the Post settings button', async function () {
    let element  = await this.driver.$('button.settings-menu-toggle');
    waitForElement(element)
    await element.click();
});

When("I click the Page settings button", () => {
    cy.get("button.settings-menu-toggle").click();
    cy.wait(2000);
  });

When('I enter Page URL "New Page in GHOST"', () => {
    cy.get("#url").type("New Page in GHOST");
    cy.wait(2000);
  })

When('I enter Post URL {kraken-string}', async function (url) {
    let element = await this.driver.$('#url');
    waitForElement(element)
    await element.setValue(url);
});

When('I click in Preview button', async function () {
    let element  = await this.driver.$('button[data-test-button="publish-preview"]');
    await element.click();
});

When("I click in Editor button", () => {
    cy.get('.left').find('button.gh-editor-back-button').click()
    cy.wait(5000);
});

When("I click in Publish return back button", async function () {
    let element  = await this.driver.$('button[class="gh-btn-editor gh-publish-back-button"]');
    await element.click();
});


Given('I check Post Saved', async function () {
    let element = await this.driver.$('a.ember-view.permalink.gh-list-data.gh-post-list-button');    
    waitForElement(element)
    await element.click();       
});

When('I Fill Post', async function () {
    let element  = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    waitForElement(element)
    await element.setValue("Prueba");
    await element.click();
});

When('I Fill Post {kraken-string}', async function (msg) {
    let element  = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    waitForElement(element)
    await element.setValue("Prueba");
    await element.click();
});

When('I click in Publish button', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    await element.click();
});


When("I click in Continue, final review button", async function () {
    let element  = await this.driver.$('button[data-test-button="continue"]');
    await element.click();
  });

When("I click in Publish page, right now button", async function () {
    let element  = await this.driver.$('button[data-test-button="confirm-publish"]');
    await element.click();
});	

When("I enter title {kraken-string}", async function (msg) {
    let element  = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    waitForElement(element)
    await element.setValue(msg);
  });

When('I Edit a Post {kraken-string}', async function (message) {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    waitForElement(element)
    await element.click();
    await element.setValue(message);
});

When('I Publish Post', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    waitForElement(element)
    await element.click();
    let element2 = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
    waitForElement(element2)
    await element2.click();
    let element3 = await this.driver.$('button[data-test-button="confirm-publish"]');
    waitForElement(element3)    
    await element3.click();
});

When('I Unpublish Post', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]');
    waitForElement(element)    
    await element.click();
    let element1 = await this.driver.$('button[class="gh-revert-to-draft"]');
    waitForElement(element1)
    await element1.click();   
});


('I return Back From Unpublish Post', async function () {
    let element3 = await this.driver.$("a[href='#/posts/?type=published']");
    waitForElement(element3)
    await element3.click();
});


When('I navigate to section page', async function () {
    let page = await this.driver.$('a[@href="#/pages/"]');
    waitForElement(page)    
    await page.click();
});

When('I select a page', async function() {
    let membersElement = await this.driver.$(".gh-posts-list-item");
    return await membersElement.click();
})

When('I create a page', async function () {
    let page = await this.driver.$('a[@href="#/editor/page/"]');
    waitForElement(page)    
    await page.click();
});


When('I remove Post', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    waitForElement(element);
    await element.click();
    let deleteElement = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    waitForElement(element)
    await deleteElement.click();
    
});


When('I click user settings', async function() {
    let profileSettingsElement = await this.driver.$('div.gh-user-avatar.relative');
    await profileSettingsElement.click();
})
When('I click to go to profile', async function() {
    let profileSettingsElement = await this.driver.$('a[data-test-nav="user-profile"]');
    await profileSettingsElement.click();
})
When('I click to change password', async function() {
    let changePasswordElement = await this.driver.$('div.p-8.py-0 div.false button.cursor-pointer.bg-grey-100 span');
    await changePasswordElement.click();
})
When('I put my old password', async function() {
    let passwordsElement = await this.driver.$$('div.p-8.py-0 div.false div.relative.flex-col.gap-6 div.relative.order-2 input[type="password"]');
    var oldPasswordElement = passwordsElement[0]
    await oldPasswordElement.setValue(this.oldPassword);
})
When('I put my new password', async function() {
    let passwordsElement = await this.driver.$$('div.p-8.py-0 div.false div.relative.flex-col.gap-6 div.relative.order-2 input[type="password"]');
    var oldPasswordElement = passwordsElement[1]
    await oldPasswordElement.setValue(this.newPassword);
})
When('I confirm my new password', async function() {
    let passwordsElement = await this.driver.$$('div.p-8.py-0 div.false div.relative.flex-col.gap-6 div.relative.order-2 input[type="password"]');
    var oldPasswordElement = passwordsElement[2]
    await oldPasswordElement.setValue(this.newPassword);
})
When('I click to accept change the password', async function() {
    let changePasswordElement = await this.driver.$('div.p-8.py-0 div.false button.cursor-pointer.bg-red span');
    await changePasswordElement.click();
})
When('I click to save and close', async function() {
    let changePasswordElement = await this.driver.$('div.p-8.py-6 div.flex.gap-3 button.cursor-pointer.bg-black span');
    await changePasswordElement.click();
})
When('I click in done button', async function() {
    let doneButtonElement = await this.driver.$('button[data-testid="exit-settings"]');
    await doneButtonElement.click();
})
When('I click to logout', async function() {
    let doneButtonElement = await this.driver.$('a[href="#/signout/"]');
    await doneButtonElement.click();
})
When('I assign tag to post', async function() {
    let membersElement = await this.driver.$("#tag-input");
    await membersElement.click();
    let elements = await this.driver.$$(".ember-power-select-option");
    var element = elements[0]
    await element.click();
})
Then('I login with new credentials', async function() {
    let identificationElement = await this.driver.$('#identification');
    await identificationElement.setValue(this.email);

    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(this.newPassword);
 
    let element = await this.driver.$('#ember5');
    return await element.click();
})
Then('I invert passwords', async function() {
    let auxPassword = this.oldPassword
    this.oldPassword = this.newPassword
    this.newPassword = auxPassword
})

Then('I check posts published', async function() {
    let element1 = await this.driver.$('a[title="Published"]');
    await element1.click();
})



  async function waitForElement(element) {
    await element.waitForExist({ timeout: 20000 });
    await element.waitForDisplayed({ timeout: 20000 });    
    await element.waitForClickable({ timeout: 20000 }); 
  }

// WEEK 7
// Scenary 1
When('I put a random string in profile name', async function() {
    let nameElement = await this.driver.$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    await nameElement.setValue(this.newMemberName)
})
When('I click in somewhere profile place', async function() {
    let element = await this.driver.$('h4');
    await element.click();
})
Then('I see the new name', async function() {
    let element = await this.driver.$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    waitForElement(element)
    let elementText = await element.getValue();
    assert.isTrue(elementText.includes(this.newMemberName))
})
// Scenary 2
When('I put a big string in profile name', async function() {
    let nameElement = await this.driver.$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    await nameElement.setValue(this.bigString)
    await this.driver.pause(5000);
    waitForElement(nameElement)

})
Then('I see a too long error name', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Name is too long","Unexpected error message")
})
// Scenary 3
When('I put a random string in location name', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let locationElement = inputElements[3]
    locationElement.setValue(this.newMemberName)
    await this.driver.pause(5000);
    waitForElement(locationElement)

})
Then('I see the new location name', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let locationElement = inputElements[3]
    let elementText = await locationElement.getValue();
    assert.isTrue(elementText.includes(this.newMemberName))
})
// Scenary 4
When('I put a big string in location name', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let locationElement = inputElements[3]
    locationElement.setValue(this.bigString)
    await this.driver.pause(5000);
    waitForElement(locationElement)
})
Then('I see a too long location error name', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Location is too long","Unexpected error message")
})
// Scenary 5
When('I put an invalid email in email input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let emailElement = inputElements[1]
    let element = await this.driver.$('h4');
    await emailElement.setValue(this.newMemberEmail)
    await element.click();
    await this.driver.pause(5000);
    
})
Then('I see an invalid email error', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Please enter a valid email address","Unexpected error message")
})
// Scenary 6
When('I put a big email in email input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let emailElement = inputElements[1]
    let element = await this.driver.$('h4');
    let longName = '';

    while (longName.length <= 200) {
        longName += faker.random.word();
    }
    await this.driver.pause(3000);
    await emailElement.setValue(longName)
    await element.click();  
})
// Scenary 7
When('I put an invalid website in website input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let emailElement = inputElements[4]
    let element = await this.driver.$('h4');

    await this.driver.pause(3000);
    await emailElement.setValue(this.bigString)
    await element.click();  
})
Then('I see an url error', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Please enter a valid URL","Unexpected error message")
})
// Scenary 8
When('I put a big website in website input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[4]
    let element = await this.driver.$('h4');
    let longName = '';

    while (longName.length <= 500) {
        longName += faker.random.word();
    }
    await this.driver.pause(8000);
    await websiteElement.setValue("www."+longName+".com")
    await this.driver.pause(1000);
    await element.click();  
})
// Scenary 9
When('I a put a website in website profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[4]
    websiteElement.setValue(this.randomUrl)
    waitForElement(websiteElement)

})
Then('I see the new website url', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[4]
    let elementText = await websiteElement.getValue();
    assert.isTrue(elementText.includes(this.randomUrl))
})
// Scenary 10
When('I a put a slug', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[2]
    websiteElement.setValue(this.newMemberName)
    waitForElement(websiteElement)

})
Then('I see the new slug', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[2]
    let elementText = await websiteElement.getValue();
    waitForElement(websiteElement)
    waitForElement(elementText)
    assert.isTrue(elementText.includes(this.newMemberName))
})
// Scenary 11
When('I a put a facebook profile in facebook profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[5]
    websiteElement.setValue(this.newMemberName)
    waitForElement(websiteElement)

})
Then('I see the new facebook url', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[5]
    let elementText = await websiteElement.getValue();
    waitForElement(websiteElement)
    waitForElement(elementText)
    assert.isTrue(elementText.includes(this.newMemberName))
})
// Scenary 12
When('I a put a big facebook profile in facebook profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[5]
    let element = await this.driver.$('h4');
    let longName = '';

    while (longName.length <= 2500) {
        longName += faker.random.word();
    }
    await websiteElement.setValue(longName)
    await this.driver.pause(5000);
    waitForElement(element)
    await element.click()
    waitForElement(websiteElement)
    await this.driver.pause(1000);
})
Then('I see a facebook profile error', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "The URL must be in a format like https://www.facebook.com/yourPage","Unexpected error message")
})
// Scenary 13
When('I a put an invalid facebook profile in facebook profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[5]
    let element = await this.driver.$('h4');

    await websiteElement.setValue(this.bigString)
    await element.click()
})
// Scenary 14
When('I put an invalid twitter profile in twitter profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[6]
    let element = await this.driver.$('h4');

    await websiteElement.setValue(this.bigString)
    await element.click()
})
Then('I see a twitter profile error', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Your Username is not a valid Twitter Username","Unexpected error message")
})
// Scenary 15
When('I put a big twitter user profile in twitter profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[6]
    let element = await this.driver.$('h4');
    let longName = '';

    while (longName.length <= 2500) {
        longName += faker.random.word();
    }
    await websiteElement.setValue(longName)
    await this.driver.pause(5000);
    waitForElement(element)
    await element.click()
    waitForElement(websiteElement)
    await this.driver.pause(1000);
})
// Scenary 16
When('I put a twitter profile in twitter profile input', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[6]
    websiteElement.setValue(this.newMemberName)
    waitForElement(websiteElement)

})
Then('I see the new twitter url', async function() {
    let inputElements = await this.driver.$$('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    let websiteElement = inputElements[6]
    let elementText = await websiteElement.getValue();
    waitForElement(websiteElement)
    waitForElement(elementText)
    assert.isTrue(elementText.includes(this.newMemberName))
})
// Scenary 17 
When('I put a bio in bio profile input', async function() {
    let bioElement = await this.driver.$('textarea');
    bioElement.setValue(this.newMemberNote)
    waitForElement(bioElement)

})
Then('I see the new bio url', async function() {
    let bioElement = await this.driver.$('textarea');
    let elementText = await bioElement.getValue();
    waitForElement(elementText)
    assert.isTrue(elementText.includes(this.newMemberNote))
})
// Scenary 18
When('I put a big bio in bio profile input', async function() {
    let bioElement = await this.driver.$('textarea');
    let element = await this.driver.$('h4');
    let longName = '';

    while (longName.length <= 200) {
        longName += faker.random.word();
    }
    
    await bioElement.setValue(longName)
    waitForElement(bioElement)
    await element.click()
    waitForElement(element)
    await this.driver.pause(1000);
})
Then('I see a bio profile error', async function() {
    let element = await this.driver.$('span.text-red');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "Bio is too long","Unexpected error message")
})
// Scenary 19
When('I put an empty bio in bio profile input', async function() {
    let bioElement = await this.driver.$('textarea');
    let changePasswordElement = await this.driver.$('div.p-8.py-6 div.flex.gap-3 button.cursor-pointer.bg-black span');
    await bioElement.clearValue()
    waitForElement(bioElement)
    await changePasswordElement.click();
})
Then('I see an empty bio profile', async function() {
    let element = await this.driver.$('textarea');
    let elementText = await element.getText();
    assert.strictEqual(elementText, "","Unexpected error message")
})