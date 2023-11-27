Feature: CRUD of members

@user1 @web
Scenario: Como usuario creo un nuevo miembro solo con correo y nombre
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I am logged
  And I wait for 4 seconds
  And I navigate to members section
  And I navigate to create a member
  And I wait for 2 seconds
  When I fill just name and email member fields
  Then I check if user is saved

@user2 @web
Scenario: Como usuario creo un nuevo miembro llenando todos los campos
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I am logged
  And I wait for 4 seconds
  And I navigate to members section
  And I navigate to create a member
  When I fill all member fields
  Then I check if user is saved 
  
@user3 @web
Scenario: Como usuario edito un miembro cambiando todos los campos
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I am logged
  And I wait for 5 seconds
  And I navigate to members section
  And I wait for 5 seconds
  When I edit a member
  And I navigate to members section
  Then I select the first member
  
@user4 @web
Scenario: Como usuario creo, edito, y elimino un miembro
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I am logged
  And I wait for 5 seconds
  And I navigate to members section
  And I wait for 5 seconds
  And I navigate to create a member
  When I fill all member fields
  And I navigate to members section
  And I edit a member
  And I navigate to members section
  Then I select the first member 
  And I click settings button
  And I click to delete a member
  And I click to confirm delete a member

@user5 @web
Scenario: Como usuario elimino un miembro
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I am logged
  And I wait for 5 seconds
  And I navigate to members section
  And I wait for 5 seconds
  And I navigate to create a member
  And I fill all member fields
  And I navigate to members section
  Then I select the first member 
  And I click settings button
  And I click to delete a member
  And I click to cancel delete a member
  And I wait for 1 seconds
  And I click settings button
  And I click to delete a member  
  And I click to close delete member modal
  And I wait for 1 seconds
  And I click settings button
  And I click to delete a member  
  And I click to confirm delete a member