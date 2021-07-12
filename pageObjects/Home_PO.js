//Home_PO, having methods specific to Home page

var Home_PO=function (){
    'use strict'


    this.clickLogin=function () {
        // check for click Sign in
        return element(By.linkText(constants.home.TEXT_SignIn)).click().then(function () {
            browser.sleep(constants.sleep.s)
        })
    }

    this.verifyAndClickLogin=function (){
        // check for Sign in page
        return testHome_PO.clickLogin().then(function () {
            return element.all(by.tagName(constants.common.TAG_H1)).get(0).getText()
        }).then(function (text){
            console.log("SignIn Header : "+ text)
            return expect(text).toEqual(constants.home.TEXT_SignIn)
        })
    }


    this.verifyAndClickcreateAccount=function (){
        //click create Account and verify page
        return element(By.linkText(constants.home.TEXT_CreateAccount)).click().then(function () {
            return browser.sleep(constants.sleep.s)
        }).then(function (){
            return expect(element(by.id(constants.home.ID_CreateAccount)).isPresent()).toBe(true);
        })
    }

    this.clickSearchButton=function (){
        // click on search button
        return element(by.className(constants.home.CLASSNAME_Submit)).click();
    }

    this.verifySearchResult=function (expectedText){
        //verify search result page
        var expected = element.all(by.cssContainingText(constants.home.CSS_SearchText,expectedText))
        var expectedList=element.all(by.cssContainingText(constants.home.CSS_SearchList,expectedText))
        return expect(expected.isPresent()).toBe(true).then(function (){
            return expect(expectedList.isPresent()).toBe(true)

        })
    }

    this.verifyInvalidSearchResult=function (notFoundText){
        // verify search result of invalid text
        var exp;
        var invalidMsg=constants.home.TEXT_InvalidSearch+"'"+notFoundText+"'"
        var expected = element.all(by.css(constants.home.CSS_SearchText)).get(0).getText().then(function (text){
            exp=text.trim();
            console.log("Text: "+exp)
            return expect(exp).toEqual(invalidMsg)
        })
    }

    this.searchByDesignation=function (searchText){

        var searchBar=element(by.id(constants.home.ID_Search))
        return searchBar.isPresent().then(function (present){
            if(present) {
                //searchBar.sendKeys(searchText + "\n");
                searchBar.sendKeys(searchText );
                return testHome_PO.clickSearchButton().then(function (){
                    return browser.sleep(constants.sleep.xl)
                })
            }
            else
                Promise.reject("search bar not present")
        })
    }

    this.verifynavigateToTabs=function () {
        var expected =constants.home.LIST_NavigationTab
        var opt=expected.split(',')
        var result = true;
        return element.all(by.css('.primary-nav__link')).each(function (elm, index) {
            return elm.getText().then(function (text) {
                //console.log("Text: " + text)
                //console.log("opt: " + opt[index])
                return expect(text).toEqual(opt[index])

            })
        })
    }


    this.clickJobsBySector=function (sectorName){
        var sector = element.all(by.cssContainingText(constants.home.CSS_JobBySector,sectorName))
        return expect(sector.isPresent()).toBe(true).then(function () {
            return sector.get(0).all(by.tagName(constants.common.TAG_Anchor)).click()
        }).then(function () {
            browser.sleep(constants.sleep.s)
        })
    }

    this.verifyJobsBySector=function (sectorName){
        var expected = element(by.css(constants.home.CSS_JobSectorPage)).getText().then(function (text){
            console.log("Text: "+text)
            return expect(text).toContain(sectorName)

        })
    }

    this.verifyBrowseJobBSector=function () {
        var expected = constants.home.LIST_SECTOR
        var opt=expected.split(',')
        return element(by.className(constants.home.CLASSNAME_SECTOR_BLOCK)).isPresent().then(function (present) {
            return expect(present).toBe(true)
        }).then(function () {
            return element.all(by.css(constants.home.CSS_SectorList)).each(function (elm, index) {
                return elm.getText().then(function (text) {
                    console.log("Text: " + text)
                    console.log("expected"+opt[index])
                    expect(text).toContain(opt[index])
                })
            })
        })
    }

};
module.exports=Home_PO;
