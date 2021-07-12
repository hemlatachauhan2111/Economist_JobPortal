// Config file where spec file is mentioned to run the Testcases
// Also declare browser capability , report generator

var jasmineReporters=require('jasmine-reporters');
var HTMLreport=require('protractor-html-reporter-2');
var fs=require('fs-extra');

exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },


    framework: 'jasmine2',
    stackTrace:true,

    specs: ['../tests/Home.js',
            '../tests/FindAJob.js',
            '../tests/JobAlerts.js',
            '../tests/JobsBlog.js',
            '../tests/SearchRecruiters.js',
           ],


    jasmineNodeOpts: {
        showColors:true,
        defaultTimeoutInterval: 300000,
        isVerbose:true,
    },

    onPrepare:function (){
        browser.manage().window().maximize();  //maximize window

        var Init=require('./Init.js');
        global.init= new Init();
       // global.init=init;
        init.initConstants();
        init.initPageObject()


        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: '../reports/xml'
        }));


        var fs = require('fs-extra');
        fs.emptyDir('../reports/screenshots/', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('../reports/screenshots/Fail_' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer.from(png, 'base64'));
                            stream.end();
                        })
                    });
                }
            }
        });


        browser.waitForAngularEnabled(false);

    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: '../reports',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './reports/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('../reports/xml/xmloutput.xml', testConfig);
        });
    },

};