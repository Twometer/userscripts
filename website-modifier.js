// ==UserScript==
// @name         Website modifier
// @version      0.1
// @description  Modify text on any website
// @author       Twometer
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var arr = customIterativeTreeWalker();
    for(var i = 0; i < arr.length; i++) {
        const x = arr[i];
        x.onclick = function(e) {
            e.preventDefault();
            if(!x.innerHTML.includes("<")){
                x.innerHTML = prompt("Enter new text", x.innerHTML);
            }
        }
    }

    function customIterativeTreeWalker() {
        var result = [];
        var root = document.body;

        var node = root.childNodes[0];
        while(node != null) {
            if(node.nodeType == 3) {
                result.push(node.parentNode);
            }

            if(node.hasChildNodes()) {
                node = node.firstChild;
            }
            else {
                while(node.nextSibling == null && node != root) {
                    node = node.parentNode;
                }
                node = node.nextSibling;
            }
        }
        return result;
    }
})();