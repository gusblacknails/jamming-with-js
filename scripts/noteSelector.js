var NoteSelector =(notesMatrix, twoScales, time, i) => {
    var noteSelected;
    var selected = notesMatrix.matrix;

        if (selected[i][0]){
          noteSelected =  {oneNote:twoScales[0],
            twoNote:[twoScales[0],twoScales[2]]}
        }
        else if (selected[i][1]){ 
          noteSelected = {oneNote:twoScales[1],
          twoNote:[twoScales[1],twoScales[3]]} 
        }
        else if (selected[i][2]){
          noteSelected = {oneNote:twoScales[2],
          twoNote:[twoScales[2],twoScales[4]]}
        } 
        else if (selected[i][3]){
          noteSelected = {oneNote:twoScales[3],
          twoNote:[twoScales[3],twoScales[5]]}
        } 
        else if (selected[i][4]){
          noteSelected = {oneNote:twoScales[4],
          twoNote:[twoScales[4],twoScales[6]]}
        } 
        else if (selected[i][5]){
          noteSelected = {oneNote:twoScales[5],
          twoNote:[twoScales[5],twoScales[7]]}
        } 
        else if (selected[i][6]){
          noteSelected = {oneNote:twoScales[6],
          twoNote:[twoScales[6],twoScales[8]]}
        } 

        return noteSelected
}