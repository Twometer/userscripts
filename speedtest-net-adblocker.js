// ==UserScript==
// @name         Speedtest AdBlock
// @version      0.1
// @description  Remove all ads from speedtest.net
// @author       Twometer
// @match        http://www.speedtest.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var interval = setInterval(removeLoop, 1);

    function removeLoop() {
        let adItems = [
            document.querySelector(".top-placeholder"),
            document.querySelector(".pure-u-custom-ad-rectangle"),
            document.querySelector(".pure-u-custom-ad-skyscraper"),
            document.getElementById('_evh-link')
        ];
        for(let itm of adItems) {
            if(itm != null)
                itm.parentNode.removeChild(itm);
        }
        for(let itm of adItems) {
            if(itm != null)
                return;
        }
        clearInterval(interval);
    }

    var sheet = document.createElement('style')
    sheet.innerHTML = ".pure-g-r {display: flex; justify-content: center; padding-top: 40px;}";
    document.body.appendChild(sheet);

})();