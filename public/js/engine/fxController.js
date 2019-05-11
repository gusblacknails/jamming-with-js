
var disto = new Tone.BitCrusher({
  "bits": 4,
  "wet": 0
  });
// disto.chain(distoVolume, Tone.Master)


var reverb = new Tone.Freeverb({
  "roomSize": 0.35,
  "dampening": 3000,
  "wet": 0
  });

var phaser = new Tone.Phaser({
  "frequency" : 0.2,
  "octaves" : 5,
  "baseFrequency" : 200,
  "Q": 15,
  "wet": 0
});

var compressor = new Tone.Compressor({
  "threshold" : -12,
  "ratio" : 6,
  "attack" : 0.3,
  "release" : 0.1
});

// var distoVolume = new Tone.Volume();
// distoVolume.volume= -6
