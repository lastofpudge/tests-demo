var webdriverio = require('webdriverio');
var path = require('path');

var options = {
    desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled:true,
    }
};

var ms = 300;
var state = null;

var result = webdriverio
    .remote(options)
    .init() 
    .url('https://url.test/')
    .saveScreenshot(path.join(__dirname,'/index.png')).end();
