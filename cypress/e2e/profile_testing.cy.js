describe('Update user profile using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('tags').then((tags) => {
            cy.wrap(tags).each((tag) => {
                signIn(tag.email, tag.password);
                openProfile();
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

function openProfile(){
    cy.get('.gh-user-avatar').click()
    cy.wait(1000)
    cy.get('[data-test-nav="user-profile"]').click()
    cy.wait(2000)
    cy.contains('span', 'Change password').as('spanConTexto');
    cy.get('@spanConTexto').click();
    cy.wait(2000)
    cy.get('input.peer[type="password"]').then(inputs => {
        var inputText = inputs.get(0);
        cy.wrap(inputText).type('s3d7zGVjiQp6xF', {force: true});
        cy.wait(1000)
        inputText = inputs.get(1);
        cy.wrap(inputText).type('s3d7zGVjiQp6xF#', {force: true});
        cy.wait(1000)
        inputText = inputs.get(2);
        cy.wrap(inputText).type('s3d7zGVjiQp6xF#', {force: true});
        cy.wait(1000)
        
    });
    
    cy.contains('span', 'Change password').as('spanConTexto');
    cy.get('@spanConTexto').click();
    cy.wait(2000)
    cy.contains('span', 'Save & close').as('spanConTexto');
    cy.get('@spanConTexto').click();
    cy.wait(2000)
    cy.get('[data-testid="exit-settings"]').click();
    signOut();
    signIn('j.garcia55@uniandes.edu.co', 's3d7zGVjiQp6xF#')
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