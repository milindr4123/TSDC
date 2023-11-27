Feature: CRUD of members

@user17 @web
Scenario: Como usuario intento crear miembro con los campos vacíos
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to members section
    And I wait for 2 seconds
    And I navigate to create a member
    And I wait for 2 seconds
    And I click on save button
    And I wait for 5 seconds
    Then I check error from email