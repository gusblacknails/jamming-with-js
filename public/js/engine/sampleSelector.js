//-----------------Sample selection for each drum matrix--------------------//
$('#kick1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#kick2, #kick3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[0]
});
$('#kick2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#kick1, #kick3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[1]
});
$('#kick3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#kick2, #kick1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    kickSelect = kickSound[2]
});
$('#snare1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#snare2, #snare3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[0]
});
$('#snare2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#snare1, #snare3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[1]
});
$('#snare3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#snare2, #snare1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    snareSelect = snareSound[2]
});
$('#hihat1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#hihat2, #hihat3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[0]
});
$('#hihat2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#hihat1, #hihat3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[1]
});
$('#hihat3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#hihat2, #hihat1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    hihatSelect = hihatSound[2]
});
$('#soundFX1').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#soundFX2, #soundFX3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[0]
});
$('#soundFX2').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff")
    $('#soundFX1, #soundFX3').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[1]
});
$('#soundFX3').click(function() {
    $(this).toggleClass("SampleSelection SampleSelectionOff ")
    $('#soundFX2, #soundFX1').addClass('SampleSelectionOff').removeClass('SampleSelection');
    fxSelect = fxSound[2]
});