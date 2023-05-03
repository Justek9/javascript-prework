// Computer's move

let randomNumber = Math.floor(Math.random() * 3 + 1)

console.log('Wylosowana liczba to: ' + randomNumber)

let computerMove = 'nieznany ruch'

function setComputerMove() {
	if (randomNumber == 1) {
		computerMove = 'kamień'
	} else if (randomNumber == 2) {
		computerMove = 'papier'
	} else if (randomNumber == 3) {
		computerMove = 'nożyce'
	}
}

setComputerMove(randomNumber)
// console.log(computerMove)
// printMessage('Mój ruch to: ' + computerMove)

// Player's move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')

console.log('Gracz wpisał: ' + playerInput)

let playerMove = 'nieznany ruch'

function setPlayersMove() {
	if (playerInput == '1') {
		playerMove = 'kamień'
	} else if (playerInput == '2') {
		playerMove = 'papier'
	} else if (playerInput == '3') {
		playerMove = 'nożyce'
	}
}

setPlayersMove()
console.log(playerMove);

// printMessage('Twój ruch to: ' + playerMove);
