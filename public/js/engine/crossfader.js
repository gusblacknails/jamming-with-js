var drumVol = new Tone.Volume();
var melodyVol = new Tone.Volume();



var crossfade = function(element) {
   var x = parseInt(element.value) / parseInt(element.max);
  // Use an equal-power crossfading curve:
  var gain1 = Math.cos(x * 0.5*Math.PI);
  var gain2 = Math.cos((1.0 - x) * 0.5*Math.PI);
  drumVol.output.output.gain.value = gain1;
  melodyVol.output.output.gain.value = gain2;
  console.log(melodyVol.output.output.gain.value)
  console.log(drumVol.output.output.gain.value)
};

// ---------------crossfader parser---------------//

function crossfaderParser(element,OldValue){

const OldMax= 100
const OldMin= 0
const OldRange = (OldMax - OldMin) 

const NewMin= -2.5
const NewMax= 2.5
const NewRange = (NewMax - NewMin)
var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin

return NewValue










//--------------crossfader buttons-------------//


// $('#masterMix').on("click", function(){
// var drumOldValue= masterMix.val.L 
// var melodyOldValue= masterMix.val.R

// var drumValueParsed= crossfaderParser(drumVol,drumOldValue)
// var melodyValueParsed= crossfaderParser(melodyVol,melodyOldValue)
// melodyVol.output.output.gain.value= crossfaderMelody(melodyVol,melodyValueParsed)
// console.log(melodyVol.output.output.gain.value)
// drumVol.output.output.gain.value= crossfaderDrum(drumVol,drumValueParsed)
// console.log(drumVol.output.output.gain.value)
// // console.log(drumOldValue)
// // console.log(melodyOldValue)
// // // melodyVol.output.output.gain.value=crossfaderParser(melodyOldValue)

// // // drumVol.output.output.gain.value=crossfaderParser(drumOldValue) 
// // // melodyVol.output.output.gain.value=crossfaderParser(melodyOldValue)
// // // melodyVol.input.output.toMaster=crossfaderParser(melodyOldValue)
// // console.log(drumVol.input.input.gain.value)
// // console.log(melodyVol.input.input.gain.value)
// })







}

// var crossfaderMelody = function(element,valueParsed) {

//   var x = parseInt(valueParsed) / parseInt(element.volume.input.maxValue);
//   // Use an equal-power crossfading curve:
//   var gain1 = Math.cos(x * 0.5*Math.PI);
//   return gain1;
// };
// var crossfaderDrum = function(element,valueParsed) {

//   var x = parseInt(valueParsed) / parseInt(element.volume.input.maxValue);
//   // Use an equal-power crossfading curve:
  
//   var gain2 = Math.cos((1.0 - x) * 0.5*Math.PI);
//   return gain2;
// };
