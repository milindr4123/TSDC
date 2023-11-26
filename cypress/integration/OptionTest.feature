Feature: options test in Ghost

    Background: Login in Ghost web app
        Given I navigate to the Website
        And I entered email and password
        And I click on login submit button


    Scenario: I fill twitter profile form with random method
        Given I am logged
        When I click on settings button
        And I click on integrations button
        And I click on slack integration button
        And I fill webhook url random method
        Then  The error message "The URL must be in a format like https://hooks.slack.com/services/<your personal key>"


    
    Scenario Outline: I fill twitter profile form with dynamic data successful
        Given I am logged
        When I click on settings button
        And I click on integrations button
        And I click on slack integration button
        And I fill webhook url "<webhook>"
        And I click on Save & close button
        And I click on slack integration button
        Then I compare values "<webhook>"
         Examples:
        | webhook   |
        | https://www.deepl.com/es/translator |
        
  
    Scenario Outline: I fill twitter profile form with dynamic data 
        Given I am logged
        When I click on settings button
        And I click on integrations button
        And I click on slack integration button
        And I fill webhook url "<webhook>"
        Then  The error message "<error>"
        Examples:
        | webhook   | error |
        | sinurl | The URL must be in a format like https://hooks.slack.com/services/<your personal key> |