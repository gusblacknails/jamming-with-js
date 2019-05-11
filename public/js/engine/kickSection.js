//----------sequence for kick section----------------//
var negras = new Tone.Sequence(function(time, col) {
    var drum = [kickMatrix,kickMatrix2,kickMatrix3,kickMatrix4,snareMatrix,snareMatrix2,snareMatrix3,snareMatrix4,hihatMatrix,hihatMatrix2,hihatMatrix3,hihatMatrix4,fxMatrix,fxMatrix2,fxMatrix3,fxMatrix4]
    var column = kickMatrix.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {
            var vel = 1;
            kickSelect.start();
        }
    }
    //---------------BeatDraw inside kick qurter note section----------------------------//
    if (col === 0) {
        Tone.Draw.schedule(function() {
            if ($("#muteFX").parent().parent().hasClass("Accent")) {
                $("#muteFX").parent().parent().toggleClass("InstrumentBox Accent");
            }
            $("#muteKick").parent().parent().toggleClass("InstrumentBox Accent");

            $("#muteSnare").parent().parent().removeClass("Accent");
            $("#muteHihat").parent().parent().removeClass("Accent");
            $("#muteFx").parent().parent().removeClass("Accent");

            $("#muteSnare").parent().parent().addClass("InstrumentBox");
            $("#muteHihat").parent().parent().addClass("InstrumentBox");
            $("#muteFx").parent().parent().addClass("InstrumentBox");


            drum.forEach(function(mat) {
            mat.jumpToCol(0)
    })

        }, time)
    }

    if (col === 1) {
        Tone.Draw.schedule(function() {
            $("#muteSnare").parent().parent().toggleClass("InstrumentBox Accent");

            $("#muteKick").parent().parent().removeClass("Accent");
            $("#muteHihat").parent().parent().removeClass("Accent");
            $("#muteFx").parent().parent().removeClass("Accent");

            $("#muteKick").parent().parent().addClass("InstrumentBox");
            $("#muteHihat").parent().parent().addClass("InstrumentBox");
            $("#muteFx").parent().parent().addClass("InstrumentBox");

            drum.forEach(function(mat) {
            mat.jumpToCol(1)
    })



        }, time)
    }
    if (col === 2) {
        Tone.Draw.schedule(function() {
            $("#muteHihat").parent().parent().toggleClass("InstrumentBox Accent");

            $("#muteKick").parent().parent().removeClass("Accent");
            $("#muteSnare").parent().parent().removeClass("Accent");
            $("#muteFx").parent().parent().removeClass("Accent");

            $("#muteKick").parent().parent().addClass("InstrumentBox");
            $("#muteSnare").parent().parent().addClass("InstrumentBox");
            $("#muteFx").parent().parent().addClass("InstrumentBox");

            drum.forEach(function(mat) {
            mat.jumpToCol(2)
    })

        }, time)
    }
    if (col === 3) {
        Tone.Draw.schedule(function() {
            $("#muteFX").parent().parent().toggleClass("InstrumentBox Accent");

            $("#muteKick").parent().parent().removeClass("Accent");
            $("#muteSnare").parent().parent().removeClass("Accent");
            $("#muteHihat").parent().parent().removeClass("Accent");

            $("#muteKick").parent().parent().addClass("InstrumentBox");
            $("#muteSnare").parent().parent().addClass("InstrumentBox");
            $("#muteHihat").parent().parent().addClass("InstrumentBox");

            drum.forEach(function(mat) {
            mat.jumpToCol(3)
    })


        }, time)
    }
    //------------------------------------------------------------------------//

}, [0, 1, 2, 3], "4n");

var corcheas = new Tone.Sequence(function(time, col) {
    var column = kickMatrix2.matrix[col];
    for (var i = 0; i < 4; i++) {
        if (column[i]) {

            var vel = 1;
            kickSelect.start();
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
            kickSelect.start();
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
            kickSelect.start();
        }
    }

}, [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
], "4n");
