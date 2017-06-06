var NoteSelector =(notesMatrix, twoScales, time, i) => {
    var noteSelected;
    var selected = notesMatrix.matrix;

        if (selected[i][0]) {
            noteSelected = twoScales[0]
           console.log(noteSelected)
        }
        if (selected[i][1]) {
            noteSelected = twoScales[1]
            console.log(noteSelected)        }
        if (selected[i][2]) {
            noteSelected = twoScales[2]
          console.log(noteSelected)
        }
        if (selected[i][3]) {
            noteSelected = twoScales[3]
          console.log(noteSelected)
        }
        if (selected[i][4]) {
            noteSelected = twoScales[4]
          console.log(noteSelected)
        }
        if (selected[i][5]) {
            noteSelected = twoScales[5]
          console.log(noteSelected)
        }
        if (selected[i][6]) {
            noteSelected = twoScales[6]
          console.log(noteSelected)
        }
        
        return noteSelected
}