// 0 = rock, 1 = paper, 2 = scissors

const comChoiceValue = comChoice();
let userChoiceValue = userChoice();
let gameIsStarted = false;
// console.log(gameIsStarted);

function userChoice() {
	let userClick = document.querySelectorAll('#userChoice div');
	for (let index = 0; index < userClick.length; index++) {
		userClick[index].addEventListener('click', () => {
			if (userChoiceValue == null) {
				userChoiceValue = index;
			}
			// console.log('ini pilihan user', userChoiceValue);
			// console.log('ini pilihan komputer', comChoiceValue);
			const areYouWin = whoIsWin(userChoiceValue, comChoiceValue);
			// console.log(areYouWin);
			gameIsStarted = true;
			// console.log(gameIsStarted);
		});
	}
}

function comChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	return randomChoice;
}

function whoIsWin(userChoiceValue, comChoiceValue) {
	let gameResult = document.getElementById('gameResult');
	if (userChoiceValue === comChoiceValue) {
		return (gameResult.innerHTML = 'draw');
	} else if (
		(userChoiceValue === 0 && comChoiceValue === 2) ||
		(userChoiceValue === 1 && comChoiceValue === 0) ||
		(userChoiceValue === 2 && comChoiceValue === 1)
	) {
		return (gameResult.innerHTML = 'user win');
	} else {
		return (gameResult.innerHTML = 'com win');
	}
}

const refreshButton = document.getElementById('refreshButton');

refreshButton.onclick = function refresh() {
	gameIsStarted = false;
	userChoiceValue = null;
	gameResult.innerHTML = 'vs';
	// console.log(refreshButton);
	// console.log(gameIsStarted, userChoiceValue);
};
