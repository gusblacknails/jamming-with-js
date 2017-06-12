Tone.context.latencyHint= "balanced"


var loop = new Tone.Sequence(function(time, col) {
    console.log(col)
   
    var currentNote = NoteSelector(notesMatrix, threeScales, time, col)
    oneNoteSequence(selected_1x_Synth,arpegioMatrix, currentNote["oneNote"], time, col)
    twoNoteSequence(selected_2x_Synth,arpegioMatrix2, currentNote["twoNote"], time, col)
    threeNoteSequence(selected_3x_Synth,arpegioMatrix3, currentNote["threeNote"], time, col)
    fourNoteSequence(selected_4x_Synth,arpegioMatrix4, currentNote["fourNote"], time, col)

}, [0, 1, 2, 3, 4, 5, 6, 7], "4n");

loop.humanize = true;

Tone.Transport.bpm.value = 120


//--------------Beat Draw------------------------//

// function beatDraw(arpegioMatrix,time,col){
//     Tone.Transport.schedule(function(arpegioMatrix,time,col) {
//     //use the time argument to schedule a callback with Tone.Draw
//     Tone.Draw.schedule(function() {
//           //do drawing or DOM manipulation here
  
//      $("#muteKick").parent().parent().hasClass("InstrumentBox")) {

//             $("#muteKick").parent().parent().toggleClass("InstrumentBox Accent");
//         } else {
//             $('#muteKick').parent().parent().toggleClass("Accent InstrumentBox");
//         }
      
// , time)
// }, "4n")

// }







