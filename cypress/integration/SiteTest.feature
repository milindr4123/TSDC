Feature: options test in Ghost

   Background: Navigate in site Ghost web app
        Given I navigate to the Website
        And I entered email and password
        And I click on login submit button
       

    Scenario Outline: I fill crate newsletter form with dynamic data
        Given I am logged
        When I click on settings button
        And I click on newsletters button
        And I click add new newsletters button
        And I fill create newsletter form Error "<thoughts>"
        And I click on Save
        Then The error message "<error>"
        Examples:
        | thoughts   |error|
        |   |Please enter a name|


    Scenario Outline: I fill crate newsletter form with dynamic data WithOutName
        Given I am logged
        When I click on settings button
        And I click on newsletters button
        And I click add new newsletters button
        And I fill create newsletter form "<thoughts>"
        And I click on Save
        Then I Validation show another page
        Examples:
        | thoughts   |name| error|
        |  ingerika.forero@gmail.com  | | Please enter a name|