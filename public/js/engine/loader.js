//audio context for web and mobile

const context = new (window.AudioContext || window.webkitAudioContext)();

//check the browser
function checkBrowser(){
  let isChrome = !!window.chrome && !!window.chrome.webstore;
  if(!isChrome){
    alert("This app works best with Google Chrome, some features may not work in other browsers.")
  }
}
checkBrowser();
nx.onload = function() {
    
 
    nx.colorize("#A6A6A6")
    notesMatrix.row = 7
    notesMatrix.col = 8
    notesMatrix.colors.accent = "#ffc600"
    notesMatrix.init()
    masterMix.init()
    masterMix.colors.accent = "#A6A6A6"

    var arpegio = [arpegioMatrix, arpegioMatrix2 ,arpegioMatrix3,arpegioMatrix4]
    arpegio.forEach(function(mat) {
        mat.col = 8
        mat.row = 1
        mat.init()
        mat.colors.accent = "#ffc600"
    })
    var drum = [kickMatrix,kickMatrix2,kickMatrix3,kickMatrix4,snareMatrix,snareMatrix2,snareMatrix3,snareMatrix4,hihatMatrix,hihatMatrix2,hihatMatrix3,hihatMatrix4,fxMatrix,fxMatrix2,fxMatrix3,fxMatrix4]
    drum.forEach(function(mat) {
        mat.col = 4
        mat.row = 1
        mat.init()
        mat.colors.accent = "#ffc600"
    })

}










