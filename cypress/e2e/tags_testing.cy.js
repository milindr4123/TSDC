describe('Create tag using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('tags').then((tags) => {
            cy.wrap(tags).each((tag) => {
                signIn(tag.email, tag.password);
                createTag(tag.tagName, tag.tagColor, tag.tagDescription);
                deleteTag() //Esta función no va en el escenario pero se incluye para evitar llenar la aplicación de datos.
            })
        })
    })
})

describe('Edit tag using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('tags').then((tags) => {
            cy.wrap(tags).each((tag) => {
                signIn(tag.email, tag.password);
                editTag(tag.tagName, tag.tagColor, tag.tagDescription, tag.changeTagName);
                deleteTag() //Esta función no va en el escenario pero se incluye para evitar llenar la aplicación de datos.
            })
        })
    })
})

describe('Edit and delete tag using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('tags').then((tags) => {
            cy.wrap(tags).each((tag) => {
                signIn(tag.email, tag.password);
                editDeleteTag(tag.tagName, tag.tagColor, tag.tagDescription, tag.changeTagName);
            })
        })
    })
})

describe('create, delete and add to post a tag using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('tags').then((tags) => {
            cy.wrap(tags).each((tag) => {
                signIn(tag.email, tag.password);
                editTag(tag.tagName, tag.tagColor, tag.tagDescription, tag.changeTagName);
                addTagToPost(tag.changeTagName);
            })
        })
    })
})

function signIn(user, password){
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000);
    cy.get('input').then(inputs => {
        var inputText = inputs.get(0);
        var inputPassword = inputs.get(1);
        cy.wrap(inputText).type(user, {force: true});
        cy.wrap(inputPassword).type(password, {force: true});
        
    });
    cy.wait(1000);
    cy.get('button#ember5').click()
    cy.wait(1000);
    cy.url().then((url) => {
        if(url == 'http://localhost:2368/ghost/#/dashboard'){
            cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard');
            cy.get('.gh-user-avatar').should('exist').and('be.visible')
        }else{
            throw new Error('No ingresó a la aplicación');
        }
    })
}

function signOut(){
    cy.url().then((url) => {
        if(url !== 'http://localhost:2368/ghost/#/signin'){
            cy.get('.gh-user-avatar').click()
            cy.wait(1000)
            cy.get('.user-menu-signout').click()
        }
    })
}

function openPostView(){
    cy.get('[data-test-nav="posts"]').should('exist').and('be.visible')
    cy.get('[data-test-nav="posts"]').click()
}

function openTagsView(){
    cy.get('[data-test-nav="tags"]').should('exist').and('be.visible')
    cy.get('[data-test-nav="tags"]').click()
}

function openNewTagView(){
    cy.contains('span', 'New tag').as('spanConTexto');
    cy.get('@spanConTexto').click();
}

function addTagToPost(tagName){
    openPostView();
    cy.get('.gh-posts-list-item').then(item => {
        cy.wrap(item.get(0)).click();
        
    });
    cy.wait(1000);
    cy.get('[title="Settings"]').click()
    cy.wait(1000)
    cy.get('input[type="search"]').then(item => {
        cy.wrap(item.get(0)).type(tagName, {force: true});
        cy.get('[data-option-index="0"]').click();
        cy.wait(1000);
    });
    cy.get('[title="Settings"]').click()
    cy.wait(1000)
    cy.get('[data-test-button="publish-save"]').click();

    
}

async function createTag(name, color, description){
    openTagsView();
    openNewTagView();
    cy.get('#tag-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('.gh-input[name="accent-color"]').type(color, {force: true})
    cy.wait(1000);
    cy.get('#tag-description').type(description, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    await cy.get('.ghost-url-preview').invoke('text').then((paragraphText) => {
        let text = paragraphText.split('/')[2]
        checkTagByName(text);
    });
}

async function editTag(name, color, description, editName){
    openTagsView();
    openNewTagView();
    cy.get('#tag-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('.gh-input[name="accent-color"]').type(color, {force: true})
    cy.wait(1000);
    cy.get('#tag-description').type(description, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    await cy.get('.ghost-url-preview').invoke('text').then((paragraphText) => {
        let text = paragraphText.split('/')[2]
        checkTagByNameEdit(text, editName);
    });
}

async function editDeleteTag(name, color, description, editName){
    openTagsView();
    openNewTagView();
    cy.get('#tag-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('.gh-input[name="accent-color"]').type(color, {force: true})
    cy.wait(1000);
    cy.get('#tag-description').type(description, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    await cy.get('.ghost-url-preview').invoke('text').then((paragraphText) => {
        let text = paragraphText.split('/')[2]
        checkTagByNameDelete(text, editName);
    });
}

function checkTagByName(nameTag){
    openTagsView();
    cy.get(`[title="${nameTag}"]`).should('exist')
    cy.get(`[title="${nameTag}"]`).click();
}

function checkTagByNameEdit(nameTag, editName){
    openTagsView();
    cy.get(`[title="${nameTag}"]`).should('exist')
    cy.get(`[title="${nameTag}"]`).click();
    cy.get('#tag-name').clear().type(editName, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
}

function checkTagByNameDelete(nameTag, editName){
    openTagsView();
    cy.get(`[title="${nameTag}"]`).should('exist')
    cy.get(`[title="${nameTag}"]`).click();
    cy.get('#tag-name').type(editName, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    deleteTag();
}

function deleteTag(){
    cy.get('[data-test-button="delete-tag"]').click();
    cy.wait(2000);
    cy.get('[data-test-button="confirm"]').click();
    cy.wait(2000);
}


