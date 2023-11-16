const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const faker = require('faker');

Before(async function() {
  this.deviceClient = new WebClient('edge', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.newMemberName = faker.internet.userName()
  this.newMemberEmail = faker.internet.email()
  this.newMemberLabel = faker.random.word()
  this.newMemberNote = faker.random.word()
  this.newTagName = faker.random.word()
  this.newTagDescription = faker.random.word()
  this.email = "br.garciam1@uniandes.edu.co"
  this.oldPassword = "0123456789"
  this.newPassword = "9876543210"
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
