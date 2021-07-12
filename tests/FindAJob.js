// Test file  where Testcases are scripted specific to "Find A Job" Tab

describe('FindAJob', function() {
    beforeAll(function (){

    })

    beforeEach(function (){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        return testCommon_PO.openUrl().then(function () {
            return browser.sleep(constants.sleep.l)
        }).then(function (){
            return testFindAJob_PO.openFindaJobUrl()
        })
    })

    afterEach(function (){
        //  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it(' Click \'Find a Job tab and verify page ', function() {
        return testCommon_PO.clickNavigationTab(constants.findajob.TEXT_HEADER).then(function () {
            return expect(browser.getCurrentUrl()).toEqual(constants.common.URL+constants.common.FINDAJOB_URL);
        }).then(function (){
            return testCommon_PO.verifPageHeader(constants.findajob.TEXT_Jobs)
        })
    })


    it(' Search for Job and verify searched Job on \'Find a Job\' page ', function() {
        return testFindAJob_PO.searchJob(constants.findajob.TEXT_ForSearch).then(function (){
            return testFindAJob_PO.verifySearchedJobs(constants.findajob.TEXT_ForSearch)
        })
    })


});