/* YOU ARE IN: hs/javascript/script.js */

//hit button id, store in humanscore variable, call computer pick
var gameChoice = [];
var computerScore = 0;
var humanScore = 0;

gameChoice.push( 'rock', 'paper', 'scissors' );

function computerPick () {
	// randomly pick an item from array
	// choose a random number
		var random = Math.random()*gameChoice.length;
	// round it down to nearest integer
		var integer = Math.floor(random);
	console.log("-------computerPick--------");
	console.log( integer ); 

	return gameChoice[integer];
}

document.getElementById('rock').addEventListener("click", function(){
	//get the input from the user
	var input = (this.id);
	console.log("-------humanPick--------");
	console.log( input )
		var player1 = computerPick();
		var player2 = input;
		// call the compare function
		// player1 is the computer
		// player2 is the human
		compare( player1, player2 );
	console.log("-------both picks c/h--------");
	console.log(player1, player2);
	keepPlaying();
});

document.getElementById('paper').addEventListener("click", function(){
	//get the input from the user
	var input = (this.id);
	console.log("-------humanPick--------");
	console.log( input )

		var player1 = computerPick();
		var player2 = input;
		// call the compare function
		// player1 is the computer
		// player2 is the human
		compare( player1, player2 );
	console.log("-------both picks c/h--------");
	console.log(player1, player2);
	keepPlaying();
});


document.getElementById('scissors').addEventListener("click", function(){
	//get the input from the user
	var input = (this.id);
	console.log("-------humanPick--------");
	console.log( input )

		var player1 = computerPick();
		var player2 = input;
		// player1 is the computer
		// player2 is the human
		compare( player1, player2 );
	console.log("-------both picks c/h--------");
	console.log(player1, player2);
	keepPlaying();
});

//compare human vs computer, determine winner
var tie = 0;

function compare (val1, val2) {
	var player1, player2;
	for ( var i = 0; i < gameChoice.length; i++ ) {
	if ( gameChoice[ i ] == val1 ) {
	player1 = i;
	break;
	}
	}
	for ( var i = 0; i < gameChoice.length; i++ ) {
	if ( gameChoice[ i ] == val2 ) {
	player2 = i;
	break;
	}
	}
	console.log("-------both picks as an array position c/h--------");
	console.log(player1, player2)

	if (player1 == player2) {
		tie = tie + 1;
		if (tie == 1) {
			document.getElementById("alert").innerHTML= "It's a Tie!";
		}
		else if (tie == 2) {
			document.getElementById("alert").innerHTML= "It's another Tie!";
		}
		else if (tie > 2) {
			document.getElementById("alert").innerHTML= "It's Tie Number " + tie + "!";
		}
	}
	else if (player1 == 0 && player2 == 1 ||
			player1 == 1 && player2 == 2 ||
			player1 == 2 && player2 == 0) {
		counterUpHuman();//add a point for the human
		document.getElementById("alert").innerHTML= "YOU WIN! Robot played " + gameChoice[player1];
		console.log('human wins!');
	}

	else if (player1 == 0 && player2 == 2 ||
			player1 == 2 && player2 == 1 ||
			player1 == 1 && player2 == 0) {
		counterUpComputer();//add a point for the computer
		document.getElementById("alert").innerHTML= "YOU LOSE! Robot played " + gameChoice[player1];
		console.log('computer wins!');
	}
}

function counterUpComputer() {
//log winner on scoreboard
	computerScore += 1;
	document.getElementById("computerScore").innerHTML= computerScore ;
	} 

function counterUpHuman () {
	humanScore += 1;
	document.getElementById("humanScore").innerHTML= humanScore ;
}

function keepPlaying () {
	if (humanScore == 5 || computerScore == 5) {
		document.getElementById('alertTwo').innerHTML= "GAME OVER";
		document.getElementById('playAgain').innerHTML= "Play Again?";
		document.getElementById('rock').innerHTML= "";
		document.getElementById('paper').innerHTML= "";
		document.getElementById('scissors').innerHTML= "";
}
};

document.getElementById('playAgain').addEventListener("click", function(){
	location.reload();
});