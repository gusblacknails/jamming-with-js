var chosenNote = $("#root_note").val()
var chosenScale = $("#scale").val()
var octave = $("#octave").val()
var escala = []
var twoScales = []


$("#set").on("click", () => {
    chosenNote = $("#root_note").val();
    // console.log(chosenNote)
    chosenScale = $("#scale").val();
    // console.log(chosenScale)
    octave = $("#octave").val();
    //here we decide wich mode use
    escala = Tonal.scale.get(chosenScale, chosenNote + octave);
    escala2= Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) +1))
    twoScales = escala.concat(escala2)
    console.log(twoScales)

    //setting the notes on the boxes
    $("#1note").text(`${escala[0]}`)
    $("#2note").text(`${escala[1]}`)
    $("#3note").text(`${escala[2]}`)
    $("#4note").text(`${escala[3]}`)
    $("#5note").text(`${escala[4]}`)
    $("#6note").text(`${escala[5]}`)
    $("#7note").text(`${escala[6]}`)

    return twoScales

})

$("#play").on("click", () => {

    Tone.Transport.start("+0.1")
    loop.start()

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
$("#stop").on("click", () => {
    Tone.Transport.stop()
    // loop.stop()
    notesMatrix.stop()
    arpegioMatrix.stop()
    arpegioMatrix2.stop()
    arpegioMatrix3.stop()
    arpegioMatrix4.stop()
})

$("#setSynth").on("click", () => {
    chosen_1x_Synth = $("#OneNoteSynth").val();
    chosen_2x_Synth = $("#TwoNoteSynth").val();
    chosen_3x_Synth = $("#ThreeNoteSynth").val();
    chosen_4x_Synth = $("#FourNoteSynth").val();

    console.log(chosen_1x_Synth)

})
