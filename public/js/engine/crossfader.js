
//--------------crossfader buttons-------------//
// masterMix.onmousedown= function() {

// var drumOldValue= masterMix.val.L 
// var melodyOldValue= masterMix.val.R
// console.log(drumOldValue)
// console.log(melodyOldValue)
// drumVol.volume.input.value= crossfaderParser(drumOldValue)
// if ($('#melodyGroup').hasClass("melodyMute")) {
// melodyVol.volume.input.value= crossfaderParser(melodyOldValue)}
// console.log(drumVol.volume.input.value)
// console.log(melodyVol.volume.input.value)

// }
masterMix.onmouseup= function() {

var drumOldValue= masterMix.val.L 
var melodyOldValue= masterMix.val.R
console.log(drumOldValue)
console.log(melodyOldValue)
drumVol.volume.input.value=crossfaderParser(drumOldValue) 
melodyVol.volume.input.value=crossfaderParser(melodyOldValue)
console.log(drumVol.volume.input.value)
console.log(melodyVol.volume.input.value)

}
// masterMix.onmouseout= function() {

// var drumOldValue= masterMix.val.L 
// var melodyOldValue= masterMix.val.R
// console.log(drumOldValue)
// console.log(melodyOldValue)
// drumVol.volume.input.value= crossfaderParser(drumOldValue)
// if ($('#melodyGroup').hasClass("melodyMute")) {
// melodyVol.volume.input.value= crossfaderParser(melodyOldValue)}
// console.log(drumVol.volume.input.value)
// console.log(melodyVol.volume.input.value)

// }


var drumVol = new Tone.Volume();
var melodyVol = new Tone.Volume();


//---------------crossfader parser---------------//

function crossfaderParser(OldValue){

const OldMax= 1
const OldMin= 0
const OldRange = (OldMax - OldMin) 

const NewMin= -1
const NewMax= 3.5
const NewRange = (NewMax - NewMin)
const NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin



return NewValue

}