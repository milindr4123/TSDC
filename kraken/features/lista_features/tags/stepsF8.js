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

When('I edit just tag name field', async function (){
    let editTagElement = await this.driver.$('input#tag-name');
    await editTagElement.setValue('');
    return await editTagElement.setValue('Edit test apriori tag');
})

Then('I back to tags list', async function(){
    let tagsElement = await this.driver.$('a[data-test-link="tags-back"]');
    return await tagsElement.click();
})

Then('I check slug from tag', async function (){
    let slugElements = await this.driver.$$('span[title="test-apriori-tag"]');
    expect(slugElements.length).to.equal(1);
})

Then('I check name from tag', async function (){
    let nameElement = await this.driver.$('a[href="#/tags/test-apriori-tag/"] h3');
    expect(await nameElement.getText()).to.equal('Edit test apriori tag');
})
//Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
    
When('I navigate to the tag by slug', async function (){
    let slugElement = await this.driver.$('span[title="test-apriori-tag"]');
    return await slugElement.click();
})

When('I click on Delete tag button', async function (){
    let deleteElement = await this.driver.$('button[data-test-button="delete-tag"]');
    return await deleteElement.click();
})

When('I confirm to delete tag', async function (){
    let confirmElement = await this.driver.$('button[data-test-button="confirm"]');
    return await confirmElement.click();
})