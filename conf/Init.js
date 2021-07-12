//Init file where all PO and constant file are intialized

var Init=function (){
    'use strict';
    this.initPageObject=function (){
        var Common_PO=require('../pageObjects/Common_PO.js');
        global.testCommon_PO=new Common_PO();

        var Home_PO=require('../pageObjects/Home_PO.js');
        global.testHome_PO=new Home_PO();

        var JobAlerts_PO=require('../pageObjects/JobAlerts_PO.js');
        global.testJobAlerts_PO=new JobAlerts_PO();

        var JobsBlog_PO=require('../pageObjects/JobsBlog_PO.js');
        global.testJobsBlog_PO=new JobsBlog_PO();

        var SearchRecruiters_PO=require('../pageObjects/SearchRecruiters_PO.js');
        global.testSearchRecruiters_PO=new SearchRecruiters_PO();

        var FindAJob_PO=require('../pageObjects/FindAJob_PO.js');
        global.testFindAJob_PO=new FindAJob_PO();

    }

    this.initConstants=function (){
        var constants=require('../globals/constants.js');
        global.constants=constants;
    }

};
module.exports=Init;