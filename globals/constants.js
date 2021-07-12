// Constant file where locators values are defined specific to the module e.g.
// Common - constants which are common in all pages
// home - constants specific to home page
// findajob -constants specific to findajob page

module.exports = (function (){

   var constants ={};
   constants.sleep={
       xs:1000,
       s:2000,
       m:5000,
       l:8000,
       xl: 20000,
   }

   constants.common={
       //URL
       URL:'https://jobs.economist.com',
       FINDAJOB_URL:'/jobs/',
       JOBALERTS_URL:'/newalert/',
       SEARCHRECRUITER_URL:'/employers/',
       JOBBLOGS_URL:'/careers/',

       //CSS
       CSS_NAVIGATIONTAB:'.primary-nav__link',

       //TAG
       TAG_H1:'h1',
       TAG_Anchor:'a',

       //TEXT
       TEXT_InvalidSearch:'invalid',

   }

   constants.home={
       //Text
       TEXT_SignIn:'Sign in',
       TEXT_CreateAccount:'Create account',

       //CLASSNAME
       CLASSNAME_Submit:'submit',
       CLASSNAME_SECTOR_BLOCK:'browse brick',
       CLASSNAME_Logo:'primary-logo',


       //CSS
       CSS_SearchText:'h1[id$="searching"]',
       CSS_SearchList:'.lister__header',
       CSS_JobBySector:'.facet-links__link',
       CSS_JobSectorPage:'h1[id$="browsing"]',
       CSS_SectorList:'.facet-links__link',

       //ID
       ID_Search:'keywords',
       ID_CreateAccount:'create-account',

       //LIST
       LIST_NavigationTab:'Home,Find a job,Job alerts,Search recruiters,Jobs blog,',
       LIST_SECTOR: 'Banking and finance,Business services,Government,Academia,Primary and utility,Charity,International public sector,NGO,Consultancy,Development,Health,Humanitarian,Other',


    //TEXT
       TEXT_InvalidSearch:'Found 0 jobs using the term ',
       TEXT_ValidSearch1:'Director',
       TEXT_ValidSearch2:'Government',



   }

   constants.findajob = {
         //ID
       ID_SearchJob:'keyword',

       //CSS
       CSS_SearchJob:'h1[id$="browsing"]',



       //TEXT
       TEXT_HEADER:'Find a job',
       TEXT_Jobs:'jobs',
       TEXT_ForSearch:'Engineer',
   }

   constants.searchrecruiter={

       //ID
       ID_SEARCH:'searchtext',

       //CSS
       CSS_SearchedResult:'.lister__header',
       CSS_InvalidSearchResult:'.seven-twelfths',

       //TEXT
        TEXT_SearchRecruiter:'Search recruiters',
       TEXT_ValidSearch:'Advanced Research',
       TEXT_InvalidSearch:'test',
       TEXT_SearchRecruiter_Header:'Search Recruiters',


   }

   constants.jobalerts={
       //TEXT
       TEXT_jobAlerts:'Job alerts',
       TEXT_JobAlert_Header:'Create a job alert',

   }

   constants.jobblogs={
       //TEXT
       TEXT_Jobsblog:'Jobs blog',
       TEXT_Jobsblog_Header:'Search Articles',

   }



return constants;

   }) ();