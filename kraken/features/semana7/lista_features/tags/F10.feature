Feature: CRUD of tags

@user10 @web
Scenario: Crear tag y asignar tag nuevo a una publicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to tags section
    And I wait for 2 seconds
    And I navigate to create a tag
    And I wait for 2 seconds
    And I fill just tag name field
    And I fill just tag description field
    And I click on save button
    And I wait for 2 seconds
    And I back to tags list
    And I check slug from tag
    And I navigate to the Posts view
    And I wait for 2 seconds
    And I click on New post button
    And I wait for 2 seconds
    And I entered name to the post
    And I click on Post settings button
    And I add the new Tag to the Post
    And I click on first list item
    And I wait for 2 seconds
    And I back to the Posts view
    And I confirm to back to the Posts view
    And I click on the tags filter button from posts
    Then I check in the filter select tag if exists the new tag

    #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
    When I right click to last post
    And I click on delete from list
    And I confirm to delete tag
    And I navigate to tags section
    And I navigate to the tag by slug
    And I click on Delete tag button
    And I wait for 2 seconds
    And I confirm to delete tag
    And I wait for 2 seconds