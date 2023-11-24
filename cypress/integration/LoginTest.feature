Feature: Autenticación fallida en Ghost
    
    Background: Login in Ghost web app
        Given I navigate to page Ghost Web

    Scenario: Incorrect User Login.
        When  I enter invalid email and valid password       
        And   I click in Sign in button
        Then  The error message "There is no user with that email address" 

    Scenario: Incorrect Password.
        When  I enter valid email and invalid password       
        And   I click in Sign in button
        Then  The error message "There is no user with that email address"

    Scenario: Incorrect User and Password.
        When  I enter invalid email and invalid password       
        And   I click in Sign in button
        Then  The error message "There is no user with that email address." 

    Scenario: Empty User Login.
        When  I enter empty email and valid password     
        And   I click in Sign in button
        Then  The error message "Please fill out the form to sign in" 
    
    Scenario: Empty Password.
        When  I enter valid email and empty password     
        And   I click in Sign in button
        Then  The error message "Please fill out the form to sign in" 

    Scenario: Form without data.
        When  I enter empty email and empty password     
        And   I click in Sign in button
        Then  The error message "Please fill out the form to sign in"

    Scenario: Too many login attempts.
        When  I enter invalid email and valid password       
        And   I click in Sign in button
        Then  The error message "Too many login attempts. Please wait"