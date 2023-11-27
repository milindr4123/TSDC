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

When('I navigate to members section', async function(){
    let membersElement = await this.driver.$('a[href="#/members/"]');
    return await membersElement.click();
})

When('I navigate to create a member', async function(){
    let membersElement = await this.driver.$("a[data-test-new-member-button='true']");
    return await membersElement.click();
}) 

When('I click on save button', async function(){
    let saveButton = await this.driver.$('button[data-test-button="save"]');
    return await saveButton.click();
})  

Then('I check error from email', async function(){
    let errorResponse = await this.driver.$('.error p.response');
    let text = await errorResponse.getText()
    expect(text).to.equal('Please enter an email.');
})  