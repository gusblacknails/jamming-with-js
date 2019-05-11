Tone.context.latencyHint= "balanced"
Tone.Transport.bpm.value = 120

var loop = new Tone.Sequence(function(time, col) {
    console.log(col)
    if (col === 0) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(0)

    })

        }, time)
    }
    if (col === 1) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(1)

    })

        }, time)
    }
      if (col === 2) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(2)

    })

        }, time)
    }
      if (col === 3) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(3)

    })

        }, time)
    }
      if (col === 4) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(4)

    })

        }, time)
    }
      if (col === 5) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(5)

    })

        }, time)
    }
      if (col === 6) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(6)

    })

        }, time)
    }
      if (col === 7) {
        Tone.Draw.schedule(function() {
            var arpegio = [notesMatrix,arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
            arpegio.forEach(function(mat) {
            mat.jumpToCol(7)

    })

        }, time)
    }
    let currentNote = NoteSelector(notesMatrix, threeScales, time, col)
    oneNoteSequence(selected_1x_Synth,arpegioMatrix, currentNote["oneNote"], time, col)
    twoNoteSequence(selected_2x_Synth,arpegioMatrix2, currentNote["twoNote"], time, col)
    threeNoteSequence(selected_3x_Synth,arpegioMatrix3, currentNote["threeNote"], time, col)
    fourNoteSequence(selected_4x_Synth,arpegioMatrix4, currentNote["fourNote"], time, col)

}, [0, 1, 2, 3, 4, 5, 6, 7], "4n");

// loop.humanize = true;
