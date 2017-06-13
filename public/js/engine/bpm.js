//---------BPM---------------------//

var tempoRange = document.getElementById('tempo__range');
var bpm = document.getElementById('bpm');
tempoRange.addEventListener('input', function(event) {
    var value = event.target.value; // 50 - 190

    Tone.Transport.bpm.value = value;

    bpm.textContent = value;
});
