// ==UserScript==
// @name         ACT usage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include     http://portal.actcorp.in/*
// @include     http://portal.actcorp.in/*
// @grant        none
// ==/UserScript==
$(function() {
    if(window.location !='http://portal.actcorp.in/web/hyd/myaccount')
        window.location.href = 'http://portal.actcorp.in/web/hyd/myaccount';
    document.getElementById("A8036:j_idt34:j_idt38").click();
    $("html, body").animate({ scrollTop: $(document).height() }, 2500);
});
