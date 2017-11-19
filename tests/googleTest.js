module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
    browser.end();
  },

  'step one' : function (browser) {
   browser.url('https://www.google.com')
         .waitForElementVisible('body', 10000)
         .setValue('input[type=text]', 'nightwatch')
         //.waitForElementVisible('button[name=btnG]', 10000)
         //.moveToElement('input[name=btnK]', 100, 10)
         .click('img[id=hplogo]')
         .pause(1000)
         .execute("document.getElementById('tsf').submit();")
         .pause(1000)
      .assert.containsText('#main', 'Night Watch');
  }
};