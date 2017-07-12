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
    $("#textBox").hide();


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

    var characterSelected;
    var enemySelected;

    var characterName;
    var enemyName;

    //Once a character is clicked the others will disappear
    //And lock the button of the current character.
    $("#Anakin-1").on("click", function () {

        characterSelected = $(".anakinsHealth");

        characterHealth = characterSelected.text();

        console.log(characterHealth);

        characterName = $("#anakinName").text();

        $("#Anakin-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Revan-1").hide();
        $("#Galen-1").hide();
    });

    $("#Galen-1").on("click", function () {

        characterSelected = $(".galensHealth");

        characterHealth = characterSelected.text();

        characterName = $("#galenName").text();

        $("#Galen-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Revan-1").hide();
        $("#Anakin-1").hide();
    });

    $("#Malak-1").on("click", function () {

        characterSelected = $(".malaksHealth");

        characterHealth = characterSelected.text();

        characterName = $("#malekName").text();

        $("#Malak-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Anakin-1").hide();
        $("#Revan-1").hide();
        $("#Galen-1").hide();
    });

    $("#Revan-1").on("click", function () {

        characterSelected = $(".revansHealth");

        characterHealth = characterSelected.text();

        characterName = $("#revanName").text();

        $("#Revan-1").attr("disabled", true);

        $("#enemySelection").show();
        $("#enemyHeader").show();

        $("#Malak-1").hide();
        $("#Anakin-1").hide();
        $("#Galen-1").hide();
    });

    //Enemy Selection

    //Once a character is clicked the others will disappear
    //And lock the button of the current character.

    $("#Anakin-2").on("click", function () {

        enemySelected = $(".anakins-2-Health");

        enemyHealth = enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2];

        console.log(enemyHealth);

        enemyName = $("#anakinName").text();

        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Revan-3").hide();
        $("#Galen-3").hide();
    });

    $("#Galen-2").on("click", function () {

        enemySelected = $(".galens-2-Health");

        enemyHealth = enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2];

        enemyName = $("#galenName").text();

        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Revan-3").hide();
        $("#Anakin-3").hide();
    });

    $("#Malak-2").on("click", function () {

        enemySelected = $(".malaks-2-Health");

        enemyHealth = enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2];

        enemyName = $("#malekName").text();

        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Anakin-3").hide();
        $("#Revan-3").hide();
        $("#Galen-3").hide();
    });

    $("#Revan-2").on("click", function () {

        enemySelected = $(".revans-2-Health");

        enemyHealth = enemySelected.text()[0] + enemySelected.text()[1] + enemySelected.text()[2];

        enemyName = $("#revanName").text();

        $("#enemySelection").hide();
        $("#enemyHeader").hide();
        $("#defenderHeader").show();
        $("#fightStage").show();
        $("#playButtons").show();

        $("#Malak-3").hide();
        $("#Anakin-3").hide();
        $("#Galen-3").hide();
    });


    //Game Play Buttons

    var characterDMG = [20, 50];
    var enemyDMG = [20, 50];

    var characterforceDMG = [40, 80];
    var enemyforceDMG = [40, 80];

    var characterHealth;
    var enemyHealth;


    function attack(damage) {

        return Math.floor(Math.random() * (damage[1] - damage[0] + 1)) + damage[0];

    }

    $("#attack").on("click", function () {


        console.log(characterHealth);
        console.log(enemyHealth);

        characterHealth -= attack(characterDMG);
        enemyHealth -= attack(enemyDMG);

        console.log(characterHealth);
        console.log(enemyHealth);

        characterSelected.html(characterHealth);
        enemySelected.html(enemyHealth);

        if (characterHealth <= 0) {

            $("#characterSelection").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

        }

        else if (enemyHealth <= 0) {

            $("#fightStage").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

        }

    });

    $("#force").on("click", function () {

        console.log(characterHealth);
        console.log(characterHealth);
        console.log(enemyHealth);

        characterHealth -= attack(characterforceDMG);
        enemyHealth -= attack(enemyforceDMG);

        console.log(characterHealth);
        console.log(enemyHealth);

        characterSelected.html(characterHealth);
        enemySelected.html(enemyHealth);

        if (characterHealth <= 0) {

            $("#characterSelection").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

        }

        else if (enemyHealth <= 0) {

            $("#fightStage").hide();

            $("#playButtons").hide();

            $("#resetStage").show();

        }

    });

    $("#enrage").on("click", function () {

        characterDMG[0] += 20;
        characterDMG[1] += 20;

        console.log(characterDMG);

        characterforceDMG[0] += 20;
        characterforceDMG[1] += 20;

        console.log(characterforceDMG);


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
        $("#textBox").hide();

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

        $(".anakinHP").html(randNum(150, 250));
        $(".malakHP").text(randNum(150, 250));
        $(".galenHP").text(randNum(150, 250));
        $(".revanHP").text(randNum(150, 250));
        $(".anakin-2-HP").html(randNum(150, 250));
        $(".malak-2-HP").text(randNum(150, 250));
        $(".galen-2-HP").text(randNum(150, 250));
        $(".revan-2-HP").text(randNum(150, 250));


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