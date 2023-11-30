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

    # Scenario: As a user, I create and publish a post.
    #     When  I click in Posts
    #     Then  I should be redirected to the Posts
    #     When  I Click the "New post" Button
    #     Then  I should be redirected to the new post
    #     When  I Enter Title "New Post in GHOST 3"
    #     And   I click the Settings Button
    #     Then  The Settings Menu should be opened
    #     And   I Click in Preview Button
    #     And   I Click in Editor Button
    #     And   I Click in Publish Button
    #     And   I Click in Continue, final review button
    #     And   I Click in Publish Post, right now button
    #     Then  I should be redirected to the Published Post

    # Scenario: As a user, I create, publish and remove a post.
    #     When  I click in Posts
    #     Then  I should be redirected to the Posts
    #     When  I Click the "New post" Button
    #     Then  I should be redirected to the new post
    #     When  I Enter Title "New Post in GHOST 4"
    #     And   I click the Settings Button
    #     Then  The Settings Menu should be opened
    #     And   I Click in Preview Button    
    #     And   I Click in Editor Button
    #     And   I Click in Publish Button
    #     And   I Click in Continue, final review button
    #     And   I Click in Publish Post, right now button
    #     Then  I should be redirected to the Published Post
    #     When  I Click in Back to Editor Link
    #     And   I click the Settings Button
    #     Then  The Settings Menu should be opened
    #     When  I click in the Delete Post
    #     And   I Click in the Delete Button
    #     Then  I should be redirected to the Posts    