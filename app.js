// putting X and O and checking if there the box is full or empty
var x = 0 // for the turn
function onClick(id){
		if (document.getElementById(id).innerHTML === "X"){ // checking if the box is full or not
			x = 0
					document.getElementById("player").innerHTML = "Player 1 turns"

document.getElementById(id).innerHTML = "X"
	
	}
			if (document.getElementById(id).innerHTML === "O"){ // checking if the box is full or not
				x = 1
						document.getElementById("player").innerHTML = "Player 2 turns"

document.getElementById(id).innerHTML = "O"
	
			}

	if(x % 2 === 0){ // if the x = 0 then it's player 1 on turn(X)
			x = 1
		document.getElementById("player").innerHTML = "Player 1 turns"
	document.getElementById(id).innerHTML = "O"
	}
	if(x % 2 !== 0){ // if the x is odd then it's player 2 on turn(O)
			x = 0
		document.getElementById("player").innerHTML = "Player 2 turns"
document.getElementById(id).innerHTML = "X"
}
	if(document.getElementById(1).innerHTML && document.getElementById(2).innerHTML && document.getElementById(3).innerHTML === "X"){
		//console.log("Player 1 is the winner")
	}
if(document.getElementById(1).innerHTML && document.getElementById(2).innerHTML && document.getElementById(3).innerHTML === "O"){
		//console.log("Player 2 is the winner")
	}
	console.log(x)
}
// putting the rules for the game

