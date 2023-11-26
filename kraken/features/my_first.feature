Feature: CRUD of members

@user21 @web
Scenario: Cambiar la bio y dejarla vacía
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put an empty bio in bio profile input
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see an empty bio profile