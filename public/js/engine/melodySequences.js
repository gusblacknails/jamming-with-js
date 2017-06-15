function oneNoteSequence(SelectSynth,arpegioMatrix, threeScales, time, col) {
    arpegioMatrix.place = col;
    var column = arpegioMatrix.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(threeScales, '8n',time)   
        }
    }
   }

function twoNoteSequence(SelectSynth,arpegioMatrix2, threeScales, time, col) {
    arpegioMatrix2.place = col;

    var twoNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix2.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    }     

}, [threeScales],"8n")
    
    twoNoteSeq.loop = 2;
    twoNoteSeq.loopEnd = "2m";
    twoNoteSeq.humanize = true;
    twoNoteSeq.start()
    
   }

function threeNoteSequence(SelectSynth,arpegioMatrix3, threeScales, time, col) {
 arpegioMatrix3.place = col;

    var threeNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix3.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    } 
   
}, [threeScales],"8t")
    
    threeNoteSeq.loop = 2;
    threeNoteSeq.loopEnd = "2m";
    threeNoteSeq.humanize = true;
    threeNoteSeq.start()
    
    
   }


function fourNoteSequence(SelectSynth,arpegioMatrix4, threeScales, time, col) {
 arpegioMatrix4.place = col;

    var fourNoteSeq = new Tone.Sequence(function(time, note){
    var column = arpegioMatrix4.matrix[col];
    for (var i = 0; i < column.length; i++) {
        if (column[i]) {
         SelectSynth.triggerAttackRelease(note, '8n',time) 
        }
    } 
   
}, [threeScales],"8n")
    
    fourNoteSeq.loop = 2;
    fourNoteSeq.loopEnd = "2m";
    fourNoteSeq.humanize = true;
    fourNoteSeq.start()
}

