
$("#OneNoteSynth").change(function() {
    console.log(selected_1x_Synth)
    var selected = ($(this).find("option:selected").val())
    selected_1x_Synth = selectSynth[selected]
    console.log(selected_1x_Synth)

})
$("#TwoNoteSynth").change(function() {
    console.log(selected_2x_Synth)
    var selected = ($(this).find("option:selected").val())
    selected_2x_Synth = selectSynth[selected]
    console.log(selected_2x_Synth)

})
$("#ThreeNoteSynth").change(function() {
    console.log(selected_3x_Synth)
    var selected = ($(this).find("option:selected").val())
    selected_3x_Synth = selectSynth[selected]
    console.log(selected_3x_Synth)

})
$("#FourNoteSynth").change(function() {
    console.log(selected_4x_Synth)
    var selected = ($(this).find("option:selected").val())
    selected_4x_Synth = selectSynth[selected]
    console.log(selected_4x_Synth)

})