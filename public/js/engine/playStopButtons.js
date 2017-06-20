 //play drumMatrix and Transport

 $("#play").on("click", () => {

         Tone.Transport.start("+0.1")
         let sequences = [loop, negras, corcheas, tresillos, semicorcheas, negrasSnare, corcheasSnare, tresillosSnare, semicorcheasSnare, negrasHihat, corcheasHihat, tresillosHihat, semicorcheasHihat, negrasFX, corcheasFX, tresillosFX, semicorcheasFX]
         sequences.forEach(function(mat) {
             mat.start()
         })

     })
//stop  Transport

 $("#stop").on("click", () => {
     Tone.Transport.pause()

 })
