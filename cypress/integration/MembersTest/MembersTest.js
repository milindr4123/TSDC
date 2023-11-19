import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TransitionAborted') || err.message.includes('TaskCancelation')) {
        return false;
    }
    
    return true;
});

let emailMember;
let nameMember;
let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given("I navigate to the Website", () => {
    cy.fixture('ports').then((port) => {
        portVersion = port.v1
        cy.visit(`http://localhost:${port.v1}/ghost/`)
    });
    cy.screenshot(datetime + "-MemberGhostV5/SignInPage");
});

And("I entered email and password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input[name="identification"]').type(credentials.email, {force: true})
        cy.get('input[name="password"]').type(credentials.password, {force: true})
    });
    cy.screenshot(datetime + "-MemberGhostV5/EmailAndPassword");

});

And("I click on login submit button", () => {
    cy.get('button[type="submit"]').click()
    cy.screenshot(datetime + "-MemberGhostV5/LoginButton");

});

Given("I am logged", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/dashboard`);
    })
    cy.screenshot(datetime + "-MemberGhostV5/DashboardPage");

});

When("I navigate to Members view", () => {
    cy.get('a[data-test-nav="members"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/MembersPage");

});

And("I navigate to the New Member view", () => {
    cy.contains('New member').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/NewMemberPage");

});

And("I entered name and email", () => {
    cy.fixture('createMember').then((member) => {
        nameMember = member.name;
        emailMember = member.email;
        cy.get('input[data-test-input="member-name"]').type(member.name, {force: true});
        cy.get('input[data-test-input="member-email"]').type(member.email, {force: true});
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/NewMemberForm");

});

And("I entered name, email and label", () => {
    cy.fixture('createMember').then((member) => {
        nameMember = member.name;
        emailMember = member.email;
        cy.get('input[data-test-input="member-name"]').type(member.name, {force: true});
        cy.get('input[data-test-input="member-email"]').type(member.email, {force: true});
        cy.get('input[type="search"]').type(member.label, {force: true})
        cy.wait(1000);
        cy.get('[data-option-index="0"]').click();
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/EditMemberForm");

});

And("I click on Save button", () => {
    cy.get('button[data-test-button="save"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/SaveButtonForm");

});

And("I should be send to Edit member", () => {
    cy.get('.gh-canvas-breadcrumb').should('contain', 'Edit member');
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/CheckEditMember");

});

And("I should see the member name at top from page", () => {
    cy.get('h2[data-test-screen-title]').should('contain', nameMember);
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/CheckTitleMember");

});

Then("I check the name and email from member list", () => {
    cy.get('h3.gh-members-list-name').should('contain', nameMember)
    cy.get('p.gh-members-list-email').should('contain', emailMember)
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/CheckMemberOnList");

});

And("I check the name and email from member list", () => {
    cy.get('h3.gh-members-list-name').should('contain', nameMember)
    cy.get('p.gh-members-list-email').should('contain', emailMember)
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/CheckMemberOnList");

});

When("I navigate to the Member by email", () => {
    cy.get('p.gh-members-list-email').contains(emailMember).click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/EditPageMember");

});

And("I click on settings button", () => {
    cy.get('button[data-test-button="member-actions"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/SettingsButton");

});

And("I click on Delete member button", () => {
    cy.get('button[data-test-button="delete-member"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/DeleteMemberButton");

});

And("I confirm to delete member", () => {
    cy.get('button[data-test-button="confirm"]').click();
    cy.wait(2000)
    cy.screenshot(datetime + "-MemberGhostV5/ConfirmDeleteButton");

});

Then("I should be send to Members view", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/members`);
    })
    cy.screenshot(datetime + "-MemberGhostV5/CheckMembersView");

});

And("I edit name and email", () => {
    cy.fixture('editMember').then((member) => {
        nameMember = member.name;
        emailMember = member.email;
        cy.get('input[data-test-input="member-name"]').clear().type(member.name, {force: true});
        cy.get('input[data-test-input="member-email"]').clear().type(member.email, {force: true});
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/EditFormMember");

});

And("I click on Cancel button", () => {
    cy.get('button[data-test-button="cancel"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/CancelButtonPress");

});

And("I click on X button", () => {
    cy.get('.close').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-MemberGhostV5/XButtonPress");
});


