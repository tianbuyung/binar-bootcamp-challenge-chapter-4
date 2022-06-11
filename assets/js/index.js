// 0 = rock, 1 = paper, 2 = scissors
class Game {
	constructor(userChoiceValue, comChoiceValue, gameIsStarted) {
		this.userChoiceValue = userChoiceValue;
		this.comChoiceValue = comChoiceValue;
		this.gameIsStarted = gameIsStarted;
	}

	userChoice() {
		const userClick = document.querySelectorAll('#userChoice div');
		for (let index = 0; index < userClick.length; index++) {
			userClick[index].addEventListener('click', () => {
				if (this.gameIsStarted === false) {
					if (this.userChoiceValue == null) {
						this.userChoiceValue = index;
					}
					this.styling(userClick[index]);
					this.comChoiceValue = this.comChoice();
					this.stylingCom(this.comChoiceValue);
					this.whoIsWin(this.userChoiceValue, this.comChoiceValue);
					this.gameIsStarted = true;
				}
			});
		}
	}

	comChoice() {
		let randomChoice = Math.floor(Math.random() * 2.9);
		return randomChoice;
	}

	whoIsWin(userChoiceValue, comChoiceValue) {
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

	styling(element) {
		element.classList.add('selected');
	}

	stylingCom(index) {
		const elementComp = document.querySelectorAll('#comChoice div');
		elementComp[index].classList.add('selected');
	}

	refresh() {
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
		this.userChoiceValue = null;
		this.comChoiceValue = null;
		this.gameIsStarted = false;
	}
}

const newGame = new Game(null, null, false);
newGame.userChoice();

const refreshButton = document.getElementById('refreshButton');
refreshButton.onclick = () => {
	newGame.refresh();
};
