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

When('I fill just name field', async function(){
    let memberName = await this.driver.$('input[data-test-input="member-name"]');
    return await memberName.setValue('Delete member test');
}) 

When('I fill just email field', async function(){
    let memberEmail = await this.driver.$('input[data-test-input="member-email"]');
    return await memberEmail.setValue('deletemembertest@prueba.com');
}) 

When('I click on save button', async function(){
    let saveButton = await this.driver.$('button[data-test-button="save"]');
    return await saveButton.click();
})  

When('I back to members list', async function(){
    let membersButton = await this.driver.$('a[data-test-link="members-back"]');
    return await membersButton.click();
})  

When('I check the name from member list', async function(){
    let listElements = await this.driver.$$('h3.gh-members-list-name');
    listElements.forEach(async (element) => {
        let text = await element.getText();
        if(text == 'Delete member test') expect(text).to.equal('Delete member test');
    })
})  

When('I check the email from member list', async function(){
    let listElements = await this.driver.$$('p.gh-members-list-email');
    listElements.forEach(async (element) => {
        let text = await element.getText();
        if(text == 'deletemembertest@prueba.com') expect(text).to.equal('deletemembertest@prueba.com');
    })
})  

When('I navigate to the member by email', async function(){
    let listElementPost = await this.driver.$$('p.gh-members-list-email');
    for (const element of listElementPost) {
        let text = await element.getText();
        if (text == 'deletemembertest@prueba.com') {
            return await element.click();
        }
    }
}) 

When('I click on member settings', async function(){
    let memberActions = await this.driver.$('button[data-test-button="member-actions"]');
    return await memberActions.click();
}) 

Then('I click on Delete member button', async function(){
    let memberDelete = await this.driver.$('button[data-test-button="delete-member"]');
    return await memberDelete.click();
}) 

Then('I confirm to delete member', async function(){
    let confirmElement = await this.driver.$('button[data-test-button="confirm"]');
    return await confirmElement.click();
})