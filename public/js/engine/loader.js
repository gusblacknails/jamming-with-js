nx.onload = function() {
    checkBrowser();
 
    nx.colorize("#A6A6A6")
    notesMatrix.row = 7
    notesMatrix.col = 8
    notesMatrix.colors.accent = "#ffc600"

    masterMix.init()
    masterMix.colors.accent = "#A6A6A6"

    arpegioMatrix.row = 1
    arpegioMatrix.col = 8
    arpegioMatrix2.row = 1
    arpegioMatrix2.col = 8
    arpegioMatrix3.row = 1
    arpegioMatrix3.col = 8
    arpegioMatrix4.row = 1
    arpegioMatrix4.col = 8
    notesMatrix.init()
    arpegioMatrix.init()
    arpegioMatrix.colors.accent = "#ffc600"
    arpegioMatrix2.init()
    arpegioMatrix2.colors.accent = "#ffc600"
    arpegioMatrix3.init()
    arpegioMatrix3.colors.accent = "#ffc600"
    arpegioMatrix4.init()
    arpegioMatrix4.colors.accent = "#ffc600"


    kickMatrix.row = 1
    kickMatrix.col = 4
    kickMatrix2.row = 1
    kickMatrix2.col = 4
    kickMatrix3.row = 1
    kickMatrix3.col = 4
    kickMatrix4.row = 1
    kickMatrix4.col = 4
    kickMatrix.init()
    kickMatrix.colors.accent = "#ffc600"
    kickMatrix2.init()
    kickMatrix2.colors.accent = "#ffc600"
    kickMatrix3.init()
    kickMatrix3.colors.accent = "#ffc600"
    kickMatrix4.init()
    kickMatrix4.colors.accent = "#ffc600"

    snareMatrix.row = 1
    snareMatrix.col = 4
    snareMatrix2.row = 1
    snareMatrix2.col = 4
    snareMatrix3.row = 1
    snareMatrix3.col = 4
    snareMatrix4.row = 1
    snareMatrix4.col = 4
    snareMatrix.init()
    snareMatrix.colors.accent = "#ffc600"
    snareMatrix2.init()
    snareMatrix2.colors.accent = "#ffc600"
    snareMatrix3.init()
    snareMatrix3.colors.accent = "#ffc600"
    snareMatrix4.init()
    snareMatrix4.colors.accent = "#ffc600"

    hihatMatrix.row = 1
    hihatMatrix.col = 4
    hihatMatrix2.row = 1
    hihatMatrix2.col = 4
    hihatMatrix3.row = 1
    hihatMatrix3.col = 4
    hihatMatrix4.row = 1
    hihatMatrix4.col = 4
    hihatMatrix.init()
    hihatMatrix.colors.accent = "#ffc600"
    hihatMatrix2.init()
    hihatMatrix2.colors.accent = "#ffc600"
    hihatMatrix3.init()
    hihatMatrix3.colors.accent = "#ffc600"
    hihatMatrix4.init()
    hihatMatrix4.colors.accent = "#ffc600"

    fxMatrix.row = 1
    fxMatrix.col = 4
    fxMatrix2.row = 1
    fxMatrix2.col = 4
    fxMatrix3.row = 1
    fxMatrix3.col = 4
    fxMatrix4.row = 1
    fxMatrix4.col = 4
    fxMatrix.init()
    fxMatrix.colors.accent = "#ffc600"
    fxMatrix2.init()
    fxMatrix2.colors.accent = "#ffc600"
    fxMatrix3.init()
    fxMatrix3.colors.accent = "#ffc600"
    fxMatrix4.init()
    fxMatrix4.colors.accent = "#ffc600"

}

//check the browser
function checkBrowser(){
  let isChrome = !!window.chrome && !!window.chrome.webstore;
  if(!isChrome){
    alert("Beat It works best with Google Chrome, some features may not work in other browsers.")
  }
}

//audio context for web and mobile

const context = new (window.AudioContext || window.webkitAudioContext)();






