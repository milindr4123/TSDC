Feature: Update user profile using Ghost web app

    Background: Login in Ghost web app
        Given I navigate to the Website
        And I entered email and password
        And I click on login submit button

    Scenario: Update user profile
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I click on Change password button
        And I entered old password
        And I entered new password twice
        And I click on Change password button
        And I click on Save & close button
        And I back to Dashboard view
        And I click on avatar icon
        And I click on Sign out
        And I entered with email and new password
        And I click on login submit button
        Then I am logged


    Scenario: Change password in profile but news password do not match
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I click on Change password button
        And I entered old password
        And I entered new password differents
        And I click on Change password button
        Then  The error message "Your new passwords do not match"

    Scenario: Change password in profile but with incorrect password
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I click on Change password button
        And I entered invalid old password
        And I entered new password twice
        And I click on Change password button
        Then  The toast error "Your password is incorrect."

    Scenario: Change password in profile with password under 10 characters
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I click on Change password button
        And I entered old password
        And I entered new short password
        And I click on Change password button
        Then  The error message "Password must be at least 10 characters long."

    Scenario: I Fill form without full name
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form
        Then  The error message "Please enter a name"

    Scenario: I fill form with name too long
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form with name too long
        Then  The error message "Name is too long"


    Scenario: I fill form with invalid email
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form with invalid email
        Then  The error message "Please enter a valid email address"

    Scenario: I fill form with location too long
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form with location too long
        Then  The error message "Location is too long"

    Scenario: I fill form with website invalid URL
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form with website invalid URL
        Then  The error message "Please enter a valid URL"



    Scenario Outline: I fill fullName form with dynamic data 
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form fullName "<fullName>"
        Then The error message error "<error>" 
        Examples:
        | fullName               |  error              |
        |                        | Please enter a name |


    Scenario Outline: I fill email form with dynamic data 
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form email "<email>"
        Then The error message error "<error>" 
        Examples:
        | email               |  error              |
        |  sin formato        | Please enter a valid email address |


    Scenario Outline: I fill Website form with dynamic data 
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form webSite "<webSite>"
        Then The error message error "<error>" 
        Examples:
        | webSite               |  error              |
        |  nada        | Please enter a valid URL |

    Scenario Outline: I fill facebook profile form with dynamic data 
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form facebook profile "<facebook>"
        Then The error message error "<error>" 
        Examples:
        | facebook               |  error              |
        |  0    nada        | The URL must be in a format like https://www.facebook.com/yourPage |


    Scenario Outline: I fill twitter profile form with dynamic data 
        Given I am logged
        When I click on avatar icon
        And I click on Your profile
        And I fill form twitter profile "<twitter>"
        Then The error message error "<error>" 
        Examples:
        | twitter               |  error              |
        |  0    nada        | Your Username is not a valid Twitter Username |