 //play drumMatrix and Transport

$("#play").on("click", () => {

        Tone.Transport.start("+0.1")

        loop.start()
        
        negras.start()
        corcheas.start()
        tresillos.start()
        semicorcheas.start()


        negrasSnare.start()
        corcheasSnare.start()
        tresillosSnare.start()
        semicorcheasSnare.start()
      

        negrasHihat.start()
        corcheasHihat.start()
        tresillosHihat.start()
        semicorcheasHihat.start()
        

        negrasFX.start()
        corcheasFX.start()
        tresillosFX.start()
        semicorcheasFX.start()

    })
    //stop drumMatrix and Transport

$("#stop").on("click", () => {
    Tone.Transport.pause()

    kickMatrix.stop()
    kickMatrix2.stop()
    kickMatrix3.stop()
    kickMatrix4.stop()

    snareMatrix.stop()
    snareMatrix2.stop()
    snareMatrix3.stop()
    snareMatrix4.stop()

    hihatMatrix.stop()
    hihatMatrix2.stop()
    hihatMatrix3.stop()
    hihatMatrix4.stop()

    fxMatrix.stop()
    fxMatrix2.stop()
    fxMatrix3.stop()
    fxMatrix4.stop()

    notesMatrix.stop()
    arpegioMatrix.stop()
    arpegioMatrix2.stop()
    arpegioMatrix3.stop()
    arpegioMatrix4.stop()
    
  })

 
