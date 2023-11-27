Feature: General settings modify

@user30 @web
Scenario: Como usuario agrego una integración personalizada de la aplicación sin nombre
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to general settings
    And I wait for 2 seconds
    And I click on add custom integration
    And I wait for 2 seconds
    And I click on add button
    And I wait for 2 seconds
    Then I check the error