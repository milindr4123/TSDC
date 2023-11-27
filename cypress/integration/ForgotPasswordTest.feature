Feature: forgot password failed in Ghost
    
    Background: Login in Ghost web app
        Given I navigate to page Ghost Web

    Scenario: Password recovery with non-existent email.
        When  I enter invalid email    
        And   I click in forgot button
        Then  The error message "User not found."

    Scenario: Password recovery with incorrectly formatted email.
        When  I enter invalid email format
        And   I click in forgot button
        Then  The error message "We need your email address to reset your password!"