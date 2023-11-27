import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import {faker} from '@faker-js/faker'


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TransitionAborted') || err.message.includes('TaskCancelation') || err.message.includes('NiceModal.Provider')) {
        return false;
    }
    
    return true;
});

let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given("I navigate to the Website", () => {
    cy.fixture('ports').then((port) => {
        portVersion = port.v5
        cy.visit(`http://localhost:${portVersion}/ghost/`);
    });
    cy.screenshot(datetime + '-OptionsGhostV5/SignInPage');
});

And("I entered email and password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input[name="identification"]').type(credentials.email, {force: true})
        cy.get('input[name="password"]').type(credentials.password, {force: true})
    });
    cy.screenshot(datetime + '-OptionsGhostV5/EmailAndPassword');
});

And("I click on login submit button", () => {
    cy.get('button[type="submit"]').click()
    cy.screenshot(datetime + '-OptionsGhostV5/LoginButton');
});

Given("I am logged", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/dashboard`);
    })
    cy.screenshot(datetime + '-OptionsGhostV5/DashboardPage');
});


When("I click on settings button", () => {
    cy.get('a[href="#/settings/"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-OptionsGhostV5/SettingsButton");

});



When("I click on integrations button", () => {
    cy.get('a[id="integrations"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-OptionsGhostV5/IntegrationsButton");

});


When("I click on slack integration button", () => {
    cy.get('div[class="group/list-item flex items-center justify-between hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950 border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800"]').then(div => {
        var slack = div.get(1);
        cy.wrap(slack).click();
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-OptionsGhostV5/ZapierIntegrationsButton");

});

When("I fill webhook url {string}", (webhook) => {
    cy.get('div[class="relative order-2 flex w-full items-center mt-1.5"]').find('input').then(inputs => {
        var inputText = inputs.get(0);
        cy.wrap(inputText).clear().type(webhook, {force: true});
        var inputText = inputs.get(1);
        cy.wrap(inputText).click();
        cy.wait(1000)
        cy.screenshot(datetime + "-OptionsGhostV5/FillSlackUrl");
    });
});


When("I click on Save & close button", () => {
    cy.contains('span', 'Save & close').click();
    cy.wait(1000)
    cy.screenshot(datetime + '-OptionsGhostV5/SaveAndCloseButton');
});

Then("I compare values {string}", (value) => {
    cy.get('div[class="relative order-2 flex w-full items-center mt-1.5"]').find('input').then(inputs => {
        var inputText = inputs.get(0);
        cy.wrap(inputText).should('have.value', value)
        cy.wait(1000)
        cy.screenshot(datetime + "-OptionsGhostV5/CompareText");
    });
});



When("I fill webhook url random method", () => {
    cy.get('div[class="relative order-2 flex w-full items-center mt-1.5"]').find('input').then(inputs => {
        var inputText = inputs.get(0);
        cy.wrap(inputText).clear().type(faker.lorem.sentence(2), {force: true});
        var inputText = inputs.get(1);
        cy.wrap(inputText).click();
        cy.wait(1000)
        cy.screenshot(datetime + "-OptionsGhostV5/FillSlackUrl");
    });
});

Then('The error message {string}', (error) => {
    cy.get('span[class="mt-1 inline-block text-xs text-red dark:text-red-500 order-3"]').invoke('text').should('contains', error);
    cy.screenshot(datetime + '-OptionsV5/PageErrorFillSlackUrl');
    cy.wait(5000);
  });