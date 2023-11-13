describe('Create member with name and email using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('members').then((members) => {
            cy.wrap(members).each((member) => {
                signIn(member.email, member.password);
                createMember(member.memberName, member.memberEmail);
                checkByEmail(member.memberEmail);
            })
        })
    })
})

describe('Create member with name, email and label using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('members').then((members) => {
            cy.wrap(members).each((member) => {
                signIn(member.email, member.password);
                createMemberLabel(member.memberName, member.memberEmail, member.memberLabel);
                checkByEmail(member.memberEmail);
            })
        })
    })
})

describe('Edit name from member using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('members').then((members) => {
            cy.wrap(members).each((member) => {
                signIn(member.email, member.password);
                createMember(member.memberName, member.memberEmail);
                editMember("Arnulfo", member.memberEmail)
                checkByEmail(member.memberEmail);
            })
        })
    })
})

describe('Check delete options from member using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('members').then((members) => {
            cy.wrap(members).each((member) => {
                signIn(member.email, member.password);
                createMember(member.memberName, member.memberEmail);
                deleteFake(member.memberEmail)
            })
        })
    })
})

describe('Create, update and delete member using Ghost web app', function() {
    it('visits Ghost web app', function() {
        cy.fixture('members').then((members) => {
            cy.wrap(members).each((member) => {
                signIn(member.email, member.password);
                createMember(member.memberName, member.memberEmail);
                editMember("Arnulfo", member.memberEmail);
                deleteMember(member.memberEmail);
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

function openMembersView(){
    cy.get('[data-test-nav="members"]').should('exist').and('be.visible')
    cy.get('[data-test-nav="members"]').click()
    cy.wait(1000)
}

function openNewMemberView(){
    cy.get('a[href="#/members/new/"]').should('exist').and('be.visible')
    cy.get('a[href="#/members/new/"]').click()
    cy.wait(1000)

}

function createMember(name, email){
    openMembersView();
    openNewMemberView();
    cy.get('#member-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('#member-email').type(email, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
}

function createMemberLabel(name, email, label){
    openMembersView();
    openNewMemberView();
    cy.get('#member-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('#member-email').type(email, {force: true})
    cy.wait(1000);
    cy.get('input[type="search"]').type(label, {force: true})
    cy.wait(1000);
    cy.get('[data-option-index="0"]').click();
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
}

function editMember(name, email){
    openMembersView()
    cy.contains('p', email).as('pConTexto');
    cy.get('@pConTexto').click();
    cy.wait(1000);
    cy.get('#member-name').type(name, {force: true})
    cy.wait(1000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
}

function deleteMember(email){
    openMembersView()
    cy.contains('p', email).as('pConTexto');
    cy.get('@pConTexto').click();
    cy.wait(1000)
    cy.get('[data-test-button="member-actions"]').click()
    cy.wait(1000)
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(1000)
    cy.get('[data-test-button="confirm"]').click();

}

function deleteFake(email) {
    openMembersView()
    cy.contains('p', email).as('pConTexto');
    cy.get('@pConTexto').click();
    cy.wait(1000)
    
    cy.get('[data-test-button="member-actions"]').click()
    cy.wait(1000)
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(1000)
    cy.get('[data-test-button="cancel"]').click();
    cy.wait(1000)

    cy.get('[data-test-button="member-actions"]').click()
    cy.wait(1000)
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(1000)
    cy.get('.close').click();

    cy.get('[data-test-button="member-actions"]').click()
    cy.wait(1000)
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(1000)
    cy.get('[data-test-button="confirm"]').click();
}

function checkByEmail(email){
    openMembersView()
    cy.contains('p', email).as('pConTexto');
    cy.get('@pConTexto').should('exist')
}