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
	
	var selectSynth =[]
	selectSynth[0]= new Tone.AMSynth().toMaster();
	selectSynth[1]= new Tone.DuoSynth().toMaster();
	selectSynth[2]= new Tone.FMSynth().toMaster();
	selectSynth[3]= new Tone.MembraneSynth().toMaster();
	selectSynth[4]= new Tone.MetalSynth().toMaster();
	selectSynth[5]= new Tone.Monophonic().toMaster();
	selectSynth[6]= new Tone.NoiseSynth().toMaster();
	selectSynth[7]= new Tone.PluckSynth().toMaster();
	selectSynth[8]= new Tone.MonoSynth().toMaster();
	

	var selected_1x_Synth = selectSynth[0]
    var selected_2x_Synth = selectSynth[0]
	var selected_3x_Synth = selectSynth[0]
	var selected_4x_Synth = selectSynth[0]


$("#OneNoteSynth").change(function() {
	console.log(selected_1x_Synth) 
    var selected =($(this).find("option:selected").val())
    selected_1x_Synth = selectSynth[selected]
    console.log(selected_1x_Synth) 
    
})
$("#TwoNoteSynth").change(function() {
	console.log(selected_2x_Synth) 
    var selected =($(this).find("option:selected").val())
    selected_2x_Synth = selectSynth[selected]
    console.log(selected_2x_Synth) 
    
})
$("#ThreeNoteSynth").change(function() {
	console.log(selected_3x_Synth) 
    var selected =($(this).find("option:selected").val())
    selected_3x_Synth = selectSynth[selected]
    console.log(selected_3x_Synth) 
    
})
$("#FourNoteSynth").change(function() {
	console.log(selected_4x_Synth) 
    var selected =($(this).find("option:selected").val())
    selected_4x_Synth = selectSynth[selected]
    console.log(selected_4x_Synth) 
    
})