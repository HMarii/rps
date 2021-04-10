playerName()
opponentName()

/* Melyiket választottuk (K,P,O) */
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]')
var computerScore = document.querySelector('[data-your-score]')
var yourScore = document.querySelector('[data-computer-score]')

document.getElementById("result-score").innerHTML = 0;
document.getElementById("result-score2").innerHTML = 0;
const SELECTIONS = [
	{
		name: 'rock',
		emoji: '✊',
		beats: 'scissors'
	},
	{
		name: 'paper',
		emoji: '✋',
		beats: 'rock'
	},
	{
		name: 'scissors',
		emoji: '✌️',
		beats: 'paper'
	}
]

/* A te neved */
function playerName() {
//yourScore = 0;
var playerName = prompt("Írd be a neved!");
if(playerName == null || playerName == "") {
	document.getElementById("player-name").innerHTML = "Te "
}
else {
	document.getElementById("player-name").innerHTML = playerName+ " "
}
}

/* Random robot név */
function opponentName() {
//computerScore = 0;
var names = ["Poci", "Putyi", "Pöcök", "Béla", "Muri", "Mackó", "Tóbi"];
var opponentName = names[Math.floor(Math.random() * names.length)];
document.getElementById("opponent-name").innerHTML = opponentName+ " "
}


selectionButtons.forEach(selectionButton => {
	selectionButton.addEventListener('click', e => {
		 const selectionName = selectionButton.dataset.selection;
		 const selection = SELECTIONS.find(selection => selection.name === selectionName)
		 makeSelection(selection);
	})
})

function incrementScore(scoreSpan) {

	if(playerName == null || playerName == "") {
	document.getElementById("result-score").innerHTML = scoreSpan++;
}
else {
	document.getElementById("result-score").innerHTML = scoreSpan++;
}

document.getElementById("result-score2").innerHTML = scoreSpan++;


}

function makeSelection(selection) {
	const computerSelection = randomSelection();
	const yourWinner = isWinner(selection, computerSelection)
	const computerWinner = isWinner(computerSelection, selection)


	addSelectionResult(computerSelection, computerWinner)
	addSelectionResult(selection, yourWinner)

	if(yourWinner) incrementScore(yourScore)
	if(computerWinner) incrementScore(computerScore)
}



function addSelectionResult(selection, winner) {
	const div = document.createElement('div')
	div.innerText = selection.emoji
	div.classList.add('result-selection')
	if(winner)
		div.classList.add('winner')
		finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
	return selection.beats === opponentSelection.name
}

function randomSelection() {
	const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
	return SELECTIONS[randomIndex]
}