//audio context for web and mobile

const context = new(window.AudioContext || window.webkitAudioContext)();

//check the browser
function checkBrowser() {
    let isChrome = !!window.chrome && !!window.chrome.webstore;
    if (!isChrome) {
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

    var arpegio = [arpegioMatrix, arpegioMatrix2, arpegioMatrix3, arpegioMatrix4]
    arpegio.forEach(function(mat) {
        mat.col = 8
        mat.row = 1
        mat.init()
        mat.colors.accent = "#ffc600"
    })
    var drum = [kickMatrix, kickMatrix2, kickMatrix3, kickMatrix4, snareMatrix, snareMatrix2, snareMatrix3, snareMatrix4, hihatMatrix, hihatMatrix2, hihatMatrix3, hihatMatrix4, fxMatrix, fxMatrix2, fxMatrix3, fxMatrix4]
    drum.forEach(function(mat) {
        mat.col = 4
        mat.row = 1
        mat.init()
        mat.colors.accent = "#ffc600"
    })


    let melody_arp =JSON.parse(localStorage.getItem("melody_arp"));
    let four_arp =localStorage.getItem("four_arp");
    let eight_arp =localStorage.getItem("eight_arp");
    let triplet_arp =localStorage.getItem("triplet_arp");
    let sixteen_arp =localStorage.getItem("sixteen_arp");
    let four_kick = localStorage.getItem('four_kick');
    let eight_kick = localStorage.getItem("eight_kick");
    let triplet_kick = localStorage.getItem("triplet_kick");
    let sixteen_kick = localStorage.getItem("sixteen_kick");
    let four_snare = localStorage.getItem("four_snare");
    let eight_snare = localStorage.getItem("eight_snare");
    let triplet_snare = localStorage.getItem("triplet_snare");
    let sixteen_snare = localStorage.getItem("sixteen_snare");
    let four_hihat = localStorage.getItem("four_hihat");
    let eight_hihat = localStorage.getItem("eight_hihat");
    let triplet_hihat = localStorage.getItem("triplet_hihat");
    let sixteen_hihat = localStorage.getItem("sixteen_hihat");
    let four_fx = localStorage.getItem("four_fx");
    let eight_fx = localStorage.getItem("eight_fx");
    let triplet_fx = localStorage.getItem("triplet_fx");
    let sixteen_fx = localStorage.getItem("sixteen_fx");


    console.log(melody_arp)
    let maped_melody_arp = melody_arp.map(function(x){
        parseInt(x)

        x=x || 0
        return x
    })
    console.log(maped_melody_arp)
    let parsed_four_arp = four_arp.split(",")
    let parsed_eight_arp = eight_arp.split(",")
    let parsed_triplet_arp = triplet_arp.split(",")
    let parsed_sixteen_arp = sixteen_arp.split(",")
    let parsed_four_kick = four_kick.split(",")
    let parsed_eight_kick = eight_kick.split(",")
    let parsed_triplet_kick = triplet_kick.split(",")
    let parsed_sixteen_kick = sixteen_kick.split(",")
    let parsed_four_snare = four_snare.split(",")
    let parsed_eight_snare = eight_snare.split(",")
    let parsed_triplet_snare = triplet_snare.split(",")
    let parsed_sixteen_snare = sixteen_snare.split(",")
    let parsed_four_hihat = four_hihat.split(",")
    let parsed_eight_hihat = eight_hihat.split(",")
    let parsed_triplet_hihat = triplet_hihat.split(",")
    let parsed_sixteen_hihat = sixteen_hihat.split(",")
    let parsed_four_fx = four_fx.split(",")
    let parsed_eight_fx = eight_fx.split(",")
    let parsed_triplet_fx = triplet_fx.split(",")
    let parsed_sixteen_fx = sixteen_fx.split(",")


    if ( maped_melody_arp !== NaN ||maped_melody_arp !== undefined || maped_melody_arp !== null || maped_melody_arp != undefined || parsed_melody_arp != null) {
        
            
            for (var i = 0; i <= maped_melody_arp.length - 1; i++) {
                
                maped_melody_arp.forEach((parsed_melody_arp,index)=>{
                // console.error( parseInt( parsed_melody_arp[i][index]))
                if(maped_melody_arp[i][index]){
                    notesMatrix.matrix[i][index] = parseInt( maped_melody_arp[i][index])
                    notesMatrix.draw()}
                
                })
        }
        
    }
    if (parsed_four_arp !== undefined || parsed_four_arp !== null || parsed_four_arp != undefined || parsed_four_arp != null) {
        for (var i = 0; i <= parsed_four_arp.length - 1; i++) {
            arpegioMatrix.matrix[i][0] = parseInt(parsed_four_arp[i])
            arpegioMatrix.draw()
        }
    }
    if (parsed_eight_arp !== undefined || parsed_eight_arp !== null || parsed_eight_arp != undefined || parsed_eight_arp != null) {
        for (var i = 0; i <= parsed_eight_arp.length - 1; i++) {
            arpegioMatrix2.matrix[i][0] = parseInt(parsed_eight_arp[i])
            arpegioMatrix2.draw()
        }
    }
    if (parsed_triplet_arp !== undefined || parsed_triplet_arp !== null || parsed_triplet_arp != undefined || parsed_triplet_arp != null) {
        for (var i = 0; i <= parsed_triplet_arp.length - 1; i++) {
            arpegioMatrix3.matrix[i][0] = parseInt(parsed_triplet_arp[i])
            arpegioMatrix3.draw()
        }
    }
    if (parsed_sixteen_arp !== undefined || parsed_sixteen_arp !== null || parsed_sixteen_arp != undefined || parsed_sixteen_arp != null) {
        for (var i = 0; i <= parsed_sixteen_arp.length - 1; i++) {
            arpegioMatrix4.matrix[i][0] = parseInt(parsed_sixteen_arp[i])
            arpegioMatrix4.draw()
        }
    }

    if (parsed_four_kick !== undefined || parsed_four_kick !== null || parsed_four_kick != undefined || parsed_four_kick != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            kickMatrix.matrix[i][0] = parseInt(parsed_four_kick[i])
            kickMatrix.draw()
        }
    }
    if (parsed_eight_kick !== undefined || parsed_eight_kick !== null || parsed_eight_kick != undefined || parsed_eight_kick != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            kickMatrix2.matrix[i][0] = parseInt(parsed_eight_kick[i])
            kickMatrix2.draw()
        }
    }
    if (parsed_triplet_kick !== undefined || parsed_triplet_kick !== null || parsed_triplet_kick != undefined || parsed_triplet_kick != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            kickMatrix3.matrix[i][0] = parseInt(parsed_triplet_kick[i])
            kickMatrix3.draw()
        }
    }
    if (parsed_sixteen_kick !== undefined || parsed_sixteen_kick !== null || parsed_sixteen_kick != undefined || parsed_sixteen_kick != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            kickMatrix4.matrix[i][0] = parseInt(parsed_sixteen_kick[i])
            kickMatrix4.draw()
        }
    }
    if (parsed_four_snare !== undefined || parsed_four_snare !== null || parsed_four_snare != undefined || parsed_four_snare != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            snareMatrix.matrix[i][0] = parseInt(parsed_four_snare[i])
            snareMatrix.draw()
        }
    }
    if (parsed_eight_snare !== undefined || parsed_eight_snare !== null || parsed_eight_snare != undefined || parsed_eight_snare != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            snareMatrix2.matrix[i][0] = parseInt(parsed_eight_snare[i])
            snareMatrix2.draw()
        }
    }
    if (parsed_triplet_snare !== undefined || parsed_triplet_snare !== null || parsed_triplet_snare != undefined || parsed_triplet_snare != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            snareMatrix3.matrix[i][0] = parseInt(parsed_triplet_snare[i])
            snareMatrix3.draw()
        }
    }
    if (parsed_sixteen_snare !== undefined || parsed_sixteen_snare !== null || parsed_sixteen_snare != undefined || parsed_sixteen_snare != null) {
        for (var i = 0; i <= parsed_four_kick.length - 1; i++) {
            snareMatrix4.matrix[i][0] = parseInt(parsed_sixteen_snare[i])
            snareMatrix4.draw()
        }
    }
    if (parsed_four_hihat !== undefined || parsed_four_hihat !== null || parsed_four_hihat != undefined || parsed_four_hihat != null) {
        for (var i = 0; i <= parsed_four_hihat.length - 1; i++) {
            hihatMatrix.matrix[i][0] = parseInt(parsed_four_hihat[i])
            hihatMatrix.draw()
        }
    }
    if (parsed_eight_hihat !== undefined || parsed_eight_hihat !== null || parsed_eight_hihat != undefined || parsed_eight_hihat != null) {
        for (var i = 0; i <= parsed_eight_hihat.length - 1; i++) {
            hihatMatrix2.matrix[i][0] = parseInt(parsed_eight_hihat[i])
            hihatMatrix2.draw()
        }
    }
    if (parsed_triplet_hihat !== undefined || parsed_triplet_hihat !== null || parsed_triplet_hihat != undefined || parsed_triplet_hihat != null) {
        for (var i = 0; i <= parsed_triplet_hihat.length - 1; i++) {
            hihatMatrix3.matrix[i][0] = parseInt(parsed_triplet_hihat[i])
            hihatMatrix3.draw()
        }
    }
    if (parsed_sixteen_hihat !== undefined || parsed_sixteen_hihat !== null || parsed_sixteen_hihat != undefined || parsed_sixteen_hihat != null) {
        for (var i = 0; i <= parsed_sixteen_hihat.length - 1; i++) {
            hihatMatrix4.matrix[i][0] = parseInt(parsed_sixteen_hihat[i])
            hihatMatrix4.draw()
        }
    }
    if (parsed_four_fx !== undefined || parsed_four_fx !== null || parsed_four_fx != undefined || parsed_four_fx != null) {
        for (var i = 0; i <= parsed_four_fx.length - 1; i++) {
            fxMatrix.matrix[i][0] = parseInt(parsed_four_fx[i])
            fxMatrix.draw()
        }
    }
    if (parsed_eight_fx !== undefined || parsed_eight_fx !== null || parsed_eight_fx != undefined || parsed_eight_fx != null) {
        for (var i = 0; i <= parsed_eight_fx.length - 1; i++) {
            fxMatrix2.matrix[i][0] = parseInt(parsed_eight_fx[i])
            fxMatrix2.draw()
        }
    }
    if (parsed_triplet_fx !== undefined || parsed_triplet_fx !== null || parsed_triplet_fx != undefined || parsed_triplet_fx != null) {
        for (var i = 0; i <= parsed_triplet_fx.length - 1; i++) {
            fxMatrix3.matrix[i][0] = parseInt(parsed_triplet_fx[i])
            fxMatrix3.draw()
        }
    }
    if (parsed_sixteen_fx !== undefined || parsed_sixteen_fx !== null || parsed_sixteen_fx != undefined || parsed_sixteen_fx != null) {
        for (var i = 0; i <= parsed_sixteen_fx.length - 1; i++) {
            fxMatrix4.matrix[i][0] = parseInt(parsed_sixteen_fx[i])
            fxMatrix4.draw()
        }
    }

}
