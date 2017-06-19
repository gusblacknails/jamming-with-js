
//--------------crossfader buttons-------------//
// masterMix.onmousedown= function() {

// }
// masterMix.change= function() {

// var drumOldValue= masterMix.val.L 
// var melodyOldValue= masterMix.val.R
// console.log(drumOldValue)
// console.log(melodyOldValue)
// drumVol.output.output.gain.value=crossfaderParser(drumOldValue) 
// drumVol.output.output.gain.value=crossfaderParser(melodyOldValue)
// // melodyVol.input.output.toMaster=crossfaderParser(melodyOldValue)
// console.log(drumVol.input.input.gain.value)
// console.log(melodyVol.input.input.gain.value)

// }

$('#masterMix').change(function(){
var drumOldValue= masterMix.val.L 
var melodyOldValue= masterMix.val.R
console.log(drumOldValue)
console.log(melodyOldValue)
drumVol.output.output.gain.value=crossfaderParser(drumOldValue) 
drumVol.output.output.gain.value=crossfaderParser(melodyOldValue)
// melodyVol.input.output.toMaster=crossfaderParser(melodyOldValue)
console.log(drumVol.input.input.gain.value)
console.log(melodyVol.input.input.gain.value)
})



var drumVol = new Tone.Volume();
var melodyVol = new Tone.Volume();


//---------------crossfader parser---------------//

function crossfaderParser(OldValue){

const OldMax= 1
const OldMin= 0
const OldRange = (OldMax - OldMin) 

const NewMin= -3.40
const NewMax= 3.40
const NewRange = (NewMax - NewMin)
var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin

return NewValue

}