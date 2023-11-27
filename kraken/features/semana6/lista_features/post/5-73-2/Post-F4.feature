Feature: Creacion post and publish post

@user4 @web
Scenario: As a user, I create and view a post.
  Given I navigate to post "http://localhost:3002/ghost/#/signin"
  When  I am logged
  And  I wait for 4 seconds
  And  I navigate to post section
  And  I wait for 2 seconds
  And  I click in New Post link
  And  I wait for 2 seconds
  And  I Fill Post "Mi Cuarto Post"
  And  I wait for 2 seconds
  And  I click the Post settings button 
  And  I wait for 2 seconds
  And  I enter Post URL "New Post in GHOST"
  And  I wait for 2 seconds
  And  I click the Post settings button
  And  I wait for 2 seconds
  And  I navigate to post section
  And  I wait for 2 seconds
  When I select a post
  And  I wait for 2 seconds
  And  I Publish Post
  And  I wait for 2 seconds
  Then   I navigate to post section
  And  I wait for 2 seconds
  And I check posts published
  And  I wait for 2 seconds
  And  I select a post