// ==UserScript==
// @name         Spiegel Online AdBlocker
// @version      2.0
// @description  Blocks SPON Ads
// @author       Twometer
// @match        *://www.spiegel.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    HTMLElement.prototype.appendChildOld = HTMLElement.prototype.appendChild;
    HTMLElement.prototype.appendChild = function(elem) {
        if(isAd(elem)){
            return;
        }
        return this.appendChildOld(elem);
    }

    console.log("[SPON Adblocker] Injection completed");

    // Words contained in img src that show it's an ad
    var flagwords = ["thumbflex", "breitwandaufmacher", "thumbbiga", "hpcpleftcolumn"];
    function isAd(elem) {
        if(elem.style != null && elem.style.content == "Anzeige")
            return true;

        for(let fw of flagwords)
            if(elem.src && elem.src.includes(fw))
                return true;

        if(elem.classList == null)
            return false;

        for(let className of elem.classList) {
            if(className.startsWith("sp_veil") || className.startsWith("sp_message_container"))
                return true;
        }

        return false;
    }

    var interval = setInterval(function() {
        if(document.body.style.overflowY == "hidden"){
            document.body.style.overflowY = "";
            document.body.style.height = "";
            document.documentElement.style.overflowY = "";
            document.documentElement.style.height = "";
            clearInterval(interval);
        }
    }, 1);
})();


