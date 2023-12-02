Feature: CRUD of members

@user19 @web
Scenario: Como usuario creo un miembro con correo, nombre y etiqueta y lo visualizo
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to members section
    And I wait for 2 seconds
    And I navigate to create a member
    And I wait for 2 seconds
    And I fill just name field
    And I fill just email field
    And I fill just label field
    And I click on first list item
    And I click on save button
    And I wait for 2 seconds
    Then I check the label from label list
    And I back to members list
    And I check the name from member list
    And I check the email from member list

    #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
    When I navigate to the member by email
    And I click on member settings
    And I wait for 2 seconds
    And I click on Delete member button
    And I wait for 2 seconds
    And I confirm to delete member
    And I wait for 2 seconds