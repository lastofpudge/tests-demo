const webdriverio = require('webdriverio');
const path = require('path');

let options = {
    desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled:true,
    }
};

webdriverio
    .remote(options)
    .init() 
    .url('https://test.io/')
    .saveScreenshot(path.join(__dirname,'/index.png')).end();
