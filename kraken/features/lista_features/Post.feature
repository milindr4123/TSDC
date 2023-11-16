Feature: Creación Post y visualizacion

@user1 @web
Scenario: As a user, I create and view a post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  And  I am logged
  And  I navigate to post section
  And  I click in New Post link
  And  I click the Post settings button
  And  I click the Post settings button  
  And  I navigate to post section
  And  I click in New Post link
  When I Fill Post
  And  I navigate to post section
  Then I check Post Saved 
  Then I remove Post 
 


@user2 @web
Scenario: As a user, I create and view a post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  When  I am logged "<USERNAME1>" and "<PASSWORD1>"
  When  I click in Post link 
  When  I click in New Post link "//a[@href='#/editor/post/']"
  When  I click the Post settings button
  When  I enter Post URL "New Post in GHOST"
  When  I click the Post settings button
  When  I click in Post link 
  When  I click in Editor button  
  When  I Edit a Post "Es editado"
  When  I click in Post link 


@user3 @web
Scenario: As a user, I create and view a post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  When  I am logged "<USERNAME1>" and "<PASSWORD1>"
  When  I click in Post link 
  When  I click in New Post link "//a[@href='#/editor/post/']"
  When  I click the Post settings button
  When  I enter Post URL "New Post in GHOST"
  When  I click the Post settings button
  When  I click in Post link 
  When  I click in Editor button  
  When  I Edit a Post "Es editado"
  When  I Publish Post
  When  I click in Post link 



@user4 @web
Scenario: As a user, I create and view a post.
  Given I navigate to post "http://localhost:2368/ghost/#/signin"
  When  I am logged "<USERNAME1>" and "<PASSWORD1>"
  When  I click in Post link 
  When  I click in New Post link "//a[@href='#/editor/post/']"
  When  I click the Post settings button
  When  I enter Post URL "New Post in GHOST"
  When  I click the Post settings button
  When  I click in Post link 
  When  I click in Editor button  
  When  I Edit a Post "Es editado"
  When  I click the Post settings button
  When  I remove Post
  When  I click in Post link 
