// putting X and O and checking if there the box is full or empty
var x = 2 // for the turn
function onClick(id){
		if (document.getElementById(id).innerHTML === ""){ // checking if the box is full or not

x++
	if(x % 2 === 0){ // if the x = 0 then it's player 1 on turn(X)
		document.getElementById("player").innerHTML = "Player 1 turns"
	document.getElementById(id).innerHTML = "O"
	}
	if(x % 2 !== 0){ // if the x is odd then it's player 2 on turn(O)
		document.getElementById("player").innerHTML = "Player 2 turns"
document.getElementById(id).innerHTML = "X"
  }
 }
}
// putting the rules for the game

