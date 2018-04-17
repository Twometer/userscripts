// ==UserScript==
// @name         English Microsoft Docs
// @version      0.1
// @description  Automatically switches to english Microsoft docs
// @author       Twometer
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.startsWith("https://docs.microsoft.com/de-de"))
        window.location.href = window.location.href.replace("https://docs.microsoft.com/de-de", "https://docs.microsoft.com/en-us");
})();