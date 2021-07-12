//JobAlerts_PO, having methods specific to JobsBlog page

var JobsBlog_PO=function (){
    'use strict'

    this.openJobsBlogUrl=function () {

        return browser.get(constants.common.URL + constants.common.JOBBLOGS_URL).then(function () {
            browser.sleep(constants.sleep.s)

        })
    }


};
module.exports=JobsBlog_PO;
