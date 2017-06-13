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