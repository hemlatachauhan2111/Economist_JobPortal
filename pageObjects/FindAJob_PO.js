//FindAJob_PO, having methods specific to FindAJob page

var FindAJob_PO=function (){
    'use strict'

    this.openFindaJobUrl=function (){
     // launch Find a Job URL
        return browser.get(constants.common.URL+constants.common.FINDAJOB_URL).then(function () {
            browser.sleep(constants.sleep.s)
        })
    }

    this.searchJob=function (searchText){
        // Search job
        var searchBar=element(by.id(constants.findajob.ID_SearchJob))
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

    this.verifySearchedJobs=function (jobName){
        // verify searched job result
        var expected = element(by.css(constants.findajob.CSS_SearchJob)).getText().then(function (text){
            console.log("Text: "+text)
            return expect(text).toContain(jobName)

        })
    }


};
module.exports=FindAJob_PO;
