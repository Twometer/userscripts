// ==UserScript==
// @name         Spiegel & Chip Deblock
// @version      0.4
// @description  Spiegel Online & Chip Ad Blocker Blocker Blocker
// @author       Twometer, Daniel Lerch
// @include      http://www.spiegel.de/*
// @include      https://www.chip.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var oldStyle;
    var oldStyle2;
    var detected = false;

    let intervalId = setInterval(() => {
        if(window.uabpFlags || document.location.href.startsWith("https://www.chip.de")) {
            if(!detected) {
                console.log("[UABP DEBLOCK] Detected ad block detector");
                detected = true;
            }
            let elem = document.getElementById("home") || document.getElementsByTagName("BODY")[0];
            let htmlElem = document.documentElement;
            if(elem.style["overflow-y"] == "hidden") {
                elem.style = oldStyle;
                htmlElem.style = oldStyle2;
                destroyHtmlElements();
                console.log("[UABP DEBLOCK] Destroyed annoying overlay");
                clearInterval(intervalId);
                console.log("[UABP DEBLOCK] Detached from website");
            }else {
                oldStyle2 = htmlElem.style;
                oldStyle = elem.style;
            }
        }
    }, 1);



    function destroyHtmlElements() {
        deleteElementById("sp_message_id");
        deleteElementByClassName("sp_veil");
    }

    function deleteElementByClassName(cname) {
        let elem = document.getElementsByTagName("*");
        for(let i = 0; i < elem.length; i++) {
            if(elem[i].className.startsWith && elem[i].className.startsWith(cname)) {
                deleteElement(elem[i]);
                return;
            }
        }
    }

    function deleteElementById(id) {
        let elem = document.getElementsByTagName("*");
        for(let i = 0; i < elem.length; i++) {
            if(elem[i].id.startsWith(id)) {
                deleteElement(elem[i]);
                return;
            }
        }
    }

    function deleteElement(elem) {
        elem.parentNode.removeChild(elem);
    }
})();
