// ==UserScript==
// @name         mans not bot
// @version      0.1
// @description  Replaces google captcha text with "mans not bot" to comply with latest memes
// @author       Twometer
// @match        *://*/*
// @include      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.top !== window.self) {
        var t = document.getElementsByClassName("rc-anchor-center-item");
        if(t.length > 0){
            for(var i = 0; i<t.length; i++){
                var innerhtml = t[i].innerHTML;
                if(innerhtml.includes('aria-live="polite"')){
                    var captchaNodes = t[i].childNodes;
                    for(var j = 0; j<captchaNodes.length; j++){
                        if(captchaNodes[j].nodeValue != null){
                            captchaNodes[j].nodeValue = "mans not bot";
                            return;
                        }
                    }
                }
            }
        }
    }
})();