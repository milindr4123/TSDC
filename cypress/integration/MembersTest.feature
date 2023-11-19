Feature: Create, read, update and delete some Members in Ghost web app 

    Background: Login in Ghost web app
        Given I navigate to the Website
        And I entered email and password
        And I click on login submit button

    Scenario: Create member with name and email using Ghost web app
        Given I am logged
        When I navigate to Members view
        And I navigate to the New Member view
        And I entered name and email
        And I click on Save button
        And I should be send to Edit member
        And I should see the member name at top from page
        And I navigate to Members view
        Then I check the name and email from member list

        #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
        When I navigate to the Member by email
        And I click on settings button
        And I click on Delete member button
        And I confirm to delete member
        Then I should be send to Members view

    Scenario: Create member with name, email and label using Ghost web app
        Given I am logged
        When I navigate to Members view
        And I navigate to the New Member view
        And I entered name, email and label
        And I click on Save button
        And I should be send to Edit member
        And I should see the member name at top from page
        And I navigate to Members view
        Then I check the name and email from member list

        #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
        When I navigate to the Member by email
        And I click on settings button
        And I click on Delete member button
        And I confirm to delete member
        Then I should be send to Members view

    Scenario: Create and edit member using Ghost web app
        Given I am logged
        When I navigate to Members view
        And I navigate to the New Member view
        And I entered name, email and label
        And I click on Save button
        And I should be send to Edit member
        And I should see the member name at top from page
        And I navigate to Members view
        And I check the name and email from member list
        And I navigate to the Member by email
        And I edit name and email
        And I click on Save button
        And I should see the member name at top from page
        And I navigate to Members view
        Then I check the name and email from member list

        #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
        When I navigate to the Member by email
        And I click on settings button
        And I click on Delete member button
        And I confirm to delete member
        Then I should be send to Members view

    Scenario: Create, update and delete member using Ghost web app
        Given I am logged
        When I navigate to Members view
        And I navigate to the New Member view
        And I entered name, email and label
        And I click on Save button
        And I should be send to Edit member
        And I should see the member name at top from page
        And I navigate to Members view
        And I check the name and email from member list
        And I navigate to the Member by email
        And I edit name and email
        And I click on Save button
        And I should see the member name at top from page
        And I navigate to Members view
        And I check the name and email from member list
        And I navigate to the Member by email
        And I click on settings button
        And I click on Delete member button
        And I confirm to delete member
        Then I should be send to Members view

    Scenario: Check delete options from member using Ghost web app
        Given I am logged
        When I navigate to Members view
        And I navigate to the New Member view
        And I entered name, email and label
        And I click on Save button
        And I should be send to Edit member
        And I should see the member name at top from page
        And I navigate to Members view
        And I check the name and email from member list
        And I navigate to the Member by email
        And I click on settings button
        And I click on Delete member button
        And I click on Cancel button
        And I click on settings button
        And I click on Delete member button
        And I click on X button
        And I click on settings button
        And I click on Delete member button
        And I confirm to delete member
        Then I should be send to Members view