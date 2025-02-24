# Beat It!

Playing with Tone.js, Tonal.js and NexusUI

Beat it! has three main blocks. A drum machine, a melody step sequencer and a control/selector panel.

The drum machine is made for being able to do complex rhythms quickly.
It has four rows. The first one is quarter notes, the second one is for the eight notes, the third one are triplets and the last one is sixteen notes.
Also has three different samples and a mute button for each drum element.

The melody step sequencer has two parts. A note selector which is connected to Tonal.js and let you play some different scales, including exotic ones and an arpeggio selector which is made of four rows.
The x1 row plays only one note(the one that is selected in the note selector), the x2 row plays the first and the third note of the arpeggio (having as root the note pressed in the note selector) in eight notes pattern.
The x3 plays the first, the third and the fifth in triplet pattern and the x4 row plays the whole arpeggio including the seventh note in sixteen notes.

The FX&Sound control panel is made by four selectors for changing the synth presets, a crossfader for mixing rhythm and melody and three FX that can be turned on/off.
The synth selectors select the preset that will sound in each arpeggio row.

For this repo I have used the **Tone.js** framework for interact with the Web Audio API, **Tonal.js** for the scale generation and **NexusUI** for rendering the matrix of the drum machine and the melody step sequencer.
**Beat It** is entirely written in **JavaScript** using some **jQuery** , **CSS** and **HTML**
The music icons are from **The Noun Project**

The project is still under development. Some features may not work correctly.

You can play with **Beat It** at https://ce56cd3e.jamming-with-js.pages.dev/
![sample web image](https://github.com/gusblacknails/Jamming-with-JS/blob/master/public/images/beatIt.png)

Check out some demos at https://www.youtube.com/channel/UCkJFK78qUJwzDx78wMyBBTQ
