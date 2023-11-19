Feature: Creación, Edición, Publicación, Despublicación y Eliminación de una Página - Page

@user1 @web
Scenario: As a user, I create and view a page.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And  I am logged
  And   I wait for 2 seconds
  And  I navigate to section page
  And   I wait for 3 seconds
  And  I create a page
  And   I wait for 3 seconds
  And  I click the Page settings button
  And   I wait for 1 seconds
  And  I enter Page URL "New Page in GHOST"
  And   I wait for 2 seconds
  And  I click the Page settings button
  And   I wait for 5 seconds
  And  I navigate to section page
  And   I wait for 5 seconds
  And  I select a page
  And   I wait for 5 seconds
  And  I click in Preview button
  And   I wait for 5 seconds
  When  I click in Editor button
  And   I wait for 3 seconds
  Then  I navigate to section page
  And   I wait for 3 seconds
  And  I select a page