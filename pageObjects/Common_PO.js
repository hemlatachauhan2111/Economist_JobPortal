// Page object file where all functions/methods are present e.g.
// This is common PO, having methods common for all pages e.g. open URL()

var Common_PO=function (){
    'use strict'

    this.openUrl=function (){
        //logger.info("Opening URL")
        return browser.get(constants.common.URL).then(function () {
            browser.sleep(constants.sleep.s)
        })
    }

    this.clickNavigationTab=function (tabname) {
        return element.all(by.cssContainingText(constants.common.CSS_NAVIGATIONTAB, tabname)).isPresent().then(function (present) {
            return expect(present).toBe(true)
        }).then(function () {
            return element.all(by.cssContainingText(constants.common.CSS_NAVIGATIONTAB, tabname)).click()
        }).then(function () {
            browser.sleep(constants.sleep.s)
        })
    }
    this.generateRandomNumber = function(length){
        return Math.floor(Math.random()*Math.pow(10,length))
    };

    this.verifPageHeader=function (expectedText){
        return element(by.tagName(constants.common.TAG_H1)).getText().then(function (text){
            console.log("Page Header : "+ text)
            return expect(text).toContain(expectedText)
        })
    }

};

module.exports=Common_PO;
