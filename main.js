const rockBTN = document.getElementById("rock");
const paperBTN = document.getElementById("paper");
const scissorsBTN = document.getElementById("scissors");
const results = document.getElementById("results--display");

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let draw = 0;

rockBTN.addEventListener("click", () => {
    results.textContent = startGame("rock");
});

paperBTN.addEventListener("click", () => {
    results.textContent = startGame("paper");
});

scissorsBTN.addEventListener("click", () => {
    results.textContent = startGame("scissors");
});

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(9);
    rng = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rng >= 0 && rng <= 3) {
        return "rock";
    } else if(rng >=4 && rng <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "D" // Draw
        } else if (playerSelection === "rock" && computerSelection==="paper") {
            return "C"; // Computer wins
        } else if (playerSelection === "paper" && computerSelection==="rock") {
            return "P"; // Player wins
        } else if (playerSelection === "scissors" && computerSelection==="paper") {
            return "P";
        } else if (playerSelection === "paper" && computerSelection==="scissors") {
            return "C";
        } else if (playerSelection === "scissors" && computerSelection==="rock") {
            return "C";
        } else if (playerSelection === "rock" && computerSelection==="scissors") {
            return  "P";
        }
}   


function startGame(player) {
    while (rounds <= 5) {
        computer = getComputerChoice();
        result = playRound(player, computer);
    
        if (result == "P") {
            playerScore++;
        } else if (result == "C") {
            computerScore++;
        } else if (result == "D") {
            draw++;
        }
    
        const scores = `Player Score: ${playerScore} \n Computer Score: ${computerScore} \n Draws: ${draw}`;
        return scores;
    }
}

/* This will display scores when five rounds are played, to be implemented.
if (roundsCount === 5) {
        if (playerScore > computerScore) {
            return `Player won. \n the scores were:\n ${scores} \n press one of the buttons to try again.`
        } else if (playerScore < computerScore) {
            return `Computer won. \n the scores were:\n ${scores} \n press one of the buttons to try again.`
        } else {
            return `DRAW!. \n the scores were:\n ${scores} \n press one of the buttons to try again.`
        }
    }
*/