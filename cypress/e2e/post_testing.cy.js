describe('Create post using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('post').then((post) => {
            cy.wrap(post).each((post) => {
                signIn(post.email, post.password);
                createPost(post.postName, post.postColor, post.postDescription);
                deletePost() //Esta función no va en el escenario pero se incluye para evitar llenar la aplicación de datos.
            })
        })
    })
})

describe('Edit post using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('post').then((post) => {
            cy.wrap(post).each((post) => {
                signIn(post.email, post.password);
                editPost(post.postName, post.postColor, post.postDescription, post.changePostName);
                deletePost() //Esta función no va en el escenario pero se incluye para evitar llenar la aplicación de datos.
            })
        })
    })
})

describe('Edit and delete post using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('post').then((post) => {
            cy.wrap(post).each((post) => {
                signIn(post.email, post.password);
                editDeletePost(post.postName, post.postColor, post.postDescription, post.changePostName);
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
    cy.wait(2000);
    cy.get('button#ember5').click()
    cy.wait(2000);
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


function openNewPostView(){
    cy.contains('span', 'New post').as('spanConTexto');
    cy.get('@spanConTexto').click();
}


async function createPost(name, description){
    openPostView();
    openNewPostView();
    cy.get('[placeholder="Post title"]').type(name, {force: true})
    cy.wait(1000);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(description, {force: true})
    cy.wait(1000);
    cy.contains('span','Posts').click();
    cy.wait(1000);
    cy.get('div[class="gh-posts-list-item-group"]').eq(2).click();
    cy.wait(2000);
    cy.get('button[title="Settings"]').click();
    cy.wait(2000);   
     
}

async function editPost(name, description){
    openPostView();
    openNewPostView();
    cy.get('[placeholder="Post title"]').type(name, {force: true})
    cy.wait(1000);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(description, {force: true})
    cy.wait(1000);
    cy.contains('span','Posts').click();
    cy.wait(1000);
    cy.get('div[class="gh-posts-list-item-group"]').eq(2).click();
    cy.wait(1000);
    cy.get('button[title="Settings"]').click();
    cy.wait(1000);
}

async function editDeletePost(name, description){
    openPostView();
    openNewPostView();
    cy.get('[placeholder="Post title"]').type(name, {force: true})
    cy.wait(1000);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(description, {force: true})
    cy.wait(1000);
    cy.contains('span','Posts').click();
    cy.wait(2000);
    cy.contains('span','Publish').click();    
}

function checkPostByName(namePost){
    openPostView();
    cy.get(`[title="${namePost}"]`).should('exist')
    cy.get(`[title="${namePost}"]`).click();
}

function checkPostByNameEdit(namePost){
    openPostView();
    cy.get(`[title="${namePost}"]`).should('exist')
    cy.get(`[title="${namePost}"]`).click();
    cy.get('[placeholder="Post title"]').clear().type(editName, {force: true})
    cy.wait(1000);
    cy.contains('span','Posts').click();
    cy.wait(2000);
}

function checkPostByNameDelete(namePost, editName){
    openPostView();
    cy.get(`[title="${namePost}"]`).should('exist')
    cy.get(`[title="${namePost}"]`).click();
    cy.get('[placeholder="Post title"]').type(editName, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    deletePost();
}

function deletePost(){
    cy.contains('span','Delete').click();
    cy.wait(2000);
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.wait(2000);
}