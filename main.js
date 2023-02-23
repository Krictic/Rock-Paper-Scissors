const rockBTN = document.getElementById("rock");
const paperBTN = document.getElementById("paper");
const scissorsBTN = document.getElementById("scissors");
const resetBTN = document.getElementById("reset");
const results = document.getElementById("results--display");

let scores = ""
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let draw = 0;

rockBTN.addEventListener("click", () => {
    if (rounds <= 4) {
        results.textContent = startGame("rock");
        rounds++;
        console.log(rounds);
    } else if (rounds === 5) {
        rockBTN.textContent = "Results";
        paperBTN.textContent = "Results";
        scissorsBTN.textContent = "Results";
        results.textContent = finalResults();
    }
});

paperBTN.addEventListener("click", () => {
    if (rounds <= 4) {
        results.textContent = startGame("rock");
        rounds++;
        console.log(rounds);
    } else if (rounds === 5) {
        rockBTN.textContent = "Results";
        paperBTN.textContent = "Results";
        scissorsBTN.textContent = "Results";
        results.textContent = finalResults();
    }
});

scissorsBTN.addEventListener("click", () => {
    if (rounds <= 4) {
        results.textContent = startGame("rock");
        rounds++;
        console.log(rounds);
    } else if (rounds === 5) {
        rockBTN.textContent = "Results";
        paperBTN.textContent = "Results";
        scissorsBTN.textContent = "Results";
        results.textContent = finalResults();
    }
});

resetBTN.addEventListener("click", () => {
    rockBTN.textContent = "Rock";
    paperBTN.textContent = "Paper";
    scissorsBTN.textContent = "Scissors";
    results.textContent = "";
    scores = ""
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    draw = 0;
})



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
    computer = getComputerChoice();
    result = playRound(player, computer);

    if (result == "P") {
        playerScore++;
    } else if (result == "C") {
        computerScore++;
    } else if (result == "D") {
        draw++;
    }

    scores = `Player Score: ${playerScore} \n Computer Score: ${computerScore} \n Draws: ${draw}`;
    return scores;
}

function finalResults() {

    if (playerScore > computerScore) {
        return `Player won. \n the scores were:\n ${scores} \n press Reset to try again.`
    } else if (playerScore < computerScore) {
        return `Computer won. \n the scores were:\n ${scores} \n pressReset to try again.`
    } else {
        return `DRAW!. \n the scores were:\n ${scores} \n press Reset to try again.`
    }
}