  //   if (effect.delay === "off"){
  //   delay.wet.value = 0.8;
  //   effect.delay = "on";
  // } else {
  //   delay.wet.value = 0;
  //   effect.delay = "off"
  // }

// var effect = {
//   delay: "off",
//   reverb: "off",
//   autofilter: "off",
// }
var delay = new Tone.PingPongDelay("4n", 0.2).toMaster();

var reverb = new Tone.Freeverb({
  "roomSize": 0.75,
  "dampening": 2000,
  "wet": 0
  }).toMaster();

var autofilter = new Tone.AutoFilter({
  "frequency": 3,
  "wet": 0,
  "type": "sine",
  "depth": 1,
  "baseFrequency": 200,
  "octaves": 3.6,
  "filter": {
    "type": "lowpass",
    "rolloff": -12,
    "Q": 4
  }
  }).toMaster();