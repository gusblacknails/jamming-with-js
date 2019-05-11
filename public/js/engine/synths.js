var selectSynth = []
selectSynth[0] = new Tone.AMSynth().toMaster();
selectSynth[0].chain(melodyVol,disto,phaser,reverb, Tone.Master);
// selectSynth[0].fan(disto,phaser,reverb);
selectSynth[1] = new Tone.DuoSynth().toMaster();
selectSynth[1].chain(melodyVol,disto,phaser,reverb, Tone.Master);
// selectSynth[1].fan(disto,phaser,reverb);
selectSynth[2] = new Tone.FMSynth().toMaster();
selectSynth[2].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[3] = new Tone.Synth(
{
    "oscillator" : {
        "type" : "fatsawtooth",
        "count" : 3,
        "spread" : 30
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.5,
        "release": 0.4,
        "attackCurve" : "exponential"
    }
}
	).toMaster();
selectSynth[3].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[4] = new Tone.AMSynth({
        "harmonicity": 2,
        "oscillator": {
            "type": "amsine2",
            "modulationType": "sine",
            "harmonicity": 1.01
        },
        "envelope": {
            "attack": 0.006,
            "decay": 4,
            "sustain": 0.04,
            "release": 1.2
        },
        "modulation": {
            "volume": 13,
            "type": "amsine2",
            "modulationType": "sine",
            "harmonicity": 12
        },
        "modulationEnvelope": {
            "attack": 0.006,
            "decay": 0.2,
            "sustain": 0.2,
            "release": 0.4
        }

    }

).toMaster();
selectSynth[4].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[5] = new Tone.FMSynth({
    "harmonicity": 8,
    "modulationIndex": 2,
    "oscillator": {
        "type": "sine"
    },
    "envelope": {
        "attack": 0.001,
        "decay": 2,
        "sustain": 0.1,
        "release": 2
    },
    "modulation": {
        "type": "square"
    },
    "modulationEnvelope": {
        "attack": 0.002,
        "decay": 0.2,
        "sustain": 0,
        "release": 0.2
    }

}).toMaster();
selectSynth[5].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[6] = new Tone.MonoSynth({
    "oscillator": {
        "type": "fmsquare5",
        "modulationType": "triangle",
        "modulationIndex": 2,
        "harmonicity": 0.501
    },
    "filter": {
        "Q": 1,
        "type": "lowpass",
        "rolloff": -24
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.4,
        "release": 2
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.8,
        "release": 1.5,
        "baseFrequency": 50,
        "octaves": 4.4
    }
}).toMaster();
selectSynth[6].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[7] = new Tone.PluckSynth().toMaster();
selectSynth[7].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[8] = new Tone.FMSynth({
    "harmonicity": 3.01,
    "modulationIndex": 14,
    "oscillator": {
        "type": "triangle"
    },
    "envelope": {
        "attack": 0.2,
        "decay": 0.3,
        "sustain": 0.1,
        "release": 1.2
    },
    "modulation": {
        "type": "square"
    },
    "modulationEnvelope": {
        "attack": 0.01,
        "decay": 0.5,
        "sustain": 0.2,
        "release": 0.1
    }
}).toMaster();
selectSynth[8].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[9] = new Tone.MonoSynth({
        "portamento": 0.01,
        "oscillator": {
            "type": "sawtooth"
        },
        "filter": {
            "Q": 2,
            "type": "lowpass",
            "rolloff": -24
        },
        "envelope": {
            "attack": 0.1,
            "decay": 0.1,
            "sustain": 0.6,
            "release": 0.5
        },
        "filterEnvelope": {
            "attack": 0.05,
            "decay": 0.8,
            "sustain": 0.4,
            "release": 1.5,
            "baseFrequency": 2000,
            "octaves": 1.5
        }
    }

).toMaster();
selectSynth[9].chain(melodyVol,disto,phaser,reverb, Tone.Master);

selectSynth[10] = new Tone.MonoSynth({
        "oscillator": {
            "type": "pwm",
            "modulationFrequency": 1
        },
        "filter": {
            "Q": 6,
            "rolloff": -24
        },
        "envelope": {
            "attack": 0.025,
            "decay": 0.3,
            "sustain": 0.9,
            "release": 2
        },
        "filterEnvelope": {
            "attack": 0.245,
            "decay": 0.131,
            "sustain": 0.5,
            "release": 2,
            "baseFrequency": 20,
            "octaves": 7.2,
            "exponent": 2
        }
    }

).toMaster();
selectSynth[10].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[11] = new Tone.Synth({
    "oscillator": {
        "type": "fatsine4",
        "spread": 60,
        "count": 10
    },
    "envelope": {
        "attack": 0.4,
        "decay": 0.01,
        "sustain": 1,
        "attackCurve": "sine",
        "releaseCurve": "sine",
        "release": 0.4
    }
}).toMaster();
selectSynth[11].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[12] = new Tone.Synth({
    "portamento": 0.0,
    "oscillator": {
        "type": "square4"
    },
    "envelope": {
        "attack": 2,
        "decay": 1,
        "sustain": 0.2,
        "release": 2
    }
}).toMaster();
selectSynth[12].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[13] = new Tone.Synth({
    "portamento": 0.2,
    "oscillator": {
        "type": "sawtooth"
    },
    "envelope": {
        "attack": 0.03,
        "decay": 0.1,
        "sustain": 0.2,
        "release": 0.02
    }
}).toMaster();
selectSynth[13].chain(melodyVol,disto,phaser,reverb, Tone.Master);
selectSynth[14] = new Tone.Synth(
{
    "oscillator": {
        "type": "sine"
    },
    "envelope": {
        "attack": 0.001,
        "decay": 0.1,
        "sustain": 0.1,
        "release": 1.2
    }
}

	).toMaster();
selectSynth[14].chain(melodyVol,disto,phaser,reverb, Tone.Master);

var selected_1x_Synth = selectSynth[0]
var selected_2x_Synth = selectSynth[0]
var selected_3x_Synth = selectSynth[0]
var selected_4x_Synth = selectSynth[0]
