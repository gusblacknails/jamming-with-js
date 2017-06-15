
var disto = new Tone.BitCrusher({
  "bits": 4,
  "wet": 0
  }).toMaster();


var reverb = new Tone.Freeverb({
  "roomSize": 0.35,
  "dampening": 3000,
  "wet": 0
  }).toMaster();

var phaser = new Tone.Phaser({
  "frequency" : 0.2,
  "octaves" : 5,
  "baseFrequency" : 200,
  "Q": 15,
  "wet": 0
}).toMaster();
