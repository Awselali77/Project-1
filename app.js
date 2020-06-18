// putting X and O and checking if there the box is full or empty
var x = 2 // for the turn
function onClick(id){
	console.log(id)
		if (document.getElementById(id).innerHTML === ""){ // checking if the box is full or not

x++
// if the x = 0 then it's player 1 on turn(X)
	if(x % 2 === 0){ 
		document.getElementById("player").innerHTML = "Player 1 turns"
	document.getElementById(id).innerHTML = "O"
	}
	// if the x is odd then it's player 2 on turn(O)
	if(x % 2 !== 0){ 
		document.getElementById("player").innerHTML = "Player 2 turns"
document.getElementById(id).innerHTML = "X"
  }
 }
 if (document.getElementById(1).innerHTML === "X" && document.getElementById(2).innerHTML === "X" && document.getElementById(3).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
}
// when the board is full then (Game Over)
 if ((document.getElementById(1).innerHTML === "X" || document.getElementById(1).innerHTML === "O") && (document.getElementById(2).innerHTML === "X" || document.getElementById(2).innerHTML === "O") && (document.getElementById(3).innerHTML === "X" || document.getElementById(3).innerHTML === "O") && (document.getElementById(4).innerHTML === "X" || document.getElementById(4).innerHTML === "O") && (document.getElementById(5).innerHTML === "X" || document.getElementById(5).innerHTML === "O") && (document.getElementById(6).innerHTML === "X" || document.getElementById(6).innerHTML === "O") && (document.getElementById(7).innerHTML === "X" || document.getElementById(7).innerHTML === "O") && (document.getElementById(8).innerHTML === "X" || document.getElementById(8).innerHTML === "O") && (document.getElementById(9).innerHTML === "X" || document.getElementById(9).innerHTML === "O")){
document.getElementById("player").innerHTML = "Game Over"
 }
// document.getElementById(id).innerHTML = "done"
if (document.getElementById("player").innerHTML = "Game Over"){
	alert("The board will reset")
location.reload()
}
}
// putting the rules for the game

