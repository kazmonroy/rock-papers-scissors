// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

const choices = document.querySelectorAll("button");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let userChoice;

choices.forEach((eachChoice) =>
  eachChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;

    // console.log(userChoice);

    playComputer();

    playGame();
  })
);

// let player;
// let computer;

function playComputer() {
  let computer = Math.floor(Math.random() * choices.length);

  if (computer === 0) {
    return "rock";
  } else if (computer === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerChoice = playComputer();

function playGame() {
  if (userChoice === "rock" && computerChoice === "paper") {
    results.textContent = "You lose";
    // return (computerWin += 1);
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    results.textContent = "You win";
    // return (playerWin += 1);
  } else if (userChoice === "paper" && computerChoice === "rock") {
    results.textContent = "You win";
    // return (playerWin += 1);
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    results.textContent = "You lose";
    // return (computerWin += 1);
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    results.textContent = "You win";
    // return (playerWin += 1);
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    results.textContent = "You lose";
    // return (computerWin += 1);
  } else {
    results.textContent = "It's a tie!";
  }
}

console.log(userChoice);
console.log(computerChoice);

// playGame();

// computer = computerPlay();
// player = prompt("Enter choice:").toLowerCase();
// let playerWin = 0;
// let computerWin = 0;

// function gamePlay() {
//   player;
//   computer;
//   playerWin;
//   computerWin;

//EVENT LISTENER

// rock.addEventListener("click", function () {
//   if (computer === "paper") {
//     results.textContent = "You lose";
// return (computerWin += 1);
//   } else if (computer === "scissors") {
//     results.textContent = "You win";
// return (playerWin += 1);
//   } else if (computer === "rock") {
//     results.textContent = "It's a tie!";
//   }
// });

// paper.addEventListener("click", function () {
//   if (computer === "paper") {
//     results.textContent = "It's a tie";
//   } else if (computer === "scissors") {
//     results.textContent = "You lose";
// return (computerWin += 1);
//   } else if (computer === "rock") {
//     results.textContent = "You Win";
// return (playerWin += 1);
//   }
// });

// console.log(computer);

//IF VERSION

//   if (player === "rock" && computer === "paper") {
//     results.textContent = "You lose";
// return (computerWin += 1);
//   } else if (player === "rock" && computer === "scissors") {
//     results.textContent = "You win";
// return (playerWin += 1);
//   } else if (player === "paper" && computer === "rock") {
//     results.textContent = "You win";
// return (playerWin += 1);
//   } else if (player === "paper" && computer === "scissors") {
//     results.textContent = "You lose";
// return (computerWin += 1);
//   } else if (player === "scissors" && computer === "paper") {
//     results.textContent = "You win";
// return (playerWin += 1);
//   } else if (player === "scissors" && computer === "rock") {
//     results.textContent = "You lose";
// return (computerWin += 1);
//   } else {
//     results.textContent = "It's a tie!";
//   }
// }

// gamePlay();

// playerScore.textContent = player;
// computerScore.textContent = computer;
