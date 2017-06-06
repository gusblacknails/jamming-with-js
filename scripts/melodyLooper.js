var loop = new Tone.Sequence(function(time, col) {
    console.log(col)
   
    var currentNote = NoteSelector(notesMatrix, twoScales, time, col)
    console.log(currentNote["twoNote"])
    oneNoteSequence(arpegioMatrix,currentNote["oneNote"], time, col)
    twoNoteSequence(arpegioMatrix2, currentNote["twoNote"], time, col)
    threeNoteSequence(arpegioMatrix3, escala, time, col)
    fourNoteSequence(arpegioMatrix4, escala, time, col)

}, [0, 1, 2, 3, 4, 5, 6, 7], "4n");

Tone.Transport.bpm.value = 120





