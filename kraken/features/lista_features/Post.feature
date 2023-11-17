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
