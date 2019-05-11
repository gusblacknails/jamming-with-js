

//-----------One Player for each drum sound---------------//
var k1 = new Tone.Player("./samples/kickPunch.mp3", {fadeOut: 0.1}).toMaster()
var k2 = new Tone.Player("./samples/kickRadiant.mp3", {fadeOut: 0.1}).toMaster()
var k3 = new Tone.Player("./samples/kickFutura.mp3", {fadeOut: 0.1}).toMaster()
var sS = new Tone.Player("./samples/snareSeismic.mp3", {fadeOut: 0.1}).toMaster()
var sR = new Tone.Player("./samples/snareRadiant.mp3", {fadeOut: 0.1}).toMaster()
var sP = new Tone.Player("./samples/snarePunch.mp3", {fadeOut: 0.1}).toMaster()
var hh = new Tone.Player("./samples/hihat.mp3", {fadeOut: 0.1}).toMaster()
var hR = new Tone.Player("./samples/hihatRadiant.mp3", {fadeOut: 0.1}).toMaster()
var hS = new Tone.Player("./samples/hihatSeismic.mp3", {fadeOut: 0.1}).toMaster()
var fC = new Tone.Player("./samples/fxClap.mp3", {fadeOut: 0.1}).toMaster()
var f2 = new Tone.Player("./samples/fxSound2.mp3", {fadeOut: 0.1}).toMaster()
var f3 = new Tone.Player("./samples/fxSound3.mp3", {fadeOut: 0.1}).toMaster()
const drumSounds = [k1,k2,k3,sS,sR,sP,hh,hR,hS,fC,f2,f3]

drumSounds.forEach(chain)
function chain(item)
{
    item.chain(compressor,reverb,drumVol, Tone.Master)
}

//the notes will play each sampler

var kickSound = [k1, k2, k3]
var snareSound = [sP, sR, sS]
var hihatSound = [hh, hR, hS]
var fxSound = [fC, f2, f3]


var kickSelect = kickSound[0]
var snareSelect= snareSound[0]
var hihatSelect= hihatSound[0]
var fxSelect= fxSound[0]
