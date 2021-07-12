// Test file  where Testcases are scripted specific to "Jobs Blog" page

describe('Jobs Blog', function() {

    beforeAll(function (){

    })

    beforeEach(function (){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        return testJobsBlog_PO.openJobsBlogUrl().then(function () {
            return browser.sleep(constants.sleep.l)

        })
    })

    afterEach(function (){
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it(' click and verify page of \'Jobs Blog\' tab', function() {
        return testCommon_PO.openUrl().then(function () {
            return browser.sleep(constants.sleep.l)
        }).then(function () {
            return testCommon_PO.clickNavigationTab(constants.jobblogs.TEXT_Jobsblog)
        }).then(function (){
            return expect(browser.getCurrentUrl()).toEqual(constants.common.URL+constants.common.JOBBLOGS_URL);
        }).then(function () {
            return testCommon_PO.verifPageHeader(constants.jobblogs.TEXT_Jobsblog_Header)
        })
    })


});