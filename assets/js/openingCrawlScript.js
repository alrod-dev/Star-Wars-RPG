// Author: Alfredo Rodriguez
// File: JS - openingCrawlScript.js
// Date: 7/8/2017

//Opening Crawl

$(document).ready(function () {

    var themeSong = $("#themeSong")[0];

    themeSong.currentTime = 0;
    themeSong.play();


    setTimeout(function () {

        window.location.href = "../../gamePage.html";

    }, 60000);

});