'use strict'

let result = document.getElementById('result')

function playGame(playerInput) {
	// clearMessages()

	// Set moves

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień'
		} else if (argMoveId == 2) {
			return 'papier'
		} else if (argMoveId == 3) {
			return 'nożyce'
		}
	}

	// Computer's move

	let randomNumber = Math.floor(Math.random() * 3 + 1)
	// console.log('Wylosowana liczba to: ' + randomNumber)
	let computerMove = getMoveName(randomNumber)

	let playRock = document.getElementById('comp-play-rock')

	let playScissors = document.getElementById('comp-play-scissors')

	let playPaper = document.getElementById('comp-play-paper')

	if (computerMove == 'kamień') {
		playRock.classList.remove('hidden')
	} else if (computerMove == 'papier') {
		playPaper.classList.remove('hidden')
	} else if (computerMove == 'nożyce') {
		playScissors.classList.remove('hidden')
	}

	// Player's move

	let playerMove = getMoveName(playerInput)

	// Setting game result

	console.log(result.innerHTML)
	console.log(result.textContent)

	function displayResult(argComputerMove, argPlayerMove) {
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz!'
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa!'
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz!'
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa!'
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa'
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz'
		}
	}
	displayResult(computerMove, playerMove)
}

// Add event listeners

let rockButton = document.getElementById('play-rock')
let paperButton = document.getElementById('play-paper')
let scissorskButton = document.getElementById('play-scissors')

rockButton.addEventListener('click', function () {
	playGame(1)
	document.getElementById('play-rock').style.color = 'blue'
})

paperButton.addEventListener('click', function () {
	playGame(2)
	document.getElementById('play-paper').style.color = 'blue'
})

scissorskButton.addEventListener('click', function () {
	playGame(3)
	document.getElementById('play-scissors').style.color = 'blue'
})
