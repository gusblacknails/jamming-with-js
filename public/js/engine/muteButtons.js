//-----------------mute buttons--------------------------//

$('#muteKick').on("click", function() {

    if ($(this).hasClass("kickMuteButton")) {

        $(this)
        console.log("Mutebutton pressed")
        kickSampler.mute = true
        $('#muteKick').toggleClass("kickMuteButton kickMuteButtonOff");
    } else {

        $(this)
        console.log("MutebuttonOff pressed")
        kickSampler.mute = false
        $('#muteKick').toggleClass("kickMuteButtonOff kickMuteButton");
    }

});
$('#muteSnare').on("click", function() {

    if ($(this).hasClass("snareMuteButton")) {

        $(this)
        console.log("snareMutebutton pressed")
        snareSampler.mute = true
        $('#muteSnare').toggleClass("snareMuteButton snareMuteButtonOff");
    } else {

        $(this)
        console.log("snareMutebuttonOff pressed")
        snareSampler.mute = false
        $('#muteSnare').toggleClass("snareMuteButtonOff snareMuteButton");
    }

});
$('#muteHihat').on("click", function() {

    if ($(this).hasClass("hihatMuteButton")) {

        $(this)
        console.log("hihatMutebutton pressed")
        hihatSampler.mute = true

        $('#muteHihat').toggleClass("hihatMuteButton hihatMuteButtonOff");
    } else {

        $(this)
        console.log("hihatMutebuttonOff pressed")
        hihatSampler.mute = false

        $('#muteHihat').toggleClass("hihatMuteButtonOff hihatMuteButton");
    }

});
$('#muteFX').on("click", function() {

    if ($(this).hasClass("FXMuteButton")) {

        $(this)
        console.log("FXMutebutton pressed")
        fxSampler.mute = true
        $('#muteFX').toggleClass("FXMuteButton FXMuteButtonOff");
    } else {

        $(this)
        console.log("FXMutebuttonOff pressed")
        fxSampler.mute = false
        $('#muteFX').toggleClass("FXMuteButtonOff FXMuteButton");
    }

});
$('#drumGroup').on("click", function() {

    if ($(this).hasClass("drumMute")) {

        $(this)
        console.log("drumMute pressed")
        kickSampler.mute = true
        snareSampler.mute = true
        hihatSampler.mute = true
        fxSampler.mute = true
        $('#drumGroup').toggleClass("drumMute drumMuteOff");
    } else {

        $(this)
        console.log("drumMuteOff pressed")
        kickSampler.mute = false
        snareSampler.mute = false
        hihatSampler.mute = false
        fxSampler.mute = false
        $('#drumGroup').toggleClass("drumMuteOff drumMute");
    }

});

$('#melodyGroup').on("click", function() {

    if ($(this).hasClass("melodyMute")) {

        $(this)
        console.log("melodyMute pressed")
        melodyVol.volume.input.value = -1

        $('#melodyGroup').toggleClass("melodyMute melodyMuteOff");
    } else {
        let melodyOldValue = masterMix.val.R
        $(this)
        console.log("drumMuteOff pressed")
        melodyVol.volume.input.value = crossfaderParser(melodyOldValue)
        $('#melodyGroup').toggleClass("melodyMuteOff melodyMute");
    }

});
