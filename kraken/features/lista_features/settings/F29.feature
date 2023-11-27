Feature: General settings modify

@user29 @web
Scenario: Como usuario agrego una recomendación de la aplicación usando campos que tiene un formato de url pero con diferente titulo
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I am logged
    And I wait for 2 seconds
    And I navigate to general settings
    And I wait for 2 seconds
    And I click on add recommendation
    And I wait for 2 seconds
    And I fill URL field
    And I wait for 2 seconds
    And I click on next button
    And I wait for 5 seconds
    And I edit the title field
    And I click on add button
    And I wait for 2 seconds
    Then I check the recommendations list

    #Los siguientes no van en el escenario

    When I click on list item
    And I click on delete button
    And I click on confirm delete button