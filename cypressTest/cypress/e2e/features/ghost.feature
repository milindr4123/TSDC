Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Página - Page

    Scenario: As a user, I create and view a page.
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title "New Page in Ghost - title"
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        When  I click in Preview button
        Then  I should be redirected to the page
        When  I click in Editor button
        Then  I should be redirected to the page
        When  I click in Pages link again
        Then  I should be redirected to the pages