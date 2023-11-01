const playerSelection = prompt("What's your play?").toLowerCase();

// const checkInput = (playerSelection) => {
//     if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
//         return playerSelection;
//     } else {
//       console.log('Invalid input. Try again.');
//     }
// }


const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Scissors beats Rock";
  } else if (playerSelection === computerSelection) {
    return "The game is a tie!, play again.";
  } else {
    return "You won!";
  }
};

const game = () => {
//   const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));
};

console.log(game());

// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
