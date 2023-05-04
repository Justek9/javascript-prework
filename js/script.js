function playGame(playerInput) {
	clearMessages();

	// Set moves

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		}
	};

	// Computer's move

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	let computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);

	// Player's move

	let playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerMove);

	// Setting game result

	function displayResult(argComputerMove, argPlayerMove) {
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			printMessage('Remis');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			printMessage('Remis');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('Komputer wygrywa');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			printMessage('Remis');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz');
		}
	};
	displayResult(computerMove, playerMove);
};

// Add event listeners

let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorskButton = document.getElementById('play-scissors');

rockButton.addEventListener('click', function () {
	playGame(1)
});

paperButton.addEventListener('click', function () {
	playGame(2)
});

scissorskButton.addEventListener('click', function () {
	playGame(3)
});
