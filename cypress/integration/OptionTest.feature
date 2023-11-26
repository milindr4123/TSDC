Feature: options test in Ghost

    Background: Login in Ghost web app
        Given I navigate to the Website
        And I entered email and password
        And I click on login submit button

   
    Scenario Outline: I fill twitter profile form with dynamic data 
        Given I am logged
        When I click on settings button
        Then  The error message
