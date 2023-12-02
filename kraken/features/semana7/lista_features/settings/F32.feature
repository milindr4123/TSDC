Feature: General settings modify

@user30 @web
Scenario: Como usuario agrego una integración personalizada de la aplicación sin nombre
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to general settings
    And I wait for 2 seconds
    And I click on add custom integration
    And I wait for 2 seconds
    And I fill name field
    And I click on add button
    And I wait for 2 seconds
    And I click on save and close
    Then I check the name on the list