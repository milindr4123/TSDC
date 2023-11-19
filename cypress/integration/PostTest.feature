Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Publicación - Post
     
    Scenario: As a user, I create and view a post.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        And   I Click in Preview Button
        And   I Click in Editor Button
        Then  I should be redirected to the Post
        When  I Click in Posts link again
        Then  I should be redirected to the Posts



    Scenario: As a user, I create, edit and view a post.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 2"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        When  I Enter Edit Title " es editado"
        And   I Click in Preview Button
        And   I Click in Editor Button
        Then  I should be redirected to the Post
        When  I Click in Posts link again
        Then  I should be redirected to the Posts

    Scenario: As a user, I create and publish a post.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 3"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        And   I Click in Preview Button
        And   I Click in Editor Button
        And   I Click in Publish Button
        And   I Click in Continue, final review button
        And   I Click in Publish Post, right now button
        Then  I should be redirected to the Published Post

    Scenario: As a user, I create, publish and remove a post.
       Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 4"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        And   I Click in Preview Button
        And   I Click in Editor Button
        And   I Click in Publish Button
        And   I Click in Continue, final review button
        And   I Click in Publish Post, right now button
        Then  I should be redirected to the Published Post
        When  I Click in Back to Editor Link
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click in the Delete Post
        And   I Click in the Delete Button
        Then  I should be redirected to the Posts

    Scenario: As a user, I create, publish, unpublish and view a post.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title "New Post in GHOST 4"
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        And   I Click in Preview Button
        And   I Click in Editor Button
        And   I Click in Publish Button
        And   I Click in Continue, final review button
        And   I Click in Publish Post, right now button
        Then  I should be redirected to the Published Post
        When  I Click in Back to Editor Link
        And   I Click in Unpublish Button
        And   I Click in Unpublish and revert to private draft Button
        When  I Click in Posts link again
        Then  I should be redirected to the Posts