// Test file  where Testcases are scripted specific to "Home" page

describe('Home', function() {
    beforeAll(function (){

    })

    beforeEach(function (){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

        return testCommon_PO.openUrl().then(function () {
            return browser.sleep(constants.sleep.l)

        })
    })

    afterEach(function (){
        //jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it('Launch Economist Job Portal check page logo ', function() {
        var title;
        return testCommon_PO.openUrl().then(function () {
            title = element(by.className(constants.home.CLASSNAME_Logo))
            expect(title.isPresent()).toBe(true);
        })
    })

    it('Click SignIn and navigate to signIn Page', function() {
        return testHome_PO.verifyAndClickLogin()
    })

    it('Click Create Account and navigate to Create Account page', function() {
        return testHome_PO.verifyAndClickcreateAccount()
    })

    it('Search Job by valid designation and verify search result', function() {
        return testHome_PO.searchByDesignation(constants.home.TEXT_ValidSearch1).then(function (){
            return testHome_PO.verifySearchResult(constants.home.TEXT_ValidSearch1)
        })
    })

    it('Search Job by invalid designation and verify search result', function() {
        return testHome_PO.searchByDesignation(constants.common.TEXT_InvalidSearch).then(function () {
            return testHome_PO.verifyInvalidSearchResult(constants.common.TEXT_InvalidSearch)
        })
    })


    it('navigate to all Job pages or tabs',function (){
        return testHome_PO.verifynavigateToTabs()
    })

    it('Verify \'Browse Job by Sector\' Section',function (){
        return testHome_PO.verifyBrowseJobBSector()

    })
    it('Click and verify page of \'Browse job  by Sector\' ',function (){

        return testHome_PO.clickJobsBySector(constants.home.TEXT_ValidSearch2).then(function (){
            return testHome_PO.verifyJobsBySector(constants.home.TEXT_ValidSearch2)
        })

    })



});