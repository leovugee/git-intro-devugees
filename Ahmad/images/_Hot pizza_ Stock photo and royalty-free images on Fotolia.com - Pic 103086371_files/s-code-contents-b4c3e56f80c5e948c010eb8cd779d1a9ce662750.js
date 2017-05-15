 //--------------------- Globals ------------------------------------------------
// so that the sObject is set globally on IE8 and earlier
var s_adbadobefotolia; // set this globally

(function (_satellite) {
  'use strict';

  /************************** Global Config *************************************/
  var namespace = 'adobecorp';
  var sObjectName = 's_adbadobefotolia';
  /************************** Global Config End *********************************/

  /************************** VisitorAPI.js Config ******************************/
  //var visitor = new Visitor(namespace); // not yet...
  //visitor.trackingServer = 'stats.adobe.com'; // not yet...
  //visitor.trackingServerSecure = 'sstats.adobe.com'; // not yet...
  /************************** VisitorAPI.js Config End **************************/

  /************************** AppMeasurement.js Config **************************/
  var s = new AppMeasurement();

  // set globals
  window[sObjectName] = s;

  s.account = _satellite._getAdobeAnalyticsAccount(sObjectName);

  //--------------------- Visitor Config -----------------------------------------
  //s.visitorNamespace = namespace; //technically not needed
  //s.visitor = Visitor.getInstance(namespace); // not yet...
  //s.visitorID = ''; // not yet...

  //--------------------- Other Config -------------------------------------------
  s.charSet = 'UTF-8';
  s.trackingServer = 'stats.adobe.com';
  s.trackingServerSecure = 'sstats.adobe.com';
  s.cookieDomainPeriods = _satellite._getDomainPeriods();
  s.fpCookieDomainPeriods = _satellite._getDomainPeriods();
  //s.cookieLifetime = ''; //set in UI
  //s.currencyCode = ''; //set in UI
  //s.debugTracking = false; // not going to set yet...
  //s.dynamicVariablePrefix = 'D='; //set in UI
  //s.mobile = ''; //not going to set here...not applicable

  //--------------------- Link Tracking Config -----------------------------------
  //s.maxDelay = 1000; // not going to set yet...
  s.trackInlineStats = false; // ClickMap
  s.trackDownloadLinks = true;
  s.trackExternalLinks = true;
  s.linkLeaveQueryString = false;
  s.linkTrackEvents = "None";
  s.linkTrackVars = "None";
  s.linkDownloadFileTypes = [
    'adpp',
    'air',
    'apk',
    'avi',
    'bin',
    'cptx',
    'css',
    'csv',
    'dmg',
    'doc',
    'docx',
    'eps',
    'exe',
    'flv',
    'hqx',
    'jar',
    'jpg',
    'js',
    'm4v',
    'mov',
    'mp3',
    'mpg',
    'msi',
    'mxp',
    'pdf',
    'png',
    'ppt',
    'pptx',
    'rar',
    'svg',
    'swc',
    'tab',
    'tbz2',
    'txt',
    'vsd',
    'vxd',
    'wav',
    'wma',
    'wmv',
    'xls',
    'xlsx',
    'xml',
    'zip',
    'zxp'].join(',');
  s.linkExternalFilters = ''; //none
  s.linkInternalFilters = _satellite.getVar('adobe_linkInternalFilters');


  //--------------------- doPlugins ----------------------------------------------
  s.usePlugins = true;
  s.doPlugins = function (s) {
    // TODO:
     s.prop12 = _satellite._getPreviousValue(s_adbadobefotolia.pageName,'fpv','');
  };

  //--------------------- Plugins ------------------------------------------------
  //TODO:

  /************************** AppMeasurement.js Config End **********************/

  /************************** AppMeasurement_Module_media.js Config *************/
  //s.Media.trackEvents = ''; // not going to set yet...
  //s.Media.trackVars = ''; // not going to set yet...
  /************************** AppMeasurement_Module_media.js Config End *********/

  /************************** AppMeasurement_Module_Integrate.js Config *********/
  /************************** AppMeasurement_Module_Integrate.js Config End *****/

  // VisitorAPI.js Library in Page Load Rule
  // AppMeasurement.js Library in Page Load Rule
  // AppMeasurement_Module_media.js in Page Load Rule
  // AppMeasurement_Module_Integrate.js in Page Load Rule

}(_satellite));