const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('img');
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  getComputerChoice();
  getResult ()
}))


const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerChoice = "rock";
  }
  if (choice === 1) {
    computerChoice = "paper";
  }
  if (choice === 2) {
    computerChoice = "scissors";
  } 
  computerChoiceDisplay.textContent = computerChoice;
};

function getResult () {
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You lose! Rock beats Paper";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You lose! Scissors beats Rock";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You lose! Scissors beats Rock";
  } else if (computerChoice === userChoice) {
    result = "The game is a tie! play again.";
  } else {
    result = "You won!";
  }
  resultDisplay.textContent = result;
}


result.style.color = 'red';

// const getComputerChoice = () => {
//   const choice = Math.floor(Math.random() * 3);
//   if (choice === 0) {
//     return "rock";
//   } else if (choice === 1) {
//     return "paper";
//   } else if (choice === 2) {
//     return "scissors";
//   } 
// };

// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You lose! Paper beats Rock";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You lose! Scissors beats Rock";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You lose! Scissors beats Rock";
//   } else if (playerSelection === computerSelection) {
//     return "The game is a tie!, play again.";
//   } else {
//     return "You won!";
//   }
// };

// const game = () => {
//   for (let gameRound = 0; gameRound < 5; gameRound++) {
//     const playerSelection = prompt("What's your play?").toLowerCase();
//     const computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//   }
// };

// console.log(game());

