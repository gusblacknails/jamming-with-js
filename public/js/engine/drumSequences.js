//----------sequence for kick section----------------//
var negras = new Tone.Sequence(function(time, col) {
    var column = kickMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
            var vel = 1;
            kickSampler.start(kickSelect, time, 0, "32n", 0, vel);
        }
    }
    Tone.Draw.schedule(function() {
          //do drawing or DOM manipulation here
  
        if($("#muteKick").parent().parent().hasClass("InstrumentBox")) {

            $("#muteKick").parent().parent().toggleClass("InstrumentBox Accent");
        } else {
            $('#muteKick').parent().parent().toggleClass("Accent InstrumentBox");
        }
      
}, time)

}, [0, 1, 2, 3], "4n");

var corcheas = new Tone.Sequence(function(time, col) {
    var column = kickMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
           
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
        if (column[i]) {
            
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
        if (column[i]) {
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
        if (column[i]) {
            var vel = 1;
            snareSampler.start(snareSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasSnare = new Tone.Sequence(function(time, col) {
    var column = snareMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
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
        if (column[i]) {
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
        if (column[i]) {
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
        if (column[i]) {
            var vel = 1;
            hihatSampler.start(hihatSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasHihat = new Tone.Sequence(function(time, col) {
    var column = hihatMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
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
        if (column[i]) {
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
        if (column[i]) {
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
        if (column[i]) {
            var vel = 1;
            fxSampler.start(fxSelect, time, 0, "32n", 0, vel);
        }
    }

}, [0, 1, 2, 3], "4n");

var corcheasFX = new Tone.Sequence(function(time, col) {
    var column = fxMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
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
        if (column[i]) {
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
        if (column[i]) {
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