

//-----------------Sample selection for each drum matrix--------------------//
$('#kick1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#kick2, #kick3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[0]
});
$('#kick2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#kick1, #kick3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[1]
});
$('#kick3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#kick2, #kick1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[2]
});
$('#snare1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#snare2, #snare3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[0]
});
$('#snare2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#snare1, #snare3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[1]
});
$('#snare3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#snare2, #snare1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[2]
});
$('#hihat1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#hihat2, #hihat3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[0]
});
$('#hihat2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#hihat1, #hihat3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[1]
});
$('#hihat3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#hihat2, #hihat1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[2]
});
$('#soundFX1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#soundFX2, #soundFX3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[0]
});
$('#soundFX2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#soundFX1, #soundFX3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[1]
});
$('#soundFX3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#soundFX2, #soundFX1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[2]
});
//-----------------mute buttons--------------------------//

$('#muteKick').on("click", function() {

    if ($(this).hasClass("kickMuteButton")) {

        $(this)
        console.log("Mutebutton pressed")
        kickSampler.mute= true
        $('#muteKick').toggleClass("kickMuteButton kickMuteButtonOff");
    } else {

        $(this)
        console.log("MutebuttonOff pressed")
         kickSampler.mute= false
        $('#muteKick').toggleClass("kickMuteButtonOff kickMuteButton");
    }

});
$('#muteSnare').on("click", function() {

    if ($(this).hasClass("snareMuteButton")) {

        $(this)
        console.log("snareMutebutton pressed")
        snareSampler.mute= true
        $('#muteSnare').toggleClass("snareMuteButton snareMuteButtonOff");
    } else {

        $(this)
        console.log("snareMutebuttonOff pressed")
        snareSampler.mute= false
        $('#muteSnare').toggleClass("snareMuteButtonOff snareMuteButton");
    }

});
$('#muteHihat').on("click", function() {

    if ($(this).hasClass("hihatMuteButton")) {

        $(this)
        console.log("hihatMutebutton pressed")
        hihatSampler.mute= true

        $('#muteHihat').toggleClass("hihatMuteButton hihatMuteButtonOff");
    } else {

        $(this)
        console.log("hihatMutebuttonOff pressed")
        hihatSampler.mute= false

        $('#muteHihat').toggleClass("hihatMuteButtonOff hihatMuteButton");
    }

});
$('#muteFX').on("click", function() {

    if ($(this).hasClass("FXMuteButton")) {

        $(this)
        console.log("FXMutebutton pressed")
        fxSampler.mute= true
        $('#muteFX').toggleClass("FXMuteButton FXMuteButtonOff");
    } else {

        $(this)
        console.log("FXMutebuttonOff pressed")
        fxSampler.mute= false
        $('#muteFX').toggleClass("FXMuteButtonOff FXMuteButton");
    }

});
$('#drumGroup').on("click", function() {

    if ($(this).hasClass("drumMute")) {

        $(this)
        console.log("drumMute pressed")
        kickSampler.mute= true
        snareSampler.mute= true
        hihatSampler.mute= true
        fxSampler.mute= true
        $('#drumGroup').toggleClass("drumMute drumMuteOff");
    } else {

        $(this)
        console.log("drumMuteOff pressed")
        kickSampler.mute= false
        snareSampler.mute= false
        hihatSampler.mute= false
        fxSampler.mute= false
        $('#drumGroup').toggleClass("drumMuteOff drumMute");
    }

});

//-----------------------------------------------------------------------//

$("#play").on("click", () => {
        Tone.Transport.start("+0.1")
        loop.start()
        negras.start()
        corcheas.start()
        tresillos.start()
        semicorcheas.start()
        kickMatrix.sequence(Tone.Transport.bpm.value)
        kickMatrix2.sequence(Tone.Transport.bpm.value)
        kickMatrix3.sequence(Tone.Transport.bpm.value)
        kickMatrix4.sequence(Tone.Transport.bpm.value)
        kickMatrix.init()
        kickMatrix2.init()
        kickMatrix3.init()
        kickMatrix4.init()

        negrasSnare.start()
        corcheasSnare.start()
        tresillosSnare.start()
        semicorcheasSnare.start()
        snareMatrix.sequence(Tone.Transport.bpm.value)
        snareMatrix2.sequence(Tone.Transport.bpm.value)
        snareMatrix3.sequence(Tone.Transport.bpm.value)
        snareMatrix4.sequence(Tone.Transport.bpm.value)
        snareMatrix.init()
        snareMatrix2.init()
        snareMatrix3.init()
        snareMatrix4.init()

        negrasHihat.start()
        corcheasHihat.start()
        tresillosHihat.start()
        semicorcheasHihat.start()
        hihatMatrix.sequence(Tone.Transport.bpm.value)
        hihatMatrix2.sequence(Tone.Transport.bpm.value)
        hihatMatrix3.sequence(Tone.Transport.bpm.value)
        hihatMatrix4.sequence(Tone.Transport.bpm.value)
        hihatMatrix.init()
        hihatMatrix2.init()
        hihatMatrix3.init()
        hihatMatrix4.init()

        negrasFX.start()
        corcheasFX.start()
        tresillosFX.start()
        semicorcheasFX.start()
        fxMatrix.sequence(Tone.Transport.bpm.value)
        fxMatrix2.sequence(Tone.Transport.bpm.value)
        fxMatrix3.sequence(Tone.Transport.bpm.value)
        fxMatrix4.sequence(Tone.Transport.bpm.value)
        fxMatrix.init()
        fxMatrix2.init()
        fxMatrix3.init()
        fxMatrix4.init()

        

    notesMatrix.sequence(Tone.Transport.bpm.value)
    arpegioMatrix.sequence(Tone.Transport.bpm.value)
    arpegioMatrix2.sequence(Tone.Transport.bpm.value)
    arpegioMatrix3.sequence(Tone.Transport.bpm.value)
    arpegioMatrix4.sequence(Tone.Transport.bpm.value)
    notesMatrix.init()
    arpegioMatrix.init()
    arpegioMatrix2.init()
    arpegioMatrix3.init()
    arpegioMatrix4.init()

    })
    //stop drumMatrix and Transport

$("#stop").on("click", () => {
    Tone.Transport.stop()

    kickMatrix.stop()
    kickMatrix2.stop()
    kickMatrix3.stop()
    kickMatrix4.stop()

    snareMatrix.stop()
    snareMatrix2.stop()
    snareMatrix3.stop()
    snareMatrix4.stop()

    hihatMatrix.stop()
    hihatMatrix2.stop()
    hihatMatrix3.stop()
    hihatMatrix4.stop()

    fxMatrix.stop()
    fxMatrix2.stop()
    fxMatrix3.stop()
    fxMatrix4.stop()

    notesMatrix.stop()
    arpegioMatrix.stop()
    arpegioMatrix2.stop()
    arpegioMatrix3.stop()
    arpegioMatrix4.stop()

    
})

//---------BPM---------------------//

var tempoRange = document.getElementById('tempo__range');
var bpm = document.getElementById('bpm');
tempoRange.addEventListener('input', function(event) {
  var value = event.target.value; // 70 - 140

  Tone.Transport.bpm.value = value;

  bpm.textContent = value;
});

//------------set scale------------------//

var chosenNote = $("#root_note").val()
var chosenScale = $("#scale").val()
var octave = $("#octave").val()
var escala = []
var twoScales = []
var threeScales = []

$("#set").on("click", () => {
    chosenNote = $("#root_note").val();
    // console.log(chosenNote)
    chosenScale = $("#scale").val();
    // console.log(chosenScale)
    octave = $("#octave").val();
    //here we decide wich mode use
    escala = Tonal.scale.get(chosenScale, chosenNote + octave);
    escala2= Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) +1))
    escala3= Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) +2))
    twoScales = escala.concat(escala2)
    threeScales = twoScales.concat(escala3)
    console.log(threeScales)

    //setting the notes on the boxes
    $("#1note").text(`${twoScales[0]}`)
    $("#2note").text(`${twoScales[1]}`)
    $("#3note").text(`${twoScales[2]}`)
    $("#4note").text(`${twoScales[3]}`)
    $("#5note").text(`${twoScales[4]}`)
    $("#6note").text(`${twoScales[5]}`)
    $("#7note").text(`${twoScales[6]}`)

    return twoScales
     
})

//-----------crossfade mixing--------------//





