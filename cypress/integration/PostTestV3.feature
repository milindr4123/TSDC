Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Publicación - Post

    Background: Login in Ghost web app V3
        Given I navigate to Ghost V3
        When  I Enter Address Email Login
        And   I Enter Password Login
        And   I Click in Sign In button
        Then  I Should be redirected to Dashboard

    Scenario: As a user, I create and view a post.
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        And   I Click in Preview Button
        And   I click on the Close settings
        And   I click in Posts
        And   I should be redirected to the Posts

    Scenario: As a user, I create, edit and view a post.
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 2"
        And   I click the Settings Button
        And   I Enter Edit Title "New Post in GHOST 2 - Edit title"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        And   I Click in Preview Button
        And   I click on the Close settings
        And   I click in Posts
        Then  I should be redirected to the Posts

    Scenario: As a user, I create and publish a post.
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 3"
        And  I click in any screen post
        Then  I click publish button
        Then  I click publish button
        Then  I should notificate publish
 
 
    Scenario: As a user, I create and publish a post.
         When  I click in Posts
         Then  I should be redirected to the Posts
         When  I Click the "New post" Button
         Then  I should be redirected to the new post
         When  I Enter Title "New Post in GHOST 3"
         When  I click in any screen post
         Then  I click publish button
         Then  I click publish button
         Then  I should notificate publish
         Then I close notificate publish
         When   I click the Settings Button
         And I click delete button
         And I click delete button
         Then  I click in Posts  