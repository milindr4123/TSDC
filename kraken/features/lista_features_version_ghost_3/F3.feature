Feature: Change password
  
@user1 @web
Scenario: Cambiar passsword de usuario
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged with version 3
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put my old password
  And I wait for 3 seconds
  And I put my old password
  And I put my new password
  And I confirm my new password
  And I click to accept change the password
  And I wait for 1 seconds
  And I wait for 2 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to logout
  And I wait for 2 seconds
  Then I login with new credentials
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  And I put my old password
  And I invert passwords
  And I wait for 3 seconds
  And I put my old password
  And I put my new password
  And I confirm my new password
  And I click to accept change the password
  And I wait for 1 seconds
  And I wait for 2 seconds
  And I click in done button
  And I wait for 2 seconds