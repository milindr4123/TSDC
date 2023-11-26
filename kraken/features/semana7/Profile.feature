Feature: Change password
  
@user1 @web
Scenario: Cambiar passsword de usuario
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I click to change password
  And I wait for 3 seconds
  And I put my old password
  And I put my new password
  And I confirm my new password
  And I click to accept change the password
  And I click to save and close
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
  And I click to change password
  And I invert passwords
  And I wait for 3 seconds
  And I put my old password
  And I put my new password
  And I confirm my new password
  And I click to accept change the password
  And I click to save and close
  And I wait for 2 seconds
  And I click in done button


@user2 @web
Scenario: Cambiar nombre de usuario por uno correcto
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a random string in profile name
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new name

@user3 @web
Scenario: Cambiar nombre de usuario por uno muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big string in profile name
  And I click in somewhere profile place
  Then I see a too long error name
  
@user4 @web
Scenario: Cambiar localizacion por una correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a random string in location name
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new location name

@user5 @web
Scenario: Cambiar localizacion por una muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big string in location name
  And I click in somewhere profile place
  Then I see a too long error name

@user6 @web
Scenario: Cambiar email por uno invalido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put an invalid email in email input
  And I wait for 3 seconds
  Then I see an invalid email error

@user7 @web
Scenario: Cambiar email por uno muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big email in email input
  And I wait for 3 seconds
  Then I see an invalid email error

@user8 @web
Scenario: Cambiar la url del website por una incorrecta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big website in website input
  And I wait for 3 seconds
  Then I see an url error

@user9 @web
Scenario: Cambiar la url del website por una muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big website in website input
  And I wait for 3 seconds
  Then I see an url error

@user10 @web
Scenario: Cambiar la url del website por una correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put a website in website profile input
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new website url

@user11 @web
Scenario: Cambiar la url del website por una correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put a website in website profile input
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new website url

@user12 @web
Scenario: Cambiar slug por uno correcto
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put a slug
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new slug

@user13 @web
Scenario: Cambiar la url del perfil de Facebook con una url correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put a facebook profile in facebook profile input
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new facebook url

@user14 @web
Scenario: Cambiar la url del perfil de Facebook con una url muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put a big facebook profile in facebook profile input
  Then I see a facebook profile error

@user15 @web
Scenario: Cambiar la url del perfil de Facebook con una url incorrecta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I a put an invalid facebook profile in facebook profile input
  Then I see a facebook profile error

@user16 @web
Scenario: Cambiar la url del perfil de Twitter con una url incorrecta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put an invalid twitter profile in twitter profile input
  Then I see a twitter profile error

@user17 @web
Scenario: Cambiar la url del perfil de Twitter con una url muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When  I put a big twitter user profile in twitter profile input
  Then I see a twitter profile error

@user18 @web
Scenario: Cambiar la url del perfil de Twitter con una url correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a twitter profile in twitter profile input
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new twitter url

@user19 @web
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

@user20 @web
Scenario: Cambiar la bio con un tamaño muy grande
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a big bio in bio profile input
  Then I see a bio profile error

@user21 @web
Scenario: Cambiar la bio del perfil de manera correcta
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I am logged
  And I wait for 5 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  When I put a bio in bio profile input
  And I wait for 3 seconds
  And I click to save and close
  And I wait for 1 seconds
  And I click in done button
  And I wait for 1 seconds
  And I click user settings
  And I click to go to profile
  And I wait for 3 seconds
  Then I see the new bio url
