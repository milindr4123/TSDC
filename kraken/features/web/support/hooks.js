const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const faker = require('faker');

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.newMemberName = faker.internet.userName()
  this.newMemberEmail = faker.internet.email()
  this.newMemberLabel = faker.random.word()
  this.newMemberNote = faker.random.word()
  this.newTagName = faker.random.word()
  this.newTagDescription = faker.random.word()
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
