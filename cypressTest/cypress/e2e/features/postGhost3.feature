Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Página - Page

    Scenario: As a user, I create and view a page.
        Given I navigate to page Ghost 3.42.
        When  I enter Email Address
        And   I enter Password
        And   I click in Sign In button
        Then  I should be redirected to the View Site
        When  I click in Pages view
        Then  I should be redirected to the pages view
        When  I click the "New page" button
        Then  I should be redirected to the create new page
        When  I enter title page "New Page in Ghost - title"
        And   I click the Page settings
        Then  The menu settings should be opened
        And   I click the Page settings again     
        And   I click in Preview Button
        When  I click on the close settings
        When  I click in Pages
        Then  I should be redirected to the pages view

    Scenario: As a user, I create, edit and view a page.
        Given I navigate to page Ghost 3.42.
        When  I enter Email Address
        And   I enter Password
        And   I click in Sign In button
        Then  I should be redirected to the View Site
        When  I click in Pages view
        Then  I should be redirected to the pages view
        When  I click the "New page" button
        Then  I should be redirected to the create new page
        When  I enter title page "New Page in Ghost - title 2"
        And   I click the Page settings        
        When  I edit title " Edit"
        And   I click the Page settings
        Then  The menu settings should be opened  
        And   I click in Preview Button
        When  I click on the close settings
        When  I click in Pages
        Then  I should be redirected to the pages view

    Scenario: As a user, I create, publish and view a page.
        Given I navigate to page Ghost 3.42.
        When  I enter Email Address
        And   I enter Password
        And   I click in Sign In button
        Then  I should be redirected to the View Site
        When  I click in Pages view
        Then  I should be redirected to the pages view
        When  I click the "New page" button
        Then  I should be redirected to the create new page
        When  I enter title page "New Page in Ghost - title 3"
        And   I click the Page settings
        And   I click in Publish
        And   I click in Publish Button
        And   I click the Page settings
        Then  The menu settings should be opened  
        And   I click in Preview Button
        When  I click on the close settings
        When  I click in Pages
        Then  I should be redirected to the pages view

    Scenario: As a user, I create, edit, delete and view a page.
        Given I navigate to page Ghost 3.42.
        When  I enter Email Address
        And   I enter Password
        And   I click in Sign In button
        Then  I should be redirected to the View Site
        When  I click in Pages view
        Then  I should be redirected to the pages view
        When  I click the "New page" button
        Then  I should be redirected to the create new page
        When  I enter title page "New Page in Ghost - title 4"
        And   I click the Page settings        
        When  I edit title " Edit"
        And   I click the Page settings
        Then  The menu settings should be opened  
        And   I click in Preview Button
        When  I click in the Delete Page Button      
        And   I click in the Delete Button
        Then  I should be redirected Pages

    Scenario: As a user, I create, publish and unpublish a page.
        Given I navigate to page Ghost 3.42.
        When  I enter Email Address
        And   I enter Password
        And   I click in Sign In button
        Then  I should be redirected to the View Site
        When  I click in Pages view
        Then  I should be redirected to the pages view
        When  I click the "New page" button
        Then  I should be redirected to the create new page
        When  I enter title page "New Page in Ghost - title 5"
        And   I click the Page settings
        And   I click in Publish
        And   I click in Publish Button
        And   I click in Unpublish radio button
        And   I click in Unpublish Button
        And   I click in Publish
        And   I click the Page settings
        Then  The menu settings should be opened  
        And   I click in Preview Button
        When  I click on the close settings
        When  I click in Pages
        Then  I should be redirected to the pages view