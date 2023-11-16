Feature: CRUD of Tags
  
@user1 @web
Scenario: Como usuario creo un nuevo tag publico e interno
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged
  And I wait for 5 seconds
  And I navigate to tags section
  And I click to create a tag
  And I fill just name field for public tag
  When I click to save
  And I navigate to tags section
  And I wait for 2 seconds
  And I click to create a tag
  And I fill just name field for internal tag
  When I click to save
  Then I navigate to tags section
  And I wait for 2 seconds
  And I click the first tag