Tone.context.latencyHint= "balanced"
var loop = new Tone.Sequence(function(time, col) {
    console.log(col)
   
    var currentNote = NoteSelector(notesMatrix, twoScales, time, col)
    oneNoteSequence(arpegioMatrix, currentNote["oneNote"], time, col)
    twoNoteSequence(arpegioMatrix2, currentNote["twoNote"], time, col)
    threeNoteSequence(arpegioMatrix3, currentNote["threeNote"], time, col)
    fourNoteSequence(arpegioMatrix4, currentNote["fourNote"], time, col)

}, [0, 1, 2, 3, 4, 5, 6, 7], "4n");

loop.humanize = true;

Tone.Transport.bpm.value = 120

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
var sinte6 = new Tone.Monophonic().toMaster();
var sinte7 = new Tone.NoiseSynth().toMaster();
var sinte8 = new Tone.PluckSynth().toMaster();
var sinte9 = new Tone.MonoSynth().toMaster();





