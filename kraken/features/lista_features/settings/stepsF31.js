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

When('I click on add custom integration', async function(){
    let element = await this.driver.$('div[data-testid="integrations"] button.text-green');
    return await element.click();
})

When('I click on add button', async function(){
    let element = await this.driver.$$('section[data-testid="add-integration-modal"] .undefined button');
    return await element[1].click();
})

Then('I check the error', async function(){
    let element = await this.driver.$('section[data-testid="add-integration-modal"] span.text-red');
    let text = await element.getText()
    return expect(text).to.equal('Please enter a name');
})