const config = require('./protractor.conf').config;
var jasmineReporters = require('jasmine-reporters');

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--headless', '--no-sandbox']
    }
};

config.onPrepare = function() {
  require('ts-node').register({
    project: require('path').join(__dirname, './tsconfig.json')
  });
  var jasmineReporters = require('jasmine-reporters');
  jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: '../report',
    filePrefix: 'test-result'
  }));
  // jasmine.getEnv().addReporter(
  //   new jasmineReporters.JUnitXmlReporter(null, true, true, 'test-report.xml')
  // );
}

exports.config = config;
