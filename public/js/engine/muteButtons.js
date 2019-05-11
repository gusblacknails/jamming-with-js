//-----------------mute buttons--------------------------//

$('#muteKick').on("click", function() {

    if ($(this).hasClass("kickMuteButton")) {


        console.log("Mutebutton pressed")
        kickSelect.mute = true
        $('#muteKick').toggleClass("kickMuteButton kickMuteButtonOff");
    } else {


        console.log("MutebuttonOff pressed")
        kickSelect.mute = false
        $('#muteKick').toggleClass("kickMuteButtonOff kickMuteButton");
    }

});
$('#muteSnare').on("click", function() {

    if ($(this).hasClass("snareMuteButton")) {


        console.log("snareMutebutton pressed")
        snareSelect.mute = true
        $('#muteSnare').toggleClass("snareMuteButton snareMuteButtonOff");
    } else {


        console.log("snareMutebuttonOff pressed")
        snareSelect.mute = false
        $('#muteSnare').toggleClass("snareMuteButtonOff snareMuteButton");
    }

});
$('#muteHihat').on("click", function() {

    if ($(this).hasClass("hihatMuteButton")) {


        console.log("hihatMutebutton pressed")
        hihatSelect.mute = true

        $('#muteHihat').toggleClass("hihatMuteButton hihatMuteButtonOff");
    } else {


        console.log("hihatMutebuttonOff pressed")
        hihatSelect.mute = false

        $('#muteHihat').toggleClass("hihatMuteButtonOff hihatMuteButton");
    }

});
$('#muteFX').on("click", function() {

    if ($(this).hasClass("FXMuteButton")) {


        console.log("FXMutebutton pressed")
        fxSelect.mute = true
        $('#muteFX').toggleClass("FXMuteButton FXMuteButtonOff");
    } else {


        console.log("FXMutebuttonOff pressed")
        fxSelectr.mute = false
        $('#muteFX').toggleClass("FXMuteButtonOff FXMuteButton");
    }

});
$('#drumGroup').on("click", function() {

    if ($(this).hasClass("drumMute")) {


        console.log("drumMute pressed")
        kickSelect.mute = true
        snareSelect.mute = true
        hihatSelect.mute = true
        fxSelect.mute = true
        $('#drumGroup').toggleClass("drumMute drumMuteOff");
    } else {


        console.log("drumMuteOff pressed")
        kickSelect.mute = false
        snareSelect.mute = false
        hihatSelect.mute = false
        fxSelect.mute = false
        $('#drumGroup').toggleClass("drumMuteOff drumMute");
    }

});

$('#melodyGroup').on("click", function() {

    if ($(this).hasClass("melodyMute")) {
        loop.mute = true
        melodyVol.mute=true
        selectSynth.forEach(function(item) {
            item.mute = true
        })
        console.log("melodyMute pressed")


        $('#melodyGroup').toggleClass("melodyMute melodyMuteOff");
    } else {
        loop.mute = false
        melodyVol.mute=false
        selectSynth.forEach(function(item) {
                item.mute = false
            })

        $('#melodyGroup').toggleClass("melodyMuteOff melodyMute");
    }

});

$('#fx1').on("click", function() {

    if ($(this).hasClass("fxButton1_off")) {
        disto.wet.value = 0.6;
        $(this).toggleClass("fxButton1_off fxButton1_on");
    } else {
        disto.wet.value = 0;
        $(this).toggleClass("fxButton1_off fxButton1_on");
    }

});
$('#fx2').on("click", function() {

    if ($(this).hasClass("fxButton2_off")) {
        phaser.wet.value = 0.8;
        $(this).toggleClass("fxButton2_off fxButton2_on");
    } else {
        phaser.wet.value = 0;
        $(this).toggleClass("fxButton2_off fxButton2_on");
    }

});
$('#fx3').on("click", function() {

    if ($(this).hasClass("fxButton3_off")) {
        reverb.wet.value = 0.8;
        $(this).toggleClass("fxButton3_off fxButton3_on");
    } else {
        reverb.wet.value = 0;
        $(this).toggleClass("fxButton3_off fxButton3_on");
    }

});
