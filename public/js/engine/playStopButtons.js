 //play drumMatrix and Transport

 $("#play").on("click", () => {

         Tone.Transport.start("+0.1")
         let sequences = [loop, negras, corcheas, tresillos, semicorcheas, negrasSnare, corcheasSnare, tresillosSnare, semicorcheasSnare, negrasHihat, corcheasHihat, tresillosHihat, semicorcheasHihat, negrasFX, corcheasFX, tresillosFX, semicorcheasFX]
         sequences.forEach(function(mat) {
             mat.start()
         })

     })
//stop drumMatrix and Transport

 $("#stop").on("click", () => {
     Tone.Transport.pause()
     let drumMatrices = [kickMatrix, kickMatrix2, kickMatrix3, kickMatrix4, snareMatrix, snareMatrix2, snareMatrix3, snareMatrix4, hihatMatrix, hihatMatrix2, hihatMatrix3, hihatMatrix4, fxMatrix, fxMatrix2, fxMatrix3, fxMatrix4, notesMatrix, arpegioMatrix, arpegioMatrix2, arpegioMatrix3, arpegioMatrix4]
     drumMatrices.forEach(function(mat) {
         mat.stop()
     })

 })
