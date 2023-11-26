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

When("I click on avatar icon", () => {
    cy.get('.gh-user-avatar').click()
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/AvatarIcon');
});

And("I click on Your profile", () => {
    cy.get('[data-test-nav="user-profile"]').click()
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/ProfileView');
});

And("I click on Change password button", () => {
    cy.contains('span', 'Change password').click();
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/ChangePasswordButton');
});

And("I click on Save & close button", () => {
    cy.contains('span', 'Save & close').click();
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/SaveAndCloseButton');
});

And("I entered old password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            cy.wrap(inputText).type(credentials.password, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeOldPassword');
});

And("I entered invalid old password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            cy.wrap(inputText).type(credentials.invalidPassword, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeOldPassword');
});

And("I entered incorrect old password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            cy.wrap(inputText).type(credentials.invalidPassword, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeOldPassword');
});

And("I entered new password twice", () => {
    cy.fixture('credentials').then((profile) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(1);
            cy.wrap(inputText).type(profile.password, {force: true});
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).type(profile.password, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});

And("I entered new password differents", () => {
    cy.fixture('credentials').then((profile) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(1);
            cy.wrap(inputText).type(profile.password, {force: true});
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).type(profile.invalidPassword, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});

And("I entered new short password", () => {
    cy.fixture('credentials').then((profile) => {
        cy.get('input.peer[type="password"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(1);
            cy.wrap(inputText).type(profile.shortPassword, {force: true});
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).type(profile.shortPassword, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});


And("I back to Dashboard view", () => {
    cy.get('[data-testid="exit-settings"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/DashboardView');
});

And("I click on avatar icon", () => {
    cy.get('.gh-user-avatar').click()
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/AvatarIcon');
});

And("I click on Sign out", () => {
    cy.get('.user-menu-signout').click()
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/SignOutButton');
});

And("I entered with email and new password", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input[name="identification"]').type(profile.email, {force: true})
        cy.get('input[name="password"]').type(profile.password, {force: true})
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/SignInPage');
});

And("I fill form", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input.peer[type="text"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(0);
            cy.wrap(inputText).clear();
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).clear().type(profile.location, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});


And("I fill form with name too long", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input.peer[type="text"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(0);
            cy.wrap(inputText).clear().type(faker.lorem.sentence(30));
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).clear().type(profile.location, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});



And("I fill form with location too long", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input.peer[type="text"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(3);
            cy.wrap(inputText).clear().type(faker.lorem.sentence(40));
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).clear().type(profile.location, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});

And("I fill form with invalid email", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input.peer[type="text"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(1);
            cy.wrap(inputText).clear().type(faker.lorem.sentence(10));
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).clear().type(profile.location, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});


And("I fill form with website invalid URL", () => {
    cy.fixture('profile').then((profile) => {
        cy.get('input.peer[type="text"]').then(inputs => {
            var inputText = inputs.get(0);
            inputText = inputs.get(4);
            cy.wrap(inputText).clear().type(profile.webSiteInvalid);
            cy.wait(1000)
            inputText = inputs.get(2);
            cy.wrap(inputText).clear().type(profile.location, {force: true});
        });
    });
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');
});


Then("I am logged", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/dashboard`);
    })
    cy.wait(1000)
    cy.screenshot(datetime + '-ProfileGhostV5/DashboardPage');
});

Then('The error message {string}', (error) => {
    cy.get('span.mt-1').invoke('text').should('contains', error);
    cy.screenshot(datetime + '-PageGhostV5/PageErrorChangePassword');
    cy.wait(5000);
  });

  Then('The toast error {string}', (error) => {
    cy.get('div.gap-3').invoke('text').should('contains', error);
    cy.screenshot(datetime + '-PageGhostV5/PageErrorChangePassword');
    cy.wait(5000);
  });


  And("I fill form with dynamic data {string} and {string} and {string} and {string}",  
  (website, fullName, location, email )  => {
    cy.fixture('profile').then((profile) => {
      cy.get('input.peer[type="text"]').then(($inputs) => {           
          var inputText = $inputs.get(0);
          inputText = $inputs.get(0);
          cy.wait(1000)
          cy.wrap(inputText).clear().focus().invoke('val', fullName);
          inputText = $inputs.get(1);
          cy.wait(1000)
          cy.wrap(inputText).focus().invoke('val', email);
          inputText = $inputs.get(4);
          cy.wait(1000)
          cy.wrap(inputText).invoke('val', website);
          cy.wait(1000)
          inputText = $inputs.get(3);
          cy.wrap(inputText).focus().invoke('val', location);
      });
  });
  cy.wait(1000)
  cy.screenshot(datetime + '-ProfileGhostV5/TypeNewPassword');       
});



Then('The error message error {string}', (error) => {
cy.get('span[class="mt-1 inline-block text-xs text-red dark:text-red-500 order-3"]').invoke('text').should('contains', error);   
cy.screenshot(datetime + '-PageGhostV5/PageErrorChangePassword');
cy.wait(5000);
});

