// Test file  where Testcases are scripted specific to "Job Alerts" page

describe('Job Alerts', function() {

    beforeAll(function (){

    })

    beforeEach(function (){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        return testJobAlerts_PO.openJobAlertsUrl().then(function () {
            return browser.sleep(constants.sleep.l)

        })
    })

    afterEach(function (){
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it(' click Job Alerts tab and verify successful navigation', function() {
        return testCommon_PO.openUrl().then(function () {
            return browser.sleep(constants.sleep.l)
        }).then(function () {
            return testCommon_PO.clickNavigationTab(constants.jobalerts.TEXT_jobAlerts)
        }).then(function () {
            return expect(browser.getCurrentUrl()).toEqual(constants.common.URL+constants.common.JOBALERTS_URL);
        }).then(function () {
            return testCommon_PO.verifPageHeader(constants.jobalerts.TEXT_JobAlert_Header)
        })
    })

});