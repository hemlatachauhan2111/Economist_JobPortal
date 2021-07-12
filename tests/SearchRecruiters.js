// Test file  where Testcases are scripted specific to "Search Recruiters" Tab

describe('Search Recruiters', function() {
    beforeAll(function (){

    })

    beforeEach(function (){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        return testSearchRecruiters_PO.openSearchRecruiterUrl().then(function () {
            return browser.sleep(constants.sleep.l)

        })
    })

    afterEach(function (){
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })


    it(' click \'Search Recruiters\' tab and verify page', function() {
        return testCommon_PO.clickNavigationTab(constants.searchrecruiter.TEXT_SearchRecruiter).then(function (){
            return expect(browser.getCurrentUrl()).toEqual(constants.common.URL+constants.common.SEARCHRECRUITER_URL);
        }).then(function () {
            return testCommon_PO.verifPageHeader(constants.searchrecruiter.TEXT_SearchRecruiter_Header)
        })
    })

    it(' Search valid recruiter and verify search result', function() {
        return testSearchRecruiters_PO.searchRecruiter(constants.searchrecruiter.TEXT_ValidSearch).then(function (){
            return testSearchRecruiters_PO.verifySearchedRecruiter(constants.searchrecruiter.TEXT_ValidSearch)
        })
    })


    it(' Search invalid recruiter and verify search result', function() {
        return testSearchRecruiters_PO.searchRecruiter(constants.searchrecruiter.TEXT_InvalidSearch).then(function (){
            return testSearchRecruiters_PO.verifyInvalidSearchResult(constants.searchrecruiter.TEXT_InvalidSearch)
        })
    })


});