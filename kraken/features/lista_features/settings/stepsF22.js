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

When('I navigate to general settings', async function(){
    let element = await this.driver.$('a[data-test-nav="settings"]');
    return await element.click();
})

When('I click on edit from title & description', async function(){
    let element = await this.driver.$('div[data-testid="title-and-description"] button');
    return await element.click();
})

When('I fill just title field with empty data', async function(){
    let element = await this.driver.$$('div[data-testid="title-and-description"] input[type="text"]');
    return await element[0].setValue('');
})

When('I fill just description field with empty data', async function(){
    let element = await this.driver.$$('div[data-testid="title-and-description"] input[type="text"]');
    return await element[1].setValue('');
})

When('I click on save button', async function(){
    let element = await this.driver.$('div[data-testid="title-and-description"] button.font-bold');
    return await element.click();
})

Then('I check the title', async function(){
    let listElements = await this.driver.$$('div[data-testid="title-and-description"] div.flex.items-center.mt-1');
    listElements.forEach(async (element) => {
        let text = await element.getText();
        if(text == '') expect(text).to.equal('');
    })
})

Then('I check the description', async function(){
    let listElements = await this.driver.$$('div[data-testid="title-and-description"] div.flex.items-center.mt-1');
    listElements.forEach(async (element) => {
        let text = await element.getText();
        if(text == '') expect(text).to.equal('');
    })
})