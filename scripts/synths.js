var sinte = new Tone.Synth({
    "oscillator": {
        "type": "square"
    },
    "envelope": {
     "attack": 0.01,
     "decay": 0.2,
     "sustain": 0.2,
     "release": 0.2,
    }
}).toMaster();
var sinte2 = new Tone.AMSynth().toMaster();
var sinte3 = new Tone.DuoSynth().toMaster();
var sinte4 = new Tone.FMSynth().toMaster();
var sinte5 = new Tone.MembraneSynth().toMaster();
var sinte6 = new Tone.MetalSynth().toMaster();
var sinte7 = new Tone.Monophonic().toMaster();
var sinte8 = new Tone.NoiseSynth().toMaster();
var sinte9 = new Tone.PluckSynth().toMaster();
var sinte10 = new Tone.MonoSynth().toMaster();

var chosen_1x_Synth = sinte2
var chosen_2x_Synth = sinte2
var chosen_3x_Synth = sinte2
var chosen_4x_Synth = sinte2