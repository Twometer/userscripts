// ==UserScript==
// @name         English Microsoft Docs
// @version      0.2
// @description  Automatically switches to english Microsoft docs
// @author       Twometer, Daniel Lerch
// @match        https://docs.microsoft.com/de-de*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = window.location.href.replace("https://docs.microsoft.com/de-de", "https://docs.microsoft.com/en-us");
})();
