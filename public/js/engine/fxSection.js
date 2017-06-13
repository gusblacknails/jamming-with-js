
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