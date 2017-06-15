
$("#play").on("click", () => {

        Tone.Transport.start("+0.1")

        loop.start()
        // loop.removeAll()
        negras.start()
        corcheas.start()
        tresillos.start()
        semicorcheas.start()
        // kickMatrix.sequence(Tone.Transport.bpm.value)
        // kickMatrix2.sequence(Tone.Transport.bpm.value)
        // kickMatrix3.sequence(Tone.Transport.bpm.value)
        // kickMatrix4.sequence(Tone.Transport.bpm.value)
        kickMatrix.init()
        kickMatrix2.init()
        kickMatrix3.init()
        kickMatrix4.init()

        negrasSnare.start()
        corcheasSnare.start()
        tresillosSnare.start()
        semicorcheasSnare.start()
        // snareMatrix.sequence(Tone.Transport.bpm.value)
        // snareMatrix2.sequence(Tone.Transport.bpm.value)
        // snareMatrix3.sequence(Tone.Transport.bpm.value)
        // snareMatrix4.sequence(Tone.Transport.bpm.value)

        snareMatrix.init()
        snareMatrix2.init()
        snareMatrix3.init()
        snareMatrix4.init()

        negrasHihat.start()
        corcheasHihat.start()
        tresillosHihat.start()
        semicorcheasHihat.start()
        
        hihatMatrix.init()
        hihatMatrix2.init()
        hihatMatrix3.init()
        hihatMatrix4.init()
        // hihatMatrix.sequence(Tone.Transport.bpm.value)
        // hihatMatrix2.sequence(Tone.Transport.bpm.value)
        // hihatMatrix3.sequence(Tone.Transport.bpm.value)
        // hihatMatrix4.sequence(Tone.Transport.bpm.value)
        negrasFX.start()
        corcheasFX.start()
        tresillosFX.start()
        semicorcheasFX.start()
        // fxMatrix.sequence(Tone.Transport.bpm.value)
        // fxMatrix2.sequence(Tone.Transport.bpm.value)
        // fxMatrix3.sequence(Tone.Transport.bpm.value)
        // fxMatrix4.sequence(Tone.Transport.bpm.value)
        fxMatrix.init()
        fxMatrix2.init()
        fxMatrix3.init()
        fxMatrix4.init()

        notesMatrix.sequence(Tone.Transport.bpm.value)
        arpegioMatrix.sequence(Tone.Transport.bpm.value)
        arpegioMatrix2.sequence(Tone.Transport.bpm.value)
        arpegioMatrix3.sequence(Tone.Transport.bpm.value)
        arpegioMatrix4.sequence(Tone.Transport.bpm.value)
        notesMatrix.init()
        arpegioMatrix.init()
        arpegioMatrix2.init()
        arpegioMatrix3.init()
        arpegioMatrix4.init()

    })
    //stop drumMatrix and Transport

$("#stop").on("click", () => {
    Tone.Transport.pause()
    // loop.removeAll()

    // Tone.Transport.seconds = "0";
    // Tone.Transport.clear(loop.id)

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
    
    // kickMatrix.jumpToCol(0)
    // kickMatrix2.jumpToCol(0)
    // kickMatrix3.jumpToCol(0)
    // kickMatrix4.jumpToCol(0)

    // snareMatrix.jumpToCol(0)
    // snareMatrix2.jumpToCol(0)
    // snareMatrix3.jumpToCol(0)
    // snareMatrix4.jumpToCol(0)

    // hihatMatrix.jumpToCol(0)
    // hihatMatrix2.jumpToCol(0)
    // hihatMatrix3.jumpToCol(0)
    // hihatMatrix4.jumpToCol(0)

    // fxMatrix.jumpToCol(0)
    // fxMatrix2.jumpToCol(0)
    // fxMatrix3.jumpToCol(0)
    // fxMatrix4.jumpToCol(0)

    // notesMatrix.jumpToCol(0)
    // arpegioMatrix.jumpToCol(0)
    // arpegioMatrix2.jumpToCol(0)
    // arpegioMatrix3.jumpToCol(0)
    // arpegioMatrix4.jumpToCol(0)
  })

 
