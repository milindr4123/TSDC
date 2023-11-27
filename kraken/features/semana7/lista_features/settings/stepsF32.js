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

When('I fill name field', async function(){
    let element = await this.driver.$('section[data-testid="add-integration-modal"] input');
    return await element.setValue('Test integration');
})

When('I click on add button', async function(){
    let element = await this.driver.$$('section[data-testid="add-integration-modal"] .undefined button');
    return await element[1].click();
})

When('I click on save and close', async function(){
    let element = await this.driver.$$('section[data-testid="custom-integration-modal"] .undefined button');
    return await element[1].click();
})

Then('I check the name on the list', async function(){
    let element = await this.driver.$$('div[data-testid="integrations"] div.block div.border-b');
    return expect(element.length > 0).to.equal(true);
})