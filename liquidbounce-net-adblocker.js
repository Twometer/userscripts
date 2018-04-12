// ==UserScript==
// @name         LiquidBounce NoAds
// @version      0.2
// @description  Prevents Anti-AdBlocker on https://liquidbounce.net/
// @author       Twometer
// @match        *://*/*
// @include      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.startsWith("http://dl.ccbluex.net/download/skip/index.php"))
		window.location.href = "http://dl.ccbluex.net/download/index.php?file=" + window.location.search.split("=")[1];
})();