Feature: General settings modify

@user22 @web
Scenario: Como usuario cambio el titulo y la descripción de la aplicación por campos vacíos
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to general settings
    And I wait for 2 seconds
    And I click on edit from title & description
    And I wait for 2 seconds
    And I fill just title field with empty data
    And I fill just description field with empty data
    And I click on save button
    And I wait for 2 seconds
    Then I check the title
    And I check the description