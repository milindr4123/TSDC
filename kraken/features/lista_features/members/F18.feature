Feature: CRUD of members

@user18 @web
Scenario: Como usuario creo un miembro, lo edito y luego lo visualizo
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to members section
    And I wait for 2 seconds
    And I navigate to create a member
    And I wait for 2 seconds
    And I fill just name field
    And I fill just email field
    And I click on save button
    And I wait for 2 seconds
    And I back to members list
    And I check the name from member list
    And I check the email from member list
    And I navigate to the member by email
    And I edit just name field
    And I edit just email field
    And I click on save button
    Then I back to members list
    And I check the edited name from member list
    And I check the edited email from member list

    #Los siguientes pasos no van en el escenario pero se incluyen para mejor manejo de las pruebas
    When I navigate to the member by edited email
    And I click on member settings
    And I wait for 2 seconds
    And I click on Delete member button
    And I wait for 2 seconds
    And I confirm to delete member
    And I wait for 2 seconds