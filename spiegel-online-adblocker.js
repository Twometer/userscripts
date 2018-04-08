// ==UserScript==
// @name         Twometer Spiegel Deblock
// @version      0.1
// @description  Spiegel Online Ad Blocker Blocker Blocker
// @author       Twometer Applications
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("[UABP DEBLOCK] Injection");
    var oldStyle;
    var oldStyle2;
    var detected = false;
    let intervalId = setInterval(() => {
        if(window.uabpFlags) {
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
                console.log("[UABP DEBLOCK] Detaching");
                clearInterval(intervalId);
                console.log("[UABP DEBLOCK] Detached");
            }else {
                oldStyle2 = htmlElem.style;
                oldStyle = elem.style;
            }
        }
    }, 10);

    function destroyHtmlElements() {
        let superSecurePrefix = findElementName();
        deleteElement(document.getElementById("sp_message_id" + superSecurePrefix));
        let superSecureClassName = "sp_veil" + superSecurePrefix;
        let elements = document.getElementsByClassName(superSecureClassName);
        for(let i = 0; i < elements.length; i++) {
            deleteElement(elements[i]);
        }
    }

    function deleteElement(elem) {
        elem.parentNode.removeChild(elem);
    }

    function findElementName() {
        let x = new Date().getTime();
        for(let y = x-50000; y<x+10; y++) {
            let id = "sp_message_id" + y;
            if(document.getElementById(id) != null) return y;
        }
    }
})();