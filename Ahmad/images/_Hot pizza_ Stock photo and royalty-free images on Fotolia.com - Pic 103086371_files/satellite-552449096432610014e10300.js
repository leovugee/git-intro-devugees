_satellite.pushAsyncScript(function(event, target, $variables){
  $("body").on("click", "ul.thumb-actions a[href *='/ShoppingCart/']", function() {
    if (window.location.pathname.indexOf("/Lightbox/") !== -1) {
        var currHref = $(this).attr('href') ? $(this).attr('href').toLowerCase() : '';
        var btnType = currHref.indexOf("/add/") != -1 ? "addtoCartClick" : "removefromCartClick";
        s_adbadobefotolia.pageName = "fotolia.com:mainlightbox:" + btnType;
        s_adbadobefotolia.eVar37 = s_adbadobefotolia.pageName;
        if (btnType.indexOf("addtoCartClick") !== -1) {
            s_adbadobefotolia.events = "scAdd,event11";
        }
        if (btnType.indexOf("removefromCartClick") !== -1) {
            s_adbadobefotolia.events = "scRemove";
        }

        s_adbadobefotolia.prop5 = s_adbadobefotolia.prop4 + ":" + s_adbadobefotolia.pageName;
        s_adbadobefotolia.prop1 = "image";
        s_adbadobefotolia.eVar1 = "D=c1";
        s_adbadobefotolia.t();
    }
});

$("div.content-col").on("click", "a.thumb-frame.ftl-tooltip-content", function() {

    var pname = _satellite.getVar('adbadobefotolia_pageName_Page_Name');
    if (pname.indexOf(":category:") !== -1) {
        var pnameTemp = pname.split(":");
        var num = pnameTemp.pop();
        pname = pnameTemp.join(":");
    }

    if (window.location.pathname.indexOf('/Lightbox/') !== -1) {
        s_adbadobefotolia.pageName = "fotolia.com:mainlightbox:imageClick";
        s_adbadobefotolia.prop5 = s_adbadobefotolia.prop4 + ":" + s_adbadobefotolia.pageName;
        s_adbadobefotolia.events = "event2,event10";
        s_adbadobefotolia.prop1 = "image";
        s_adbadobefotolia.eVar1 = "D=c1";
        s_adbadobefotolia.eVar37 = s_adbadobefotolia.pageName;
    } else {
        s_adbadobefotolia.pageName = pname + ":imageClick";
        s_adbadobefotolia.prop5 = s_adbadobefotolia.prop4 + ":" + s_adbadobefotolia.pageName;
        //s_adbadobefotolia.prop12 = _satellite.getVar("adbadobefotolia_prop12_Previous_Page_Value");
        s_adbadobefotolia.events = "event2,event10";
        s_adbadobefotolia.prop1 = "image";
        s_adbadobefotolia.eVar1 = "D=c1";
        s_adbadobefotolia.eVar37 = s_adbadobefotolia.pageName

    }

        var userAg = navigator.userAgent;
        var vendor = navigator.vendor;
        
        if (typeof userAg !== "undefined" && typeof vendor !== "undefined") {
            if (navigator.userAgent.indexOf("Mozilla") !== -1 && (navigator.vendor.indexOf("Google") === -1 && navigator.vendor.indexOf("Apple") === -1)) {
                window.setTimeout(function() {
                    s_adbadobefotolia.t()
                }, 20);
            } else{
                s_adbadobefotolia.t()
            }
        }
       
    
});

});
