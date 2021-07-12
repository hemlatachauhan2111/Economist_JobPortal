//JobAlerts_PO, having methods specific to Search Recruiters page

var SearchRecruiters_PO=function (){
    'use strict'


    this.openSearchRecruiterUrl=function () {

        return browser.get(constants.common.URL + constants.common.SEARCHRECRUITER_URL).then(function () {
            browser.sleep(constants.sleep.s)

        })
    }

    this.searchRecruiter=function (searchText){
        var searchBar=element(by.id(constants.searchrecruiter.ID_SEARCH))
        return searchBar.isPresent().then(function (present){
            if(present) {
                //searchBar.sendKeys(searchText + "\n");
                searchBar.sendKeys(searchText +"\n");
                return browser.sleep(constants.sleep.l)
            }
            else
                Promise.reject("search bar not present")
        })
    }

    this.verifySearchedRecruiter=function (searchedText){
        var expected = element(by.css(constants.searchrecruiter.CSS_SearchedResult)).getText().then(function (text){
            console.log("Text: "+text)
            return expect(text).toContain(searchedText)

        })
    }

    this.verifyInvalidSearchResult=function (searchedText){
        var exp;
        var expected = element.all(by.css(constants.searchrecruiter.CSS_InvalidSearchResult)).get(0).all(by.tagName('p')).get(0).getText().then(function (text){
            exp=text.trim();
            console.log("Text: "+exp)
            return expect(text).toContain(searchedText)
        })
    }

};
module.exports=SearchRecruiters_PO;
