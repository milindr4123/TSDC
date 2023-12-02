Feature: CRUD of members

@user20 @web
Scenario: Como usuario creo y elimino un miembro del sistema
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
    And I click on member settings
    And I wait for 2 seconds
    Then I click on Delete member button
    And I wait for 2 seconds
    And I confirm to delete member
    And I wait for 2 seconds