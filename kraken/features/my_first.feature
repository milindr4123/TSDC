Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Página - Page

@user3 @web
Scenario: Como usuario creo un tag y lo asigno a una publicacion
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
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