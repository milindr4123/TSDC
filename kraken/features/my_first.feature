Feature: CRUD of Tags
  
@user4 @web
Scenario: Como usuario elimino un tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I am logged
  And I wait for 5 seconds
  And I navigate to tags section
  And I click the first tag
  When I click to delete the tag
  And I cancel to delete the tag
  And I click to delete the tag
  And I close delete tag modal
  And I click to delete the tag
  And I confirm to delete the tag
  Then I navigate to tags section
  
