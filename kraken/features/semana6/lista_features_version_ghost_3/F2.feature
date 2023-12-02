Feature: CRUD of Tags
  
@user1 @web
Scenario: Como usuario creo un nuevo tag publico e interno
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged with version 3
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

@user2 @web
Scenario: Como usuario edito un tag publico e interno
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged with version 3
  And I wait for 5 seconds
  And I navigate to tags section
  And I wait for 5 seconds
  When I select public tags section
  And I click the first tag
  And I edit a public tag
  And I click to save
  And I wait for 1 seconds
  And I navigate to tags section
  And I select internal tags section
  And I click the first tag
  And I edit an internal tag
  And I click to save
  Then I navigate to internal tags section
  And I click the first tag

@user3 @web
Scenario: Como usuario creo un tag y lo asigno a una publicacion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged with version 3
  And I wait for 5 seconds
  And I navigate to tags section
  And I wait for 5 seconds
  And I select public tags section
  And I click to create a tag
  And I fill just name field for public tag
  When I click to save
  And I wait for 2 seconds
  And I navigate to post section
  And I select a post
  And I click to open post settings
  And I add a tag to post
  Then I go back to posts section
  And I wait for 2 seconds
  And I navigate to tags section

@user4 @web
Scenario: Como usuario creo un tag, lo edito y lo elimino
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged with version 3
  And I wait for 5 seconds
  And I navigate to tags section
  And I wait for 2 seconds
  And I click to create a tag
  And I fill just name field for public tag
  And I click to save
  And I navigate to tags section
  And I wait for 5 seconds
  And I select public tags section
  And I click the first tag
  And I edit a public tag
  And I click to save
  And I wait for 1 seconds
  And I navigate to tags section
  And I select internal tags section
  And I click the first tag
  And I edit an internal tag
  And I click to save
  And I navigate to internal tags section
  And I click the first tag
  And I wait for 3 seconds
  When I click to delete the tag
  And I confirm to delete the tag
  Then I navigate to internal tags section