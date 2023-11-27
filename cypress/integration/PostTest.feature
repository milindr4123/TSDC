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

    Scenario: I create post with dinamic title.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        And   I Click in Preview Button
        And   I Click in Editor Button
        Then  I should be redirected to the Post
        When  I Click in Posts link again
        Then  I should be redirected to the Posts

    Scenario: I create and edit post with dinamic title.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        When  I Enter Title on Post
        And   I Click in Preview Button
        And   I Click in Editor Button
        Then  I should be redirected to the Post

    Scenario: Create post with invalid publication date - Date
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened        
        When  I insert an invalid publication date
        Then  A validation date will be displayed

    Scenario: Create post without author
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened        
        When  I delete author
        Then  The validation message "At least one author is required." will be displayed

    Scenario: Create post with long title
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I enter long title in Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button        
        Then  Don't save and preview button does not exist

    Scenario: Create and edit a post with a title longer than 255 characters.
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I enter short title in Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened
        When  I click again on the Settings Button
        When  I enter long title in Post
        And   I Click in Publish Button
        Then  A validation message "Validation failed: Title cannot be longer than 255 characters." will be displayed

    Scenario: Insert invalid URL in Meta data
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened        
        When  I Click in Meta data
        When  I Enter invalid information in Canonical URL
        Then  Validation message will be displayed

    Scenario: Create Page with invalid information on Excerpt
        Given I navigate to Ghost
        When  I Enter Address Email
        And   I Enter Password
        And   I Click in Sign In
        Then  I should be redirected to Dashboard
        When  I click in Posts
        Then  I should be redirected to the Posts
        When  I Click the "New post" Button
        Then  I should be redirected to the new post
        When  I Enter Title on Post
        And   I click the Settings Button
        Then  The Settings Menu should be opened        
        When  I Enter invalid information on Excerpt
        Then  Validation message will be displayed