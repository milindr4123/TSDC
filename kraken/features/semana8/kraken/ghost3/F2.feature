Feature: Creación, Edición, Publicación, Despublicación y Eliminación de un Post- Post

@user1 @web
Scenario: As a user, I create and view a post.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And  I am logged with version 3
  And I wait for 4 seconds
  And  I navigate to post section
  And I wait for 2 seconds
  And  I click in New Post link
  And I wait for 4 seconds
  And  I click the Post settings button
  And I wait for 2 seconds
  And  I come back to post section
  And I wait for 2 seconds
  And  I click in New Post link
  And I wait for 2 seconds
  When I Fill Post
  And I wait for 2 seconds
  And  I come back to post section
  And I wait for 2 seconds
  Then I select a post 

@user2 @web
Scenario: As a user, I create, edit and view a post.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And  I am logged with version 3
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
  And  I wait for 2 seconds
  And  I come back to post section
  And  I wait for 2 seconds
  And  I select a post
  And  I wait for 2 seconds
  And  I Edit a Post "es editado"
  And  I wait for 2 seconds
  And  I come back to post section
  And  I wait for 2 seconds
  Then I select a post
