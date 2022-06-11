// 0 = rock, 1 = paper, 2 = scissors
class Game {
  constructor(props) {
    // OOP Abstraction
    if (this.constructor === Game) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
    let { userChoiceValue, gameIsStarted } = props;
    this.userChoiceValue = userChoiceValue;
    this.gameIsStarted = gameIsStarted;
  }

  userChoice() {}

  whoIsWin(userChoiceValue, comChoiceValue) {
    let theWinner;
    const gameResult = document.getElementById("gameResult");
    if (userChoiceValue === comChoiceValue) {
      return (
        (theWinner = "draw"),
        (gameResult.innerHTML = "draw"),
        gameResult.classList.remove("game-result", "result-win"),
        gameResult.classList.add("result-draw")
      );
    } else if (
      (userChoiceValue === 0 && comChoiceValue === 2) ||
      (userChoiceValue === 1 && comChoiceValue === 0) ||
      (userChoiceValue === 2 && comChoiceValue === 1)
    ) {
      return (
        (theWinner = "player 1 win"),
        (gameResult.innerHTML = "player 1 win"),
        gameResult.classList.remove("game-result", "result-draw"),
        gameResult.classList.add("result-win")
      );
    } else {
      return (
        (theWinner = "com win"),
        (gameResult.innerHTML = "com win"),
        gameResult.classList.remove("game-result", "result-draw"),
        gameResult.classList.add("result-win")
      );
    }
  }

  styling(element) {
    element.classList.add("selected");
  }

  refresh() {
    const userClick = document.getElementsByClassName("selected");
    if (userClick.length > 0) {
      userClick[0].classList.remove("selected");
    }
    const elementComp = document.getElementsByClassName("selected");
    if (elementComp.length > 0) {
      elementComp[0].classList.remove("selected");
    }
    gameResult.innerHTML = "VS";
    gameResult.classList.remove("result-win", "result-draw");
    gameResult.classList.add("game-result");
    this.userChoiceValue = null;
    this.comChoiceValue = null;
    this.gameIsStarted = false;
  }
}

// OOP Inheritance
class Computer extends Game {
  constructor(props) {
    super(props);
    this.comChoiceValue = props.comChoiceValue;
  }
  // Inheritance with Overriding method
  userChoice() {
    super.userChoice();
    const userClick = document.querySelectorAll("#userChoice div");
    for (let index = 0; index < userClick.length; index++) {
      userClick[index].addEventListener("click", () => {
        if (this.gameIsStarted === false) {
          if (this.userChoiceValue == null) {
            this.userChoiceValue = index;
          }
          this.styling(userClick[index]);
          this.comChoiceValue = this.generateComputerChoice();
          this.whoIsWin(this.userChoiceValue, this.comChoiceValue);
          this.gameIsStarted = true;
        }
      });
    }
  }

  randomNumber() {
    let rand = Math.floor(Math.random() * 2.9);
    return rand;
  }

  stylingCom(index) {
    const elementComp = document.querySelectorAll("#comChoice div");
    elementComp[index].classList.add("selected");
  }

  // OOP Encapsulation with private method
  #getComChoice() {
    return this.choose;
  }

  #setComChoise(value) {
    this.choose = value;
  }

  generateComputerChoice() {
    this.#setComChoise(this.randomNumber());
    const choose = this.#getComChoice();
    this.stylingCom(choose);
    return choose;
  }
}

const newGame = new Computer({
  userChoiceValue: null,
  gameIsStarted: false,
  comChoiceValue: null,
});
newGame.userChoice();

const refreshButton = document.getElementById("refreshButton");
refreshButton.onclick = () => {
  newGame.refresh();
};
