const { After, AfterStep, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const faker = require('faker');
const fs = require('fs');
 
 
Before(async function() {
  this.deviceClient = new WebClient('edge', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.newMemberName = faker.internet.userName()
  this.newMemberEmail = faker.internet.email()
  this.newMemberLabel = faker.random.word()
  this.newMemberNote = faker.random.word()
  this.newTagName = faker.random.word()
  this.newTagDescription = faker.random.word()
  this.email = ""
  this.oldPassword = ""
  this.newPassword = ""
  this.folderName = "F3-S1-version-5"
  this.indexId = 0
  this.bigString = faker.lorem.paragraph()
  if (!fs.existsSync(`./reports/${this.folderName}`)) {
      fs.mkdirSync(`./reports/${this.folderName}`);
  }
  this.randomUrl = faker.internet.url();
})
 
AfterStep(async function (scenario) {
  wait(1000);
  let fileName = scenario.pickle.name;
  let time = Math.round(+new Date() / 1000);
  await this.driver.saveScreenshot(`./reports/${this.folderName}/${fileName}_${this.indexId}.png`);
  this.indexId = this.indexId + 1
});
 
function wait(ms) {
  const start = Date.now();
  let now = start;
  while ((now - start) < ms) { now = Date.now(); }
}

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

