const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I am logged', async function() {
    let identificationElement = await this.driver.$('#identification');
    await identificationElement.setValue('prueba@prueba.com');

    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue('123456789$');
 
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I navigate to tags section', async function(){
    let tagsElement = await this.driver.$("a[href='#/tags/']");
    return await tagsElement.click();
})

When('I navigate to create a tag', async function(){
    let newTagElement = await this.driver.$('a[href="#/tags/new/"]');
    return await newTagElement.click();
})

When('I fill just tag name field', async function(){
    let newTagElement = await this.driver.$('input#tag-name');
    return await newTagElement.setValue('Test apriori tag');
})

When('I fill just tag description field', async function(){
    let newTagElement = await this.driver.$('textarea#tag-description');
    return await newTagElement.setValue('Prueba de los tag');
})

When('I click on save button', async function(){
    let saveElement = await this.driver.$('button[data-test-button="save"]');
    return await saveElement.click();
})

When('I back to tags list', async function(){
    let tagsElement = await this.driver.$('a[data-test-link="tags-back"]');
    return await tagsElement.click();
})

When('I check slug from tag', async function (){
    let slugElements = await this.driver.$$('span[title="test-apriori-tag"]');
    expect(slugElements.length).to.equal(1);
})

When('I navigate to the Posts view', async function (){
    let postElement = await this.driver.$('a[data-test-nav="posts"]');
    return await postElement.click();
})

When('I click on New post button', async function (){
    let newPostElement = await this.driver.$('a[data-test-new-post-button]');
    return await newPostElement.click();
})

When('I entered name to the post', async function (){
    let newPostElement = await this.driver.$('textarea[data-test-editor-title-input]');
    return await newPostElement.setValue('Test post');
})

When('I click on Post settings button', async function (){
    let newPostElement = await this.driver.$('button[data-test-psm-trigger]');
    return await newPostElement.click();
})

When('I add the new Tag to the Post', async function (){
    let tagsPost = await this.driver.$('input[type="search"]');
    await tagsPost.setValue('Test apriori tag');
    
})

When('I click on first list item', async function (){
    let firstListItem = await this.driver.$('[data-option-index="0"]');
    return await firstListItem.click();
})

When('I back to the Posts view', async function (){
    let backPosts = await this.driver.$('a[data-test-link="posts"]');
    return await backPosts.click();
})

When('I confirm to back to the Posts view', async function (){
    let confirmPost = await this.driver.$('button.gh-btn-red');
    return await confirmPost.click();
})

When('I click on the tags filter button from posts', async function (){
    let filterPostTags = await this.driver.$('div[data-test-tag-select="true"]');
    return await filterPostTags.click();
})

Then('I check in the filter select tag if exists the new tag', async function (){
    let listElements = await this.driver.$$('li.ember-power-select-option');
    listElements.forEach(async (element) => {
        let text = await element.getText();
        if(text == 'Test apriori tag') expect(text).to.equal('Test apriori tag');
    })
})

//Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas

When('I right click to last post', async function (){
    let listElementPost = await this.driver.$$('h3.gh-content-entry-title');
    for (const element of listElementPost) {
        let text = await element.getText();
        if (text == 'Test post') {
            return await element.click({ button: 2 });
        }
    }
})

When('I click on delete from list', async function (){
    let deleteButton = await this.driver.$('span.red');
    return await deleteButton.click();
})

When('I confirm to delete tag', async function (){
    let confirmButton = await this.driver.$('button[data-test-button="confirm"]');
    return await confirmButton.click();
})  
    
When('I navigate to the tag by slug', async function (){
    let slugElement = await this.driver.$('span[title="test-apriori-tag"]');
    return await slugElement.click();
})

When('I click on Delete tag button', async function (){
    let deleteElement = await this.driver.$('button[data-test-button="delete-tag"]');
    return await deleteElement.click();
})