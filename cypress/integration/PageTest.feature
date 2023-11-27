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
        When  I click in Editor button
        Then  I should be redirected to the page
        When  I click in Pages link again
        Then  I should be redirected to the pages

    Scenario: As a user, I create, edit and view a page.
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title "New Page in Ghost - title 2"
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        When  I click in Preview button
        When  I click in Editor button
        Then  I should be redirected to the page
        When  I enter New title " Edit"
        When  I click in Preview button
        When  I click in Editor button
        Then  I should be redirected to the page
        When  I click in Pages link again
        Then  I should be redirected to the pages

    Scenario: As a user, I create, publish and view a page.
        Given I navigate to page Ghost
        When  I enter email
        And   I enter password
        And   I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title "New Page in Ghost - title 3"
        And   I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        And   I click in Preview button
        And   I click in Editor button 
        And   I click in Publish button
        And   I click in Continue, final review button
        And   I click in Publish page, right now button    
        And   I click in Published Page
        Then  I should be redirected to the Published page

    Scenario: As a user, I create, edit, delete and view a page.
        Given I navigate to page Ghost
        When  I enter email
        And   I enter password
        And   I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title "New Page in Ghost - title 4"
        And   I click the Page settings button
        Then  The settings menu should be opened
        When  I click in the Delete page button
        And   I click in the Delete button
        Then  I should be redirected

    Scenario: As a user, I create, publish and unpublish a page.
        Given I navigate to page Ghost
        When  I enter email
        And   I enter password
        And   I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title "New Page in Ghost - title 5"
        And   I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        And   I click in Preview button
        And   I click in Editor button 
        And   I click in Publish button
        And   I click in Continue, final review button
        And   I click in Publish page, right now button
        And   I click in Back to Editor link
        And   I click in Unpublish button
        And   I click in Unpublish and revert to private draft button
        And   I click in Pages link again
        Then  I should be redirected

    Scenario: As a user, I create page with long title.
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter long title in Page
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        Then  Preview button does not exist

    Scenario: I create and edit a page with a title longer than 255 characters.
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter short title in Page
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I click again on the page settings button
        And   I edit title in Page
        And   I click in Publish button
        Then  A validation message will be displayed

    Scenario: Create post with invalid publication Date
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title on New Page
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I insert an invalid publication date format
        And   I click on hour field
        Then  A validation date format will be displayed

    Scenario: Create post with invalid publication Hour
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title on New Page
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I insert an invalid publication hour
        Then  A validation hour format will be displayed

    Scenario: Create post without author
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title on New Page
        When  I click the Page settings button
        Then  The settings menu should be opened
        When  I delete author
        Then  The validation message "At least one author is required." will be displayed

    Scenario: Insert invalid URL in Meta data
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title on New Page
        When  I click the Page settings button
        Then  The settings menu should be opened       
        When  I Click in Meta data
        When  I Enter invalid information in Canonical URL
        Then  Validation message will be displayed

    Scenario: Create Page with invalid information on Excerpt
        Given I navigate to page Ghost
        When  I enter email
        When  I enter password
        When  I click in Sign in button
        Then  I should be redirected to the dashboard
        When  I click in Pages link
        Then  I should be redirected to the pages
        When  I click the "New page" link
        Then  I should be redirected to the new page
        When  I enter title on New Page
        When  I click the Page settings button
        Then  The settings menu should be opened       
        When  I Enter invalid information on Excerpt
        Then  Validation message will be displayed