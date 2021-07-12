# Economist_JobPortal
Automation framework designed for website 

About Automation Framework :

1. Language Used - Java Script in Protractor
2. Project is based on Page Object Model Design Pattern
3. Project heirarchy:
Conf folder :
Init.js-  file where all PO and constant file are intialized
run.js- configuration file where spec(test) file is mentioned to run the Testcases,Also declare browser capability , report generator,etc.

Global folder > constant.js- Constant file where locators are defined specific to the module

PageObjects - Page object file where all functions/methods are present specific to page wise

Test folder - Test file  where Testcases are scripted specific to page 

Report folder 
Screenshot folder - of failed Tcs are placed under screenshot folder
html file - generated report for execution run


//-----------------------------------

Steps to configure and run Test Suite-------->

1.IDE used : Webstorm 
Download webstorm from this link: https://www.jetbrains.com/webstorm/download/#section=windows

2. Launch Webstorm and click on 'Add configuration' (located at top right navigation bar)

3. Click on '+' button on top left corner and select Protractor

4. Add path of execution conf file in 'Configuration file'

5.  Add path protractor in ' Protractor Package '
  Basically this is the path : C:\Users\username\AppData\Roaming\npm\node_modules\protractor
  
6. Then Apply and save this configuration 

7. Then set testfile path in spec file , which I have already mentioned 

8. Run the code by click on Run button
 That's it ..  
 
 
