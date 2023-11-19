import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TransitionAborted') || err.message.includes('TaskCancelation')) {
        return false;
    }
    
    return true;
});

let slugTag;
let nameTag;
let portVersion;
let datetime = new Date().toISOString().replace(/:/g,".");

Given("I navigate to the Website", () => {
    cy.fixture('ports').then((port) => {
        portVersion = port.v1
        cy.visit(`http://localhost:${port.v1}/ghost/`);
    });
    cy.screenshot(datetime + "-TagGhostV5/SignInPage");
});

And("I entered email and password", () => {
    cy.fixture('credentials').then((credentials) => {
        cy.get('input[name="identification"]').type(credentials.email, {force: true})
        cy.get('input[name="password"]').type(credentials.password, {force: true})
    });
    cy.screenshot(datetime + "-TagGhostV5/EmailAndPassword");

});

And("I click on login submit button", () => {
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/LoginButton");
});

Given("I am logged", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/dashboard`);
    })
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/DashboardPage");
});

When("I navigate to Tags view", () => {
    cy.get('a[data-test-nav="tags"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/TagsPage");
});

And("I navigate to the New Tag view", () => {
    cy.contains('New tag').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/NewTagPage");
});

And("I entered name, color and description", () => {
    cy.fixture('createTag').then((tags) => {
        nameTag = tags.name;
        cy.get('input[data-test-input="tag-name"]').type(tags.name, {force: true});
        cy.get('input[data-test-input="accentColor"]').type(tags.color, {force: true});
        cy.get('textarea[data-test-input="tag-description"]').type(tags.description, {force: true});
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/NewTagForm");
});

And("I click on Save button", () => {
    cy.get('button[data-test-button="save"]').click();
    cy.wait(1000)
    cy.get('input[data-test-input="tag-slug"]').invoke('val').then(text => {
        slugTag = text;
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/SaveButtonForm");
});

And("I should be send to Edit tag", () => {
    cy.get('.gh-canvas-breadcrumb').should('contain', 'Edit tag');
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/EditTagView");
});

And("I should see the tag name at top from page", () => {
    cy.get('h2[data-test-screen-title]').should('contain', nameTag);
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/TagNameTitle");
});

Then("I check the name and slug from tag list", () => {
    cy.get('h3[data-test-tag-name]').should('contain', nameTag)
    cy.get(`span[title="${slugTag}"]`).should('contain', slugTag)
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/CheckTagOnList");
});

When("I navigate to the Tag by slug", () => {
    cy.get(`span[title="${slugTag}"]`).click()
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/EditTagView");
});

And("I click on Delete tag button", () => {
    cy.get('button[data-test-button="delete-tag"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/DeleteTagButton");
});

And("I confirm to delete tag", () => {
    cy.get('button[data-test-button="confirm"]').click();
    cy.wait(2000)
    cy.screenshot(datetime + "-TagGhostV5/ConfirmButton");
});

Then("I should be send to Tags view", () => {
    cy.url().then((url) => {
        cy.url().should('eq', `http://localhost:${portVersion}/ghost/#/tags`);
    })
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/CheckTagsView");
});

And("I edit name, color and description inputs", () => {
    cy.fixture('editTag').then((tags) => {
        nameTag = tags.name;
        cy.get('input[data-test-input="tag-name"]').clear().type(tags.name, {force: true});
        cy.get('input[data-test-input="accentColor"]').clear().type(tags.color, {force: true});
        cy.get('textarea[data-test-input="tag-description"]').clear().type(tags.description, {force: true});
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/EditFormTags");
});

When("I navigate to the Posts view", () => {
    cy.get('a[data-test-nav="posts"]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/PostView");
});

And("I click on New post Button", () => {
    cy.get('a[data-test-new-post-button]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/NewPostView");
});

And("I entered name to the post", () => {
    cy.get('textarea[data-test-editor-title-input]').type('TestPost');
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/NewPostForm");
});

And("I click on Post settings button", () => {
    cy.get('button[data-test-psm-trigger]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/SettingsButton");
});

And("I add the new Tag to the Post", () => {
    cy.get('input[type="search"]').then(item => {
        cy.wrap(item.get(0)).type(nameTag, {force: true});
        cy.get('[data-option-index="0"]').click();
    });
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/AddTagToPost");
});

And("I back to the Posts view", () => {
    cy.get('a[data-test-breadcrumb]').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/BackToPostView");
});

And("I confirm to back to the Posts view", () => {
    cy.get('button.gh-btn-red').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/ConfirmButtonBack");
});

And('I click on the tags filter button from posts', () => {
    cy.get('span.ember-power-select-selected-item').contains('All tags').click()
    cy.wait(2000);
    cy.screenshot(datetime + "-TagGhostV5/FilterList");
});

Then("I check in the filter select tag if exists the new tag", () => {
    cy.get('li.ember-power-select-option').should('contain', nameTag);
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/CheckTagOnList");
});

When("I right click to last post", () => {
    cy.get('h3.gh-content-entry-title').contains('TestPost').trigger('contextmenu');
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/RightClickPost");
});

And("I click on delete from list", () => {
    cy.get('span.red').click();
    cy.wait(1000)
    cy.screenshot(datetime + "-TagGhostV5/DeleteFromList");
});


