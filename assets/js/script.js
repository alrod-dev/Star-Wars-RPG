// Author: Alfredo Rodriguez
// File: JS - script.js
// Date: 7/8/2017


$(document).ready(function () {

    //Game Page

    //Default global methods & variables
    function randNum(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Sets the Life Points of every character
    $(".anakinHP").html("<h2 class='anakinsHealth'>" + randNum(150, 250) + "</h2>");
    $(".galenHP").html("<h2 class='galensHealth'>" + randNum(150, 250) + "</h2>");
    $(".malakHP").html("<h2 class='malaksHealth'>" + randNum(150, 250) + "</h2>");
    $(".revanHP").html("<h2 class='revansHealth'>" + randNum(150, 250) + "</h2>");
    $(".anakin-2-HP").html("<h2 class='anakins-2-Health'>" + randNum(150, 250) + "</h2>");
    $(".galen-2-HP").html("<h2 class='galens-2-Health'>" + randNum(150, 250) + "</h2>");
    $(".malak-2-HP").html("<h2 class='malaks-2-Health'>" + randNum(150, 250) + "</h2>");
    $(".revan-2-HP").html("<h2 class='revans-2-Health'>" + randNum(150, 250) + "</h2>");


    //Hides the enemies and defenders at the beginning
    $("#enemySelection").hide();
    $("#fightStage").hide();
    $("#playButtons").hide();
    $("#enemyHeader").hide();
    $("#defenderHeader").hide();
    $("#resetStage").hide();
    $("#sidebar").hide();


    //Loads the voices of every character
    var anakin = $("#anakinVoice")[0];
    var galen = $("#galenVoice")[0];
    var malak = $("#malakVoice")[0];
    var revan = $("#revanVoice")[0];
    var music = $("#backgroundMusic")[0];

    //Background Music
    music.volume = 0.05;
    music.play();

    //Hover over sounds
    $("#Anakin-1").mouseenter(function () {

        galen.pause();
        malak.pause();
        revan.pause();

        anakin.currentTime = 0;
        anakin.play();

    });


    $("#Galen-1").mouseenter(function () {

        anakin.pause();
        malak.pause();
        revan.pause();

        galen.currentTime = 0;
        galen.play();

    });

    $("#Malak-1").mouseenter(function () {

        galen.pause();
        anakin.pause();
        revan.pause();

        malak.currentTime = 0;
        malak.play();

    });

    $("#Revan-1").mouseenter(function () {

        galen.pause();
        malak.pause();
        anakin.pause();

        revan.currentTime = 0;
        revan.play();

    });


    //Character Selection
    var characterHealth = 0;
    var enemyHealth = 0;

    var characterSelected;
    var enemySelected;

    var characterName;
    var enemyName;

    //Once a character is clicked the others will disappear
    //And lock the button of the current character.
    $("#Anakin-1").on("click", function () {

        //Character Info
        characterSelected = $(".anakinsHealth");

        characterHealth = parseInt(characterSelected.text());

        characterName = $("#anakinName").text();

        //Layouts
        $("#Anakin-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Revan-1").hide();
        $("#Galen-1").hide();

        //More Info

        $("#characterName").text(characterName);
        $("#characterHealth").text(characterHealth);
        $("#AP").text(characterDMG);

    });

    $("#Galen-1").on("click", function () {

        characterSelected = $(".galensHealth");

        characterHealth = parseInt(characterSelected.text());

        characterName = $("#galenName").text();

        $("#Galen-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Revan-1").hide();
        $("#Anakin-1").hide();

        //More Info

        $("#characterName").text(characterName);
        $("#characterHealth").text(characterHealth);
        $("#AP").text(characterDMG);
    });

    $("#Malak-1").on("click", function () {

        characterSelected = $(".malaksHealth");

        characterHealth = parseInt(characterSelected.text());

        characterName = $("#malekName").text();

        $("#Malak-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Anakin-1").hide();
        $("#Revan-1").hide();
        $("#Galen-1").hide();

        //More Info

        $("#characterName").text(characterName);
        $("#characterHealth").text(characterHealth);
        $("#AP").text(characterDMG);
    });

    $("#Revan-1").on("click", function () {

        characterSelected = $(".revansHealth");

        characterHealth = parseInt(characterSelected.text());

        characterName = $("#revanName").text();

        $("#Revan-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Anakin-1").hide();
        $("#Galen-1").hide();

        //More Info

        $("#characterName").text(characterName);
        $("#characterHealth").text(characterHealth);
        $("#AP").text(characterDMG);
    });

    //Enemy Selection

    //Once a character is clicked the others will disappear
    //And lock the button of the current character.

    $("#Anakin-2").on("click", function () {


        //Health and Names
        enemySelected = $(".anakins-2-Health");

        enemyHealth = parseInt(enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2]);

        enemyName = $("#anakinName").text();


        //Change Screen Parameters
        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Revan-3").hide();
        $("#Galen-3").hide();


        //Changing Layouts

        $(".col-md-9").css("margin", "0");
        $(".col-md-9").css("width", "75%");
        $("#sidebar").show();

        //More Info

        $("#enemyName").text(enemyName);
        $("#enemyHealth").text(enemyHealth);
    });

    $("#Galen-2").on("click", function () {


        //Health and Names
        enemySelected = $(".galens-2-Health");

        enemyHealth = parseInt(enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2]);

        enemyName = $("#galenName").text();


        //Change Screen Parameters
        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Revan-3").hide();
        $("#Anakin-3").hide();

        //Changing Layouts

        $(".col-md-9").css("margin", "0");
        $(".col-md-9").css("width", "75%");
        $("#sidebar").show();

        //More Info

        $("#enemyName").text(enemyName);
        $("#enemyHealth").text(enemyHealth);

    });

    $("#Malak-2").on("click", function () {

        //Health and Names
        enemySelected = $(".malaks-2-Health");

        enemyHealth = parseInt(enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2]);

        enemyName = $("#malekName").text();

        //Change Screen Parameters
        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Anakin-3").hide();
        $("#Revan-3").hide();
        $("#Galen-3").hide();

        //Changing Layouts

        $(".col-md-9").css("margin", "0");
        $(".col-md-9").css("width", "75%");
        $("#sidebar").show();

        //More Info

        $("#enemyName").text(enemyName);
        $("#enemyHealth").text(enemyHealth);
    });

    $("#Revan-2").on("click", function () {

        //Health and Names
        enemySelected = $(".revans-2-Health");

        enemyHealth = parseInt(enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2]);

        enemyName = $("#revanName").text();

        //Change Screen Parameters
        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Anakin-3").hide();
        $("#Galen-3").hide();

        //Changing Layouts
        $(".col-md-9").css("margin", "0");
        $(".col-md-9").css("width", "75%");
        $("#sidebar").show();

        //More Info

        $("#enemyName").text(enemyName);
        $("#enemyHealth").text(enemyHealth);
    });


    //Game Play Buttons
    var characterDMG = [20, 50];
    var enemyDMG = [20, 50];

    var characterforceDMG = [40, 80];
    var enemyforceDMG = [40, 80];


    //Function that returns random number to attack
    function attack(damage) {

        return Math.floor(Math.random() * (damage[1] - damage[0] + 1)) + damage[0];

    }

    $("#attack").on("click", function () {

        var damagedEnemy = attack(enemyDMG);
        var damagedCharacter = attack(characterDMG);

        characterHealth -= damagedCharacter;
        enemyHealth -= damagedEnemy;

        //Health Updated on both characters
        characterSelected.html(characterHealth);
        $("#characterHealth").html(characterHealth);

        enemySelected.html(enemyHealth);
        $("#enemyHealth").html(enemyHealth);

        //Textbox
        $("#textBox").html("<h1>" + characterName + " is damaged by " + damagedCharacter + "</h1>"
            + "<br>" + "<h1>" + enemyName + " is damaged by " + damagedEnemy + "</h1>");

        //If character is below 0 Enemy Wins
        if ((characterHealth <= 0) && (characterHealth < enemyHealth)) {

            $("#characterSelection").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

            $("#textBox").html("<h1>" + characterName + " is the Winner</h1>");

        }

        //If enemy is below 0 Character Wins
        else if ((enemyHealth <= 0) && (enemyHealth < characterHealth)) {

            $("#fightStage").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

            $("#textBox").html("<h1>" + enemyName + " is the Winner</h1>");
        }

    });

    $("#force").on("click", function () {

        var damagedEnemy = attack(enemyDMG);
        var damagedCharacter = attack(characterDMG);

        characterHealth -= damagedCharacter;
        enemyHealth -= damagedEnemy;

        //Health points updated on both characters
        characterSelected.html(characterHealth);
        $("#characterHealth").html(characterHealth);

        enemySelected.html(enemyHealth);
        $("#enemyHealth").html(enemyHealth);

        //Textbox
        $("#textBox").html("<h1>" + characterName + " is damaged by " + damagedCharacter + "</h1>"
            + "<br>" + "<h1>" + enemyName + " is damaged by " + damagedEnemy + "</h1>");

        //If character is below 0 Enemy Wins
        if ((characterHealth <= 0) && (characterHealth < enemyHealth)) {

            $("#characterSelection").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

            $("#textBox").html("<h1>" + characterName + " is the Winner</h1>");

        }

        //If enemy is below 0 Character Wins
        else if ((enemyHealth <= 0) && (enemyHealth < characterHealth)) {

            $("#fightStage").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

            $("#textBox").html("<h1>" + enemyName + " is the Winner</h1>");
        }
    });

    $("#enrage").on("click", function () {

        //Adds more damage to the character
        characterDMG[0] += 20;
        characterDMG[1] += 20;

        //Adds more damage to the character force attack
        characterforceDMG[0] += 20;
        characterforceDMG[1] += 20;

        //Updates the text
        $("#AP").text(characterDMG);

    });

    $("#resetGame").on("click", function () {

        //Defaults Of the Game

        //Hides the enemies and defenders at the beginning
        $("#enemySelection").hide();
        $("#fightStage").hide();
        $("#playButtons").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").hide();
        $("#resetStage").hide();


        //Reset Layouts
        $("#textBox").empty();
        $(".col-md-9").css("margin", "1% 10% 1% 10%");
        $(".col-md-9").css("width", "80%");
        $("#sidebar").hide();


        //Shows if this dissappears
        $("#characterSelection").show();

        //Enables all characters again
        $("#Malak-1").show();
        $("#Anakin-1").show();
        $("#Galen-1").show();
        $("#Revan-1").show();
        $("#Malak-3").show();
        $("#Anakin-3").show();
        $("#Galen-3").show();
        $("#Revan-3").show();

        //Resets Health

        //Sets the Life Points of every character
        $(".anakinHP").html("<h2 class='anakinsHealth'>" + randNum(150, 250) + "</h2>");
        $(".galenHP").html("<h2 class='galensHealth'>" + randNum(150, 250) + "</h2>");
        $(".malakHP").html("<h2 class='malaksHealth'>" + randNum(150, 250) + "</h2>");
        $(".revanHP").html("<h2 class='revansHealth'>" + randNum(150, 250) + "</h2>");
        $(".anakin-2-HP").html("<h2 class='anakins-2-Health'>" + randNum(150, 250) + "</h2>");
        $(".galen-2-HP").html("<h2 class='galens-2-Health'>" + randNum(150, 250) + "</h2>");
        $(".malak-2-HP").html("<h2 class='malaks-2-Health'>" + randNum(150, 250) + "</h2>");
        $(".revan-2-HP").html("<h2 class='revans-2-Health'>" + randNum(150, 250) + "</h2>");


        //Enabling Buttons
        $("#Anakin-1").attr("disabled", false);
        $("#Galen-1").attr("disabled", false);
        $("#Malak-1").attr("disabled", false);
        $("#Revan-1").attr("disabled", false);

        //Resetting powers

        characterDMG = [20, 50];
        characterforceDMG = [40, 80];


    });


});