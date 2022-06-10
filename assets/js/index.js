// 0 = rock, 1 = paper, 2 = scissors
let userChoiceValue = userChoice();
let comChoiceValue = comChoice();
let gameIsStarted = false;

function userChoice() {
	const userClick = document.querySelectorAll('#userChoice div');
	for (let index = 0; index < userClick.length; index++) {
		userClick[index].addEventListener('click', () => {
			if (gameIsStarted === false) {
				if (userChoiceValue == null) {
					userChoiceValue = index;
				}
				styling(userClick[index]);
				stylingCom(comChoiceValue);
				whoIsWin(userChoiceValue, comChoiceValue);
				gameIsStarted = true;
			}
		});
	}
}

function comChoice() {
	let randomChoice = Math.floor(Math.random() * 2.9);
	return randomChoice;
}

function whoIsWin(userChoiceValue, comChoiceValue) {
	let theWinner;
	const gameResult = document.getElementById('gameResult');
	if (userChoiceValue === comChoiceValue) {
		return (
			(theWinner = 'draw'),
			(gameResult.innerHTML = 'draw'),
			gameResult.classList.remove('game-result', 'result-win'),
			gameResult.classList.add('result-draw')
		);
	} else if (
		(userChoiceValue === 0 && comChoiceValue === 2) ||
		(userChoiceValue === 1 && comChoiceValue === 0) ||
		(userChoiceValue === 2 && comChoiceValue === 1)
	) {
		return (
			(theWinner = 'player 1 win'),
			(gameResult.innerHTML = 'player 1 win'),
			gameResult.classList.remove('game-result', 'result-draw'),
			gameResult.classList.add('result-win')
		);
	} else {
		return (
			(theWinner = 'com win'),
			(gameResult.innerHTML = 'com win'),
			gameResult.classList.remove('game-result', 'result-draw'),
			gameResult.classList.add('result-win')
		);
	}
}

function styling(element) {
	element.classList.add('selected');
}

function stylingCom(index) {
	const elementComp = document.querySelectorAll('#comChoice div');
	elementComp[index].classList.add('selected');
}

function refresh() {
	const userClick = document.getElementsByClassName('selected');
	if (userClick.length > 0) {
		userClick[0].classList.remove('selected');
	}
	const elementComp = document.getElementsByClassName('selected');
	if (elementComp.length > 0) {
		elementComp[0].classList.remove('selected');
	}
	gameResult.innerHTML = 'VS';
	gameResult.classList.remove('result-win', 'result-draw');
	gameResult.classList.add('game-result');
	userChoiceValue = null;
	comChoiceValue = comChoice();
	gameIsStarted = false;
}

let refreshButton = document.getElementById('refreshButton');

refreshButton.onclick = () => {
	refresh();
};
