Feature: CRUD of tags

@user7 @web
Scenario: Como usuario creo un nuevo tag interno y lo visualizo
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
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
    Then I back to tags list
    And I navigate to Internal tags
    And I check slug from tag
    And I wait for 2 seconds

    #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
    When I navigate to the tag by slug
    And I click on Delete tag button
    And I wait for 2 seconds
    And I confirm to delete tag
    And I wait for 2 seconds