nx.onload = function() {
    checkBrowser();
 
    nx.colorize("#ffc600")
    notesMatrix.row = 7
    notesMatrix.col = 8

    masterMix.init()

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
    arpegioMatrix2.init()
    arpegioMatrix3.init()
    arpegioMatrix4.init()


    kickMatrix.row = 1
    kickMatrix.col = 4
    kickMatrix2.row = 1
    kickMatrix2.col = 4
    kickMatrix3.row = 1
    kickMatrix3.col = 4
    kickMatrix4.row = 1
    kickMatrix4.col = 4
    kickMatrix.init()
    kickMatrix2.init()
    kickMatrix3.init()
    kickMatrix4.init()

    snareMatrix.row = 1
    snareMatrix.col = 4
    snareMatrix2.row = 1
    snareMatrix2.col = 4
    snareMatrix3.row = 1
    snareMatrix3.col = 4
    snareMatrix4.row = 1
    snareMatrix4.col = 4
    snareMatrix.init()
    snareMatrix2.init()
    snareMatrix3.init()
    snareMatrix4.init()

    hihatMatrix.row = 1
    hihatMatrix.col = 4
    hihatMatrix2.row = 1
    hihatMatrix2.col = 4
    hihatMatrix3.row = 1
    hihatMatrix3.col = 4
    hihatMatrix4.row = 1
    hihatMatrix4.col = 4
    hihatMatrix.init()
    hihatMatrix2.init()
    hihatMatrix3.init()
    hihatMatrix4.init()

    fxMatrix.row = 1
    fxMatrix.col = 4
    fxMatrix2.row = 1
    fxMatrix2.col = 4
    fxMatrix3.row = 1
    fxMatrix3.col = 4
    fxMatrix4.row = 1
    fxMatrix4.col = 4
    fxMatrix.init()
    fxMatrix2.init()
    fxMatrix3.init()
    fxMatrix4.init()

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






