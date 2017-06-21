

$('#save').on("click", function(){

var input = kickMatrix.matrix
console.log(input)
// localStorage.clear()
localStorage.setItem("kick", input);

console.log(typeof localStorage.kick)
matrixLoad()
})


function matrixLoad(){
	let value = localStorage.getItem('kick');
	let parsed =value.split(",")
	console.log(parsed)
	// parsed.forEach(function(key){
	// 	parseInt(key)
	// })
	// console.log(parsed)

	for(var i=0; i<= parsed.length -1;i++){
		console.log(typeof parseInt(parsed[i]))
		console.log(parseInt(parsed[i]))
		kickMatrix2.matrix[i][0] = parseInt(parsed[i]) || 0
        kickMatrix2.draw()
	}

}
	


function filter(input){
	input.forEach(kick,
		function(){
			console.log(input)
		})
}


