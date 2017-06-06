var NoteSelector =(notesMatrix, twoScales, time, i) => {
    var noteSelected;
    var selected = notesMatrix.matrix;

        if (selected[i][0]){
          noteSelected =  {
            oneNote:twoScales[0],
            twoNote:[twoScales[0],twoScales[2]],
            threeNote:[twoScales[0],twoScales[2],twoScales[4]],
            fourNote:[twoScales[0],twoScales[2],twoScales[4],twoScales[6]]
        }}
        else if (selected[i][1]){ 
          noteSelected = {
            oneNote:twoScales[1],
            twoNote:[twoScales[1],twoScales[3]],
            threeNote:[twoScales[1],twoScales[3],twoScales[5]],
            fourNote:[twoScales[1],twoScales[3],twoScales[5],twoScales[7]]} 
        }
        else if (selected[i][2]){
          noteSelected = {
            oneNote:twoScales[2],
            twoNote:[twoScales[2],twoScales[4]],
            threeNote:[twoScales[2],twoScales[4],twoScales[6]],
            fourNote:[twoScales[2],twoScales[4],twoScales[6],twoScales[8]]}
        } 
        else if (selected[i][3]){
          noteSelected = {
            oneNote:twoScales[3],
            twoNote:[twoScales[3],twoScales[5]],
            threeNote:[twoScales[3],twoScales[5],twoScales[7]],
            fourNote:[twoScales[3],twoScales[5],twoScales[7],twoScales[9]]}
        } 
        else if (selected[i][4]){
          noteSelected = {
            oneNote:twoScales[4],
            twoNote:[twoScales[4],twoScales[6]],
            threeNote:[twoScales[4],twoScales[6],twoScales[8]],
            fourNote:[twoScales[4],twoScales[6],twoScales[8],twoScales[10]]}
        } 
        else if (selected[i][5]){
          noteSelected = {
            oneNote:twoScales[5],
            twoNote:[twoScales[5],twoScales[7]],
            threeNote:[twoScales[5],twoScales[7],twoScales[9]],
            fourNote:[twoScales[5],twoScales[7],twoScales[9],twoScales[11]]}
        } 
        else if (selected[i][6]){
          noteSelected = {
            oneNote:twoScales[6],
            twoNote:[twoScales[6],twoScales[8]],
            threeNote:[twoScales[6],twoScales[8],twoScales[10]],
            fourNote:[twoScales[6],twoScales[8],twoScales[10],twoScales[12]]}
        } 

        return noteSelected
}