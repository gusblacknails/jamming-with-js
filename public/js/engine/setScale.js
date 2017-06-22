
//------------set scale on load------------------//

var escala = []
var twoScales = []
var threeScales = []
$( window ).on( "load", function() { 

    
    var chosenNote = localStorage.getItem("chosenNote") || $("#root_note").val();
    var chosenScale = localStorage.getItem("chosenScale") || $("#scale").val();
    var octave =localStorage.getItem("octave") || $("#octave").val();
    //here we decide wich mode use
    escala = Tonal.scale.get(chosenScale, chosenNote + octave);
    escala2 = Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) + 1))
    escala3 = Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) + 2))
    twoScales = escala.concat(escala2)
    threeScales = twoScales.concat(escala3)
    console.log(threeScales)

    //setting the notes on the boxes
    $("#1note").text(`${twoScales[0]}`)
    $("#2note").text(`${twoScales[1]}`)
    $("#3note").text(`${twoScales[2]}`)
    $("#4note").text(`${twoScales[3]}`)
    $("#5note").text(`${twoScales[4]}`)
    $("#6note").text(`${twoScales[5]}`)
    $("#7note").text(`${twoScales[6]}`)
})
    
//------------set scale on click "set scale" button------------------//

$("#set").on("click", () => {
    chosenNote = $("#root_note").val();
    // console.log(chosenNote)
    chosenScale = $("#scale").val();
    // console.log(chosenScale)
    octave = $("#octave").val();
    //here we decide wich mode use
    escala = Tonal.scale.get(chosenScale, chosenNote + octave);
    escala2 = Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) + 1))
    escala3 = Tonal.scale.get(chosenScale, chosenNote + (parseInt(octave) + 2))
    twoScales = escala.concat(escala2)
    threeScales = twoScales.concat(escala3)
    console.log(threeScales)

    //setting the notes on the boxes
    $("#1note").text(`${twoScales[0]}`)
    $("#2note").text(`${twoScales[1]}`)
    $("#3note").text(`${twoScales[2]}`)
    $("#4note").text(`${twoScales[3]}`)
    $("#5note").text(`${twoScales[4]}`)
    $("#6note").text(`${twoScales[5]}`)
    $("#7note").text(`${twoScales[6]}`)


})