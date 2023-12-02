Feature: Create Post, edit Post y view Post

@user2 @web
Scenario: As a user, I create, edit and view a post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  And  I am logged
  And  I wait for 4 seconds
  And  I navigate to post section 
  And  I wait for 2 seconds
  And  I click in New Post link
  And  I wait for 2 seconds
  And  I click the Post settings button
  And  I wait for 2 seconds
  And  I enter Post URL "New Post in GHOST"
  And  I wait for 2 seconds
  And  I click the Post settings button
  And  I wait for 2 seconds
  When I Fill Post
  And  I wait for 3 seconds
  And  I navigate to post section
  And  I wait for 5 seconds
  And  I select a post
  And  I wait for 2 seconds
  And  I Edit a Post "es editado"
  And  I wait for 2 seconds
  And  I click in Post link 
  And  I wait for 2 seconds
  Then I select a post