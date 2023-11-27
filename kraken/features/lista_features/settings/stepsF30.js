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

When('I click on add recommendation', async function(){
    let element = await this.driver.$('div[data-testid="recommendations"] button');
    return await element.click();
})

When('I fill URL field', async function(){
    let element = await this.driver.$('section[data-testid="add-recommendation-modal"] input[type="text"]');
    return await element.setValue('facebook.com');
})

When('I click on next button', async function(){
    let element = await this.driver.$$('section[data-testid="add-recommendation-modal"] .undefined button');
    return await element[1].click();
})

When('I empty the title field', async function(){
    let element = await this.driver.$$('section[data-testid="add-recommendation-modal"] input[type="text"]')
    return await element[0].setValue('');
})

When('I click on add button', async function(){
    let element = await this.driver.$$('section[data-testid="add-recommendation-modal"] .undefined button');
    return await element[1].click();
})

Then('I click on list item', async function(){
    let listElementPost = await this.driver.$$('tr[data-testid="recommendation-list-item"] span.line-clamp-1');
    for (const element of listElementPost) {
        let text = await element.getText();
        if (text.includes('Facebook')) {
            return await element.click();
        }
    }
})

Then('I click on delete button', async function(){
    let element = await this.driver.$('section[data-testid="edit-recommendation-modal"] button.text-red');
    return await element.click();
})

Then('I click on confirm delete button', async function(){
    let element = await this.driver.$('section[data-testid="confirmation-modal"] button.bg-black');
    return await element.click();
})