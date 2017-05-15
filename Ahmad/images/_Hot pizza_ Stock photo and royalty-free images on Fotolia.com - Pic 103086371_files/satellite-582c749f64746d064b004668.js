_satellite.pushAsyncScript(function(event, target, $variables){
  //entry page and shopping cart
var modal_screen, modal_page;


if (typeof s_adbadobefotolia !== "undefined") {
    s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
    s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
    s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
    s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
    s_adbadobefotolia.linkTrackVars = "prop3,prop4,prop5,prop12,prop29,prop31,prop32,eVar12,eVar28,eVar76,eVar77,eVar78,eVar79";
}


var interception_pop = $.Deferred();
var checkinterception = setInterval(function() {
    if ($(".welcome-modal").css("display") !== "none") {
        interception_pop.resolve();
        clearInterval(checkinterception);
    }
}, 500);

interception_pop.done(function() {
    if (($(".interception-version").length && $(".welcome-modal").css("display") == "block") || ($(".modal").length && $(".modal a:eq(0)").attr('href').indexOf("interception") > -1)) {
        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup";
        s_adbadobefotolia.t();
        $(".blue-button").click(function() {
            s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
            s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
            s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
            s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
            s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup:StartNowClick";
            s_adbadobefotolia.t()
        })

        $(".ftl-modal-close").click(function() {
            s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
            s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
            s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
            s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
            s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup:GoBackFotoliaClick";
            s_adbadobefotolia.t()

        })
    }

});





var dfdWelcme = $.Deferred();
var checkSelectorWelcme = setInterval(function() {
    if ($(".welcome-modal").css("display") !== "none" && typeof($(".welcome-modal #migration-button").attr("href")) !== 'undefined') {
        dfdWelcme.resolve();
        clearInterval(checkSelectorWelcme);
    }
}, 1000);

dfdWelcme.done(function() {

    if (typeof($(".welcome-modal #migration-button").attr("href")) !== 'undefined') {
        if ($(".welcome-modal #migration-button").attr("href").indexOf("segment1") > -1 || $(".welcome-modal #migration-button").attr("href").indexOf("segment2") > -1) {
            modal_screen = "segment1and2";
        }
        if ($(".welcome-modal #migration-button").attr("href").indexOf("segment3") > -1) {
            modal_screen = "segment3";
        }
        if ($(".welcome-modal #migration-button").attr("href").indexOf("segment4") > -1) {
            modal_screen = "segment4";
        }
        if ($(".welcome-modal #migration-button").attr("href").indexOf("segment5") > -1) {
            modal_screen = "segment5";
        }
        if ($(".welcome-modal #migration-button").attr("href").indexOf("segment6") > -1) {
            modal_screen = "segment6";
        }
        if (window.location.pathname.indexOf("/Shoppingcart") > -1) {
            modal_page = "shoppingcart";
        } else {
            modal_page = "entrypage";
        }
    }
    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:" + modal_page + ":" + modal_screen;
    s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
    s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
    s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
    s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
    s_adbadobefotolia.t();
    $(".welcome-modal #migration-button").click(function() {
        s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
        s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount");
        s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable");
        s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment");
        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:" + modal_page + ":" + modal_screen + ":switchNowClick";
        s_adbadobefotolia.t();
    })


    $(".welcome-modal .close-welcome").click(function() {
        s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
        s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount");
        s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable");
        s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment");
        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:" + modal_page + ":" + modal_screen + ":skipThisOfferClick";
        s_adbadobefotolia.t();
    })
});


//download popup

$(".ftl-modal-open").click(function() {

    setTimeout(function() {
        if ($(".ftl-modal-force-reload").length) {
            if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment1") > -1 || $("#switch-to-stock .square-button").attr("href").indexOf("segment2") > -1) {
                s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2";
            }
            if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment3") > -1) {
                s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3";
            }
            if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment4") > -1) {
                s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4";
            }
            if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment5") > -1) {
                s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5";
            }
            if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment6") > -1) {
                s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6";
            }
            s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
            s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount");
            s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable");
            s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment");
            s_adbadobefotolia.t();
            $(".ftl-modal .ftl-ajax-submit").click(function() {
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment1") > -1 || $("#switch-to-stock .square-button").attr("href").indexOf("segment2") > -1) {
                    if ($(this).attr("value") === "Open in browser") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:downloadCommonClick";
                    }
                    if ($(this).attr("value") === "Social Media") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:downloadSocialMediaClick";
                    }

                    if ($(this).attr("value") === "Immediate") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:downloadImmediateClick";
                    }

                    if ($(this).attr("value") === "Dropbox") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:dropboxClick";
                    }
                    if ($(this).attr("value") === "Google Drive") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:googledriveClick";
                    }
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment3") > -1) {
                    if ($(this).attr("value") === "Open in browser") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:downloadCommonClick";
                    }
                    if ($(this).attr("value") === "Social Media") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:downloadSocialMediaClick";
                    }

                    if ($(this).attr("value") === "Immediate") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:downloadImmediateClick";
                    }

                    if ($(this).attr("value") === "Dropbox") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:dropboxClick";
                    }
                    if ($(this).attr("value") === "Google Drive") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:googledriveClick";
                    }
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment4") > -1) {
                    if ($(this).attr("value") === "Open in browser") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:downloadCommonClick";
                    }
                    if ($(this).attr("value") === "Social Media") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:downloadSocialMediaClick";
                    }

                    if ($(this).attr("value") === "Immediate") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:downloadImmediateClick";
                    }

                    if ($(this).attr("value") === "Dropbox") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:dropboxClick";
                    }
                    if ($(this).attr("value") === "Google Drive") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:googledriveClick";
                    }
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment5") > -1) {
                    if ($(this).attr("value") === "Open in browser") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:downloadCommonClick";
                    }
                    if ($(this).attr("value") === "Social Media") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:downloadSocialMediaClick";
                    }

                    if ($(this).attr("value") === "Immediate") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:GetItNowClick";
                    }

                    if ($(this).attr("value") === "Dropbox") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:dropboxClick";
                    }
                    if ($(this).attr("value") === "Google Drive") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:googledriveClick";
                    }
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment6") > -1) {
                    if ($(this).attr("value") === "Open in browser") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:downloadCommonClick";
                    }
                    if ($(this).attr("value") === "Social Media") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:downloadSocialMediaClick";
                    }

                    if ($(this).attr("value") === "Immediate") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:downloadImmediateClick";
                    }

                    if ($(this).attr("value") === "Dropbox") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:dropboxClick";
                    }
                    if ($(this).attr("value") === "Google Drive") {
                        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:googledriveClick";
                    }
                }
                s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
                s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount");
                s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable");
                s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment");
                s_adbadobefotolia.events = "event4,event25";
                s_adbadobefotolia.t();

            })


            $(".ftl-modal #switch-to-stock a").click(function() {
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment1") > -1 || $("#switch-to-stock .square-button").attr("href").indexOf("segment2") > -1) {
                    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment1and2:GetItNowClick";
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment3") > -1) {
                    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment3:GetItNowClick";
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment4") > -1) {
                    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment4:GetItNowClick";
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment5") > -1) {
                    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment5:GetItNowClick";
                }
                if (typeof($("#switch-to-stock .square-button").attr("href")) !== 'undefined' && $("#switch-to-stock .square-button").attr("href").indexOf("segment6") > -1) {
                    s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:migration:download:segment6:GetItNowClick";
                }
                s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
                s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount");
                s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable");
                s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment");
                s_adbadobefotolia.t();

            })
        };
    }, 3000);
})


//phase 2 popup
setTimeout(function() {

    var phase_2 = $(".welcome-modal").attr("data-next-location");

    if (($(".welcome-modal:eq(1)").css("display") !=="none" || $(".welcome-modal:eq(1)").css("display") !=="none") && phase_2 && phase_2.indexOf("overlay-VersionA-Phase2") != -1) {
        s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup";
        s_adbadobefotolia.t();
        $(".blue-button").click(function() {
            s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
            s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
            s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
            s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
            s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup:StartNowClick";
            s_adbadobefotolia.t()
        })

        $(".ftl-modal-close").click(function() {
            s_adbadobefotolia.eVar76 = _satellite.getVar("adbadobefotolia_is_subaccount");
            s_adbadobefotolia.eVar77 = _satellite.getVar("adbadobefotolia_has_subaccount")
            s_adbadobefotolia.eVar78 = _satellite.getVar("adbadobefotolia_is_interceptable")
            s_adbadobefotolia.eVar79 = _satellite.getVar("adbadobefotolia_migrator_segment")
            s_adbadobefotolia.pageName = "fotolia.com:stockoverlay:interception:popup:GoBackFotoliaClick";
            s_adbadobefotolia.t()

        })
    }


}, 1000);

//end  of phase 2 popup



//end of download popup

});
