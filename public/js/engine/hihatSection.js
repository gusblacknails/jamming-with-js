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