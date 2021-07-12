//JobAlerts_PO, having methods specific to JobAlerts page

var JobAlerts_PO=function (){
    'use strict'

    this.openJobAlertsUrl=function (){

        return browser.get(constants.common.URL+constants.common.JOBALERTS_URL).then(function () {
            browser.sleep(constants.sleep.s)
        })
    }


};
module.exports=JobAlerts_PO;
