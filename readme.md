# Beat It!
Playing with Tone.js, Tonal.js and NexusUI

Beat It is a musical webApp developed during the last three weeks of the SkylabCoders BootCamp.

It consists in three main blocks. A drum machine, a melody step sequencer and a control panel.

The drum machine is made for been able to do complex rythms quickly.
It has four rows. The first one is for the quarter notes, the second one is for the eight notes, the third one for the triplets and the last one for the sixteen notes.
Also has three different samples and a mute button for each drum part.

The melody step sequencer has thow parts. A note selector that is conected to Tonal.js and let you play some different scales, included exotic ones, and an arpeggio selector with four different rows.
The x1 row plays only one note(the one is selected in the note selector), the x2 row plays the first and the third note arpeggio of the note pressed in the note selector in eight notes pattern. 
The x3 plays the first, the third and the fifth in triplet pattern and the x4 row plays the whole arpeggio including the seventh note in sixteen notes.

The FX&Sound control panel is made by four selectors for change synth presets,a crossfader for mixing rythm and melody and three FX that can be turned on/off.

For this repo I have used the **Tone.js** framework for interact with the Web Audio API, **Tonal.js** for the music theory and **NexusUI** for the different matrix of the drum machine and the melody step sequencer.
**Beat It** is entirely written in **JavaScript** with **jQuery** and **NodeJS** with **Express.js**for the server side, and **Bower** for the client side.
The music icons are from **The Noun Project**
![sample web image](https://github.com/gusblacknails/Jamming-with-JS/blob/master/public/images/beatIt.png)
 

