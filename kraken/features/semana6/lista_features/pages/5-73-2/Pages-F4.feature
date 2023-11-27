Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Página - Page

@user1 @web
Scenario: As a user, I create, edit, delete and view a page.
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And   I wait for 5 seconds
  And  I am logged
  And   I wait for 2 seconds
  When  I navigate to section page
  And   I wait for 3 seconds
  When  I create a page
  And   I wait for 3 seconds  
  When  I enter title "New Page in Ghost - title"
  And   I wait for 3 seconds
  When  I navigate to section page
  And   I wait for 5 seconds
  And  I select a page
  And   I wait for 5 seconds
  And  I click in Preview button
  And   I wait for 5 seconds
  When  I click in Editor button
  And   I wait for 3 seconds  
  When  I enter title "Edit title - Page Ghost"
  And   I wait for 3 seconds
  When  I click in Preview button
  And   I wait for 5 seconds
  When  I click in Editor button
  And   I wait for 3 seconds
  When  I click the Page settings button
  And   I wait for 1 seconds
  When  I remove Post
  Then  I navigate to section page