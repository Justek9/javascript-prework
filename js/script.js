'use strict'

let result = document.getElementById('result')
const resetBtn = document.getElementById('reset')
const roundBtn = document.getElementById('next-round')
const rockButton = document.getElementById('play-rock')
const paperButton = document.getElementById('play-paper')
const scissorskButton = document.getElementById('play-scissors')
const noOfRound = document.getElementById('round')
let playRock = document.getElementById('comp-play-rock')
let playScissors = document.getElementById('comp-play-scissors')
let playPaper = document.getElementById('comp-play-paper')
const compPoints = document.getElementById('computers-points')
const playerPoints = document.getElementById('players-points')
let round = 1
let compScore = 0
let playerScore = 0
let movesArr = [rockButton, paperButton, scissorskButton]
let compMoves = [playRock, playPaper, playScissors]

function playGame(playerInput) {
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
	let computerMove = getMoveName(randomNumber)

	// sjow it on te screen
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
	function displayResult(argComputerMove, argPlayerMove) {
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz!'
			playerScore++
			playerPoints.innerHTML = playerScore
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa!'
			compScore++
			compPoints.innerHTML = compScore
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz!'
			playerScore++
			playerPoints.innerHTML = playerScore
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa!'
			compScore++
			compPoints.innerHTML = compScore
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			result.innerHTML = 'Wynik gry: Komputer wygrywa'
			compScore++
			compPoints.innerHTML = compScore
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			result.innerHTML = 'Wynik gry: remis'
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			result.innerHTML = 'Wynik gry: Ty wygrywasz'
			playerScore++
			playerPoints.innerHTML = playerScore
		}
	}
	displayResult(computerMove, playerMove)
}

// Add event listeners
const startPlaying = function () {
	playGame(3)
	this.classList.add('i-clicked')
	console.log(this)
	movesArr.forEach(el => el.removeEventListener('click', startPlaying))
}
rockButton.addEventListener('click', startPlaying)
paperButton.addEventListener('click', startPlaying)
scissorskButton.addEventListener('click', startPlaying)

roundBtn.addEventListener('click', function () {
	movesArr.forEach(el => el.classList.remove('i-clicked'))
	round++
	noOfRound.innerHTML = round
	compMoves.forEach(el => el.classList.add('hidden'))
	result.innerHTML = 'Wynik gry:'
	movesArr.forEach(el => el.addEventListener('click', startPlaying))
})

resetBtn.addEventListener('click', function () {
	movesArr.forEach(el => el.classList.remove('i-clicked'))
	compMoves.forEach(el => el.classList.add('hidden'))
	result.innerHTML = 'Wynik gry:'
	noOfRound.innerHTML = '0'
	compPoints.innerHTML = '0'
	playerPoints.innerHTML = '0'
})

// Remove listeners to players moves
