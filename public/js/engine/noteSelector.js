var NoteSelector =(notesMatrix, threeScales, time, i) => {
    var noteSelected= {
            oneNote:threeScales[0],
            twoNote:[threeScales[0],threeScales[2]],
            threeNote:[threeScales[0],threeScales[2],threeScales[4]],
            fourNote:[threeScales[0],threeScales[2],threeScales[4],threeScales[6]]
        };

    var selected = notesMatrix.matrix;

        if (selected[i][0]){
          noteSelected =  {
            oneNote:threeScales[0],
            twoNote:[threeScales[0],threeScales[2]],
            threeNote:[threeScales[0],threeScales[2],threeScales[4]],
            fourNote:[threeScales[0],threeScales[2],threeScales[4],threeScales[6]]
        }}
        else if (selected[i][1]){ 
          noteSelected = {
            oneNote:threeScales[1],
            twoNote:[threeScales[1],threeScales[3]],
            threeNote:[threeScales[1],threeScales[3],threeScales[5]],
            fourNote:[threeScales[1],threeScales[3],threeScales[5],threeScales[7]]} 
        }
        else if (selected[i][2]){
          noteSelected = {
            oneNote:threeScales[2],
            twoNote:[threeScales[2],threeScales[4]],
            threeNote:[threeScales[2],threeScales[4],threeScales[6]],
            fourNote:[threeScales[2],threeScales[4],threeScales[6],threeScales[8]]}
        } 
        else if (selected[i][3]){
          noteSelected = {
            oneNote:threeScales[3],
            twoNote:[threeScales[3],threeScales[5]],
            threeNote:[threeScales[3],threeScales[5],threeScales[7]],
            fourNote:[threeScales[3],threeScales[5],threeScales[7],threeScales[9]]}
        } 
        else if (selected[i][4]){
          noteSelected = {
            oneNote:threeScales[4],
            twoNote:[threeScales[4],threeScales[6]],
            threeNote:[threeScales[4],threeScales[6],threeScales[8]],
            fourNote:[threeScales[4],threeScales[6],threeScales[8],threeScales[10]]}
        } 
        else if (selected[i][5]){
          noteSelected = {
            oneNote:threeScales[5],
            twoNote:[threeScales[5],threeScales[7]],
            threeNote:[threeScales[5],threeScales[7],threeScales[9]],
            fourNote:[threeScales[5],threeScales[7],threeScales[9],threeScales[11]]}
        } 
        else if (selected[i][6]){
          noteSelected = {
            oneNote:threeScales[6],
            twoNote:[threeScales[6],threeScales[8]],
            threeNote:[threeScales[6],threeScales[8],threeScales[10]],
            fourNote:[threeScales[6],threeScales[8],threeScales[10],threeScales[12]]}
        } 
        notesMatrix.place = i;
        return noteSelected

         
}