Tone.context.latencyHint= "balanced"
Tone.Transport.bpm.value = 120

var loop = new Tone.Sequence(function(time, col) {
    // console.log(col)
    notesMatrix.sequence(Tone.Transport.bpm.value)
    arpegioMatrix.sequence(Tone.Transport.bpm.value)
    arpegioMatrix2.sequence(Tone.Transport.bpm.value)
    arpegioMatrix3.sequence(Tone.Transport.bpm.value)
    arpegioMatrix4.sequence(Tone.Transport.bpm.value)
    let currentNote = NoteSelector(notesMatrix, threeScales, time, col)
    oneNoteSequence(selected_1x_Synth,arpegioMatrix, currentNote["oneNote"], time, col)
    twoNoteSequence(selected_2x_Synth,arpegioMatrix2, currentNote["twoNote"], time, col)
    threeNoteSequence(selected_3x_Synth,arpegioMatrix3, currentNote["threeNote"], time, col)
    fourNoteSequence(selected_4x_Synth,arpegioMatrix4, currentNote["fourNote"], time, col)

      if (col === 7) {
      AccentFirstBeat(notesMatrix);
      AccentFirstBeat(arpegioMatrix);
      AccentFirstBeat(arpegioMatrix2);
      AccentFirstBeat(arpegioMatrix3);
      AccentFirstBeat(arpegioMatrix4);
  }
}, [0, 1, 2, 3, 4, 5, 6, 7], "4n");

loop.humanize = true;
// loop.loopEnd = 8

function AccentFirstBeat(matrix) {
  matrix.sequence(Tone.Transport.bpm.value)
}







