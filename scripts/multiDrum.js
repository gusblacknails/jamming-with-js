//-----------the sampler for each drum sound---------------//
var kickSampler = new Tone.MultiPlayer({
    urls: {
        
        "k1": "./samples/kickPunch.mp3",
        "k2": "./samples/kickRadiant.mp3",
        "k3": "./samples/kickFutura.mp3",
    },
    volume: -6,
    fadeOut: 0.1,
}).toMaster();
var snareSampler = new Tone.MultiPlayer({
    urls: {
        "sS": "./samples/snareSeismic.mp3",
        "sR": "./samples/snareRadiant.mp3",
        "sP": "./samples/snarePunch.mp3",
    },
    volume: -6,
    fadeOut: 0.1,
}).toMaster();
var hihatSampler = new Tone.MultiPlayer({
    urls: {
       
        "hh": "./samples/hihat.mp3",
        "hR": "./samples/hihatRadiant.mp3",
        "hS": "./samples/hihatSeismic.mp3",
    },
    volume: -6,
    fadeOut: 0.1,
}).toMaster();
var fxSampler = new Tone.MultiPlayer({
    urls: {
        "fC": "./samples/fxClap.mp3",
        "f2": "./samples/fxSound2.mp3",
        "f3": "./samples/fxSound3.mp3",
    },
    volume: -6,
    fadeOut: 0.1,
}).toMaster();

//the notes will play each sampler
var drumSound = ["k1", "k2", "k3", "sP", "sR", "sS", "hh", "hR", "hS", "fC", "f2", "f3"];
var kickSound = ["k1", "k2", "k3"];
var snareSound = ["sP", "sR", "sS"];
var hihatSound = ["hh", "hR", "hS"];
var fxSound = ["fC", "f2", "f3"];


var kickSelect = kickSound[0]
var snareSelect= snareSound[0]
var hihatSelect= hihatSound[0]
var fxSelect= fxSound[0]
//----------sampler for kick section----------------//
var negras = new Tone.Sequence(function(time, col) {
    var column = kickMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            var vel = 1;
            kickSampler.start(kickSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheas = new Tone.Sequence(function(time, col) {
    var column = kickMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
           
            var vel = 1;
            kickSampler.start(kickSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3]
], "4n");
var tresillos = new Tone.Sequence(function(time, col) {
    var column = kickMatrix3.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            //setting random velocities for each drum sample
            var vel = 1;
            kickSampler.start(kickSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
], "4n");


var semicorcheas = new Tone.Sequence(function(time, col) {
    var column = kickMatrix4.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            //setting random velocities for each drum sample
            var vel = 1;
            kickSampler.start(kickSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
], "4n");
//----------sequence for snare section----------------//
var negrasSnare = new Tone.Sequence(function(time, col) {
    var column = snareMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            var vel = 1;
            snareSampler.start(snareSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasSnare = new Tone.Sequence(function(time, col) {
    var column = snareMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
          
            var vel = 1;
            snareSampler.start(snareSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3]
], "4n");
var tresillosSnare = new Tone.Sequence(function(time, col) {
    var column = snareMatrix3.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
          
            var vel = 1;
            snareSampler.start(snareSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
], "4n");


var semicorcheasSnare = new Tone.Sequence(function(time, col) {
    var column = snareMatrix4.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
          
            var vel = 1;
            snareSampler.start(snareSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
], "4n");
//----------sequence for hihat section----------------//
var negrasHihat = new Tone.Sequence(function(time, col) {
    var column = hihatMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            var vel = 1;
            hihatSampler.start(hihatSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasHihat = new Tone.Sequence(function(time, col) {
    var column = hihatMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            
            var vel = 1;
            hihatSampler.start(hihatSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3]
], "4n");
var tresillosHihat = new Tone.Sequence(function(time, col) {
    var column = hihatMatrix3.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            
            var vel = 1;
            hihatSampler.start(hihatSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
], "4n");


var semicorcheasHihat = new Tone.Sequence(function(time, col) {
    var column = hihatMatrix4.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            
            var vel = 1;
            hihatSampler.start(hihatSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
], "4n");
//----------sequence for fx section----------------//
var negrasFX = new Tone.Sequence(function(time, col) {
    var column = fxMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
            var vel = 1;
            fxSampler.start(fxSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasFX = new Tone.Sequence(function(time, col) {
    var column = fxMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
           
            var vel = 1;
            fxSampler.start(fxSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3]
], "4n");
var tresillosFX = new Tone.Sequence(function(time, col) {
    var column = fxMatrix3.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
        
            var vel = 1;
            fxSampler.start(fxSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
], "4n");


var semicorcheasFX = new Tone.Sequence(function(time, col) {
    var column = fxMatrix4.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i] === 1) {
           
            var vel = 1;
            fxSampler.start(fxSelect, time, 0, "32n", 0, vel);
        }
    }

}, [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
], "4n");


//loading nexusUI
nx.onload = function() {

    nx.colorize("#ffc600")
  
    kickMatrix.row = 1
    kickMatrix.col = 4
    kickMatrix2.row = 1
    kickMatrix2.col = 4
    kickMatrix3.row = 1
    kickMatrix3.col = 4
    kickMatrix4.row = 1
    kickMatrix4.col = 4
    kickMatrix.init()
    kickMatrix2.init()
    kickMatrix3.init()
    kickMatrix4.init()

    snareMatrix.row = 1
    snareMatrix.col = 4
    snareMatrix2.row = 1
    snareMatrix2.col = 4
    snareMatrix3.row = 1
    snareMatrix3.col = 4
    snareMatrix4.row = 1
    snareMatrix4.col = 4
    snareMatrix.init()
    snareMatrix2.init()
    snareMatrix3.init()
    snareMatrix4.init()

    hihatMatrix.row = 1
    hihatMatrix.col = 4
    hihatMatrix2.row = 1
    hihatMatrix2.col = 4
    hihatMatrix3.row = 1
    hihatMatrix3.col = 4
    hihatMatrix4.row = 1
    hihatMatrix4.col = 4
    hihatMatrix.init()
    hihatMatrix2.init()
    hihatMatrix3.init()
    hihatMatrix4.init()

    fxMatrix.row = 1
    fxMatrix.col = 4
    fxMatrix2.row = 1
    fxMatrix2.col = 4
    fxMatrix3.row = 1
    fxMatrix3.col = 4
    fxMatrix4.row = 1
    fxMatrix4.col = 4
    fxMatrix.init()
    fxMatrix2.init()
    fxMatrix3.init()
    fxMatrix4.init()

}
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
        kickSampler.volume.value= -60
        $('#muteKick').toggleClass("kickMuteButton kickMuteButtonOff");
    } else {

        $(this)
        console.log("MutebuttonOff pressed")
         kickSampler.volume.value= -6
        $('#muteKick').toggleClass("kickMuteButtonOff kickMuteButton");
    }

});
$('#muteSnare').on("click", function() {

    if ($(this).hasClass("snareMuteButton")) {

        $(this)
        console.log("snareMutebutton pressed")
        snareSampler.volume.value= -60
        $('#muteSnare').toggleClass("snareMuteButton snareMuteButtonOff");
    } else {

        $(this)
        console.log("snareMutebuttonOff pressed")
        snareSampler.volume.value= -6
        $('#muteSnare').toggleClass("snareMuteButtonOff snareMuteButton");
    }

});
$('#muteHihat').on("click", function() {

    if ($(this).hasClass("hihatMuteButton")) {

        $(this)
        console.log("hihatMutebutton pressed")
        hihatSampler.volume.value= -60

        $('#muteHihat').toggleClass("hihatMuteButton hihatMuteButtonOff");
    } else {

        $(this)
        console.log("hihatMutebuttonOff pressed")
        hihatSampler.volume.value= -6

        $('#muteHihat').toggleClass("hihatMuteButtonOff hihatMuteButton");
    }

});
$('#muteFX').on("click", function() {

    if ($(this).hasClass("FXMuteButton")) {

        $(this)
        console.log("FXMutebutton pressed")
        fxSampler.volume.value= -60
        $('#muteFX').toggleClass("FXMuteButton FXMuteButtonOff");
    } else {

        $(this)
        console.log("FXMutebuttonOff pressed")
        fxSampler.volume.value= -6
        $('#muteFX').toggleClass("FXMuteButtonOff FXMuteButton");
    }

});
//-----------------------------------------------------------------------//

$("#play").on("click", () => {
        Tone.Transport.start('+0.1')
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


    })
    //stoping the drumMatrix and the Transport

$("#stop").on("click", () => {
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

    Tone.Transport.stop()
})
Tone.Transport.bpm.value = 100


var tempoRange = document.getElementById('tempo__range');
var bpm = document.getElementById('bpm');
tempoRange.addEventListener('input', function(event) {
  var value = event.target.value; // 70 - 140

  Tone.Transport.bpm.value = value;

  bpm.textContent = value;
});




