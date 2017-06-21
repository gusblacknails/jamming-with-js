

$('#save').on("click", function(){

let four_kick = kickMatrix.matrix
let eight_kick = kickMatrix2.matrix
let triplet_kick = kickMatrix3.matrix
let sixteen_kick = kickMatrix4.matrix

let four_snare = snareMatrix.matrix
let eight_snare = snareMatrix2.matrix
let triplet_snare = snareMatrix3.matrix
let sixteen_snare = snareMatrix4.matrix

let four_hihat = hihatMatrix.matrix
let eight_hihat = hihatMatrix2.matrix
let triplet_hihat = hihatMatrix3.matrix
let sixteen_hihat = hihatMatrix4.matrix

let four_fx = fxMatrix.matrix
let eight_fx = fxMatrix2.matrix
let triplet_fx = fxMatrix3.matrix
let sixteen_fx = fxMatrix4.matrix

// localStorage.clear()

localStorage.setItem("four_kick", four_kick);
localStorage.setItem("eight_kick", eight_kick);
localStorage.setItem("triplet_kick", triplet_kick);
localStorage.setItem("sixteen_kick", sixteen_kick);
localStorage.setItem("four_snare", four_snare);
localStorage.setItem("eight_snare", eight_snare);
localStorage.setItem("triplet_snare", triplet_snare);
localStorage.setItem("sixteen_snare", sixteen_snare);
localStorage.setItem("four_hihat", four_hihat);
localStorage.setItem("eight_hihat", eight_hihat);
localStorage.setItem("triplet_hihat", triplet_hihat);
localStorage.setItem("sixteen_hihat", sixteen_hihat);
localStorage.setItem("four_fx", four_fx);
localStorage.setItem("eight_fx", eight_fx);
localStorage.setItem("triplet_fx", triplet_fx);
localStorage.setItem("sixteen_fx", sixteen_fx);



})




// (function ($) {
//     // Run on page load
//     window.onload = function() {
//         var person_number = sessionStorage.getItem("person_number");
//         var email = sessionStorage.getItem("email");

//         if (person_number !== undefined || person_number !== null ||
//             person_number != undefined || person_number != null){
//             $('#person_number').val(person_number);
//         }
//         if (email !== undefined || email !== null ||
//             email != undefined || email != null){
//             $('#username').val(email);
//         }
//     }

//     // Before refreshing the page, save the form data to sessionStorage
//     window.onbeforeunload = function() {

//         var person_number = $('#person_number').val();
//         var email = $('#username').val();

//         if (person_number !== undefined || person_number !== null ||
//             person_number != undefined || person_number != null){
//             sessionStorage.setItem("person_number", person_number);
//         }
//         if (email !== undefined || email !== null ||
//             email != undefined || email != null){
//             sessionStorage.setItem("email", email);
//         }
//     }
// })(jQuery);
	


