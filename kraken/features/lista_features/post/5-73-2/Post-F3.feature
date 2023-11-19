Feature: Create Post, edit Post, assig tag to a post y view Post

@user3 @web
Scenario: As a user,  Create Post, edit Post, assig tag to a menber y view Post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  And  I am logged
  And  I wait for 4 seconds
  And  I navigate to tags section
  And  I wait for 2 seconds
  And  I click to create a tag
  And  I wait for 2 seconds
  And  I fill just name field for public tag
  And  I wait for 2 seconds
  When I click to save
  And  I wait for 2 seconds
  And I navigate to tags section
  And  I wait for 2 seconds
  And  I navigate to post section 
  And  I wait for 2 seconds
  And  I click in New Post link
  And  I wait for 2 seconds
  And  I click the Post settings button
  And  I wait for 2 seconds
  And  I assign tag to post
  And  I wait for 2 seconds
  And  I enter Post URL "New Post in GHOST"
  And  I wait for 2 seconds
  And  I click the Post settings button
  And  I wait for 2 seconds
  And  I navigate to post section  
  And  I wait for 2 seconds
  And  I navigate to post section
  And  I wait for 2 seconds
  And  I select a post
  And  I wait for 2 seconds
  When I Fill Post "Primer Post"
  And  I wait for 2 seconds
  And  I navigate to post section
  And  I wait for 2 seconds
  And  I select a post
  And  I wait for 2 seconds
  And  I Edit a Post "es editado"
  And  I wait for 2 seconds
  And  I click in Post link 
  And  I wait for 2 seconds
  Then I select a post