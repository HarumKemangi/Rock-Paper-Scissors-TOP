//Variables for game scores, rounds, and choices
let playerScore = 0;
let computerScore = 0;
let round = 0;
let choice = ["Rock", "Paper", "Scissors"];

//variables for game restart element
const h1 = document.createElement("h1");
const button = document.createElement("button");
const div = document.querySelector("div");

// Function to restart the game after done playing
function blip() {
    div.appendChild(h1);
    h1.innerHTML = "Wanna Try Again?";

    div.appendChild(button);
    button.innerHTML = "Restart";
    button.addEventListener("click", () => {
        location.reload();
    })
}

// Function to start round, check win/tie/lose condition per-round, and check input from prompt 
function game(playerSelection, computerSelection) {
    computerSelection = choice[(Math.floor(Math.random() * choice.length))];
    let input = prompt("Rock, Paper, Scissors!");
    playerSelection = input.charAt(0).toUpperCase() + input.slice(1);
    console.log(playerSelection);

    if (!(choice.includes(playerSelection))) {
        alert("Invalid Value");
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        round++;
        alert(
            `Round ${round}
            player Selected: ${playerSelection}
            Computer Selected: ${computerSelection}\n
            You Won This Round! ${playerSelection} beats ${computerSelection}
            Your Score: ${playerScore} \|\| Computer Score: ${computerScore}` 
        );
    } else if (playerSelection === computerSelection) {
        round++;
        alert(
            `Round ${round}
            player Selected: ${playerSelection}
            Computer Selected: ${computerSelection}\n
            Its Tie!
            Your Score: ${playerScore} \|\| Computer Score: ${computerScore}`
        );
    } else {
        computerScore++;
        round++;
        alert(
            `Round ${round}
            player Selected: ${playerSelection}
            Computer Selected: ${computerSelection}\n
            You Lose This Round! ${computerSelection} Beats ${playerSelection}
            Your Score: ${playerScore} \|\| Computer Score: ${computerScore}`
        );
    }
}

// Function loop for playing 5 round of rock-paper-scissors, check final result: win/tie/lose OR best out of 3 condition
for (i = 0; i < 5; i++) {
    game();

    if (playerScore === 3 && round < 5) {
        alert(
            `Congratulation! You Won The Game
            Your Score: ${playerScore}
            Computer Score: ${computerScore}`
        );
        break;
    } else if (computerScore === 3 && round < 5) {
        alert(
            `Oops! You Lose The Game
            Your Score: ${playerScore}
            Computer Score: ${computerScore}`
        );
        break;
    } else if (playerScore > computerScore && round === 5) {
        alert(
            `Congratulation! You Won The Game
            Your Score: ${playerScore}
            Computer Score: ${computerScore}`
        );
    } else if (computerScore > playerScore && round === 5) {
        alert(
            `Oops! You Lose The Game
            Your Score: ${playerScore}
            Computer Score: ${computerScore}`
        );
    } else if (playerScore === computerScore && round === 5) {
        alert(
            `Wow! The Game Is Tie
            Your Score: ${playerScore}
            Computer Score: ${computerScore}`
        );
    }
}

// Calling function blip to show restart element
blip()

