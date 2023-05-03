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
printMessage('Mój ruch to: ' + computerMove)
