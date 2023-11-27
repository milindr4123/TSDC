Feature: General settings modify

@user24 @web
Scenario: Como usuario agrego una recomendación de la aplicación usando campos vacíos
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to general settings
    And I wait for 2 seconds
    And I click on add recommendation
    And I wait for 2 seconds
    And I click on next button
    And I wait for 2 seconds
    Then I check the error