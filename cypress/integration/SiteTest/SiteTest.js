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
    cy.screenshot(datetime + '-ProfileGhostV5/SignInPage');
});

And("I entered email and password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input[name="identification"]').type(credentials.email, {force: true})
        cy.get('input[name="password"]').type(credentials.password, {force: true})
    });
    cy.screenshot(datetime + '-ProfileGhostV5/EmailAndPassword');
});

And("I click on login submit button", () => {
    cy.get('button[type="submit"]').click()
    cy.screenshot(datetime + '-ProfileGhostV5/LoginButton');
});

Given("I am logged", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/dashboard`);
    })
    cy.screenshot(datetime + '-ProfileGhostV5/DashboardPage');
});


When("I click in site", () => {
    cy.get('a[href="#/site/"]').click();
    cy.screenshot(datetime + '-SiteGhostV5/SiteLink');
    cy.wait(1000);
  });

When("I fill thoughts stories and a ideas {string}", (data) => {
        cy.get('form').find('input').then(inputs => {
        var inputText = inputs.get(0);
        cy.wrap(inputText).clear().type(data, {force: true});
        cy.screenshot(datetime + '-SiteGhostV5/SiteLink');
        cy.wait(1000);
    });
});

Then('The error message {string}', (error) => {
    cy.get('span[class="mt-1 inline-block text-xs text-red dark:text-red-500 order-3"]').invoke('text').should('contains', error);
    cy.screenshot(datetime + '-OptionsV5/PageErrorFillSlackUrl');
    cy.wait(5000);
  });

  When("I Click in Subscribe Button", () => {
    cy.get('div[data-testid="portal-trigger-button"]').click();
    cy.screenshot(datetime + '-SiteGhostV5/SubscribehButton');
    cy.wait(1000);
  });

  When("I click on settings button", () => {
    cy.get('a[href="#/settings/"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-OptionsGhostV5/SettingsButton");

});

When("I click on newsletters button", () => {
    cy.get('a[id="newsletters"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-SiteGhostV5/newsLetterButton");

});

When("I click add new newsletters button", () => {
    cy.get('span').contains('Add newsletter').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-SiteGhostV5/newsLetterButton");

});


When("I click on Save", () => {
    cy.once('uncaught:exception', () => false);
    cy.contains('span', 'Create').click();
    cy.wait(1000)
});


When("I fill create newsletter form with dynamic data {string}", (data) => {
    cy.get('textarea').type("prueba");
    cy.get('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]').invoke('val',data);
    cy.wait(1000)   
});


When("I fill create newsletter form {string}", (data) => {
    cy.get('textarea').type("prueba");
    cy.get('input[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]').type(data);
    cy.wait(1000)   
});


Then('The error message {string}', (error) => { 
    cy.get('span[class="mt-1 inline-block text-xs text-red dark:text-red-500 order-3"]').invoke('text').should('contains', error);
    cy.screenshot(datetime + '-SiteV5/PageErrorCreateNewsLetter');
    cy.wait(5000);
  });



  Then("I Validation show another page", () => {
    cy.get('div[class="absolute inset-0 m-5 flex items-center justify-center"]').should('be.visible');
    cy.screenshot(datetime + '-PostGhostV5/ValidationURLPost');
    cy.wait(3000);
  });
  

  
  