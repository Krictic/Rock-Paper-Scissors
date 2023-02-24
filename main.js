const rockBTN = document.getElementById("rock");
const paperBTN = document.getElementById("paper");
const scissorsBTN = document.getElementById("scissors");
const storeBTN = document.getElementById("storeBTN");
const resetBTN = document.getElementById("reset");
const results = document.getElementById("results--display");
const leaderboard = document.getElementById("leaderboardBTN");
const leaderboardDisplay1 = document.getElementById("leaderboard1");
const leaderboardDisplay2 = document.getElementById("leaderboard2");
const leaderboardDisplay3 = document.getElementById("leaderboard3");

let scores = "";
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let playerWins = 0;
let computerWins = 0;
let drawWins = 0;

rockBTN.addEventListener("click", () => play("rock"));
paperBTN.addEventListener("click", () => play("paper"));
scissorsBTN.addEventListener("click", () => play("scissors"));
resetBTN.addEventListener("click", () => reset());
leaderboard.addEventListener("click", () => showLeaderboard());
storeBTN.addEventListener("click", () => localStore())

function checkLocalStorage() {
    if (localStorage.length === 0) {

        localStorage.setItem('playerWins', JSON.stringify(0));
        localStorage.setItem('computerWins', JSON.stringify(0));
        localStorage.setItem('drawWins', JSON.stringify(0));
    } else {
        return;
    }
}

function showLeaderboard() {
    let player = JSON.parse(localStorage.getItem("playerWins"));
    let computer = JSON.parse(localStorage.getItem("computerWins"));
    let draws = JSON.parse(localStorage.getItem("drawWins"));

    leaderboardDisplay1.textContent = `The player won ${player} times`;
    leaderboardDisplay2.textContent = `The computer won ${computer} times.`;
    leaderboardDisplay3.textContent = `And there were ${draws} draws.`;
}

function play(playerSelection) {
    if (rounds <= 4) {
        results.textContent = startGame(playerSelection);
        rounds++;
    } else if (rounds === 5) {
        rockBTN.textContent = "Results";
        paperBTN.textContent = "Results";
        scissorsBTN.textContent = "Results";
        results.textContent = finalResults();
    }
};

// May God have mercy on my soul.
function localStore() {
    let playerReset = JSON.parse(localStorage.getItem("playerWins")) + playerWins;
    let computerReset = JSON.parse(localStorage.getItem("computerWins")) + computerWins;
    let drawsReset = JSON.parse(localStorage.getItem("drawWins")) + drawWins;

    localStorage.setItem('playerWins', JSON.stringify(playerReset));
    localStorage.setItem('computerWins', JSON.stringify(computerReset));
    localStorage.setItem('drawWins', JSON.stringify(drawsReset));


    playerWins = 0;
    computerWins = 0;
    drawWins = 0;
}

function reset() {
    rockBTN.textContent = "Rock";
    paperBTN.textContent = "Paper";
    scissorsBTN.textContent = "Scissors";
    results.textContent = "Game is reset.";
    scores = ""
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    draw = 0;
};

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
    let computer = getComputerChoice();
    let result = playRound(player, computer);

    if (result == "P") {
        playerScore++;
    } else if (result == "C") {
        computerScore++;
    } else if (result == "D") {
        draw++;
    }

    scores = `Player Score: ${playerScore} Computer Score: ${computerScore} Draws: ${draw}`;
    return scores;
}

function finalResults() {

    if (playerScore > computerScore) {
        playerWins++;
        return `Player won. the scores were: ${scores} press Reset to try again.`;
    } else if (playerScore < computerScore) {
        computerWins++;
        return `Computer won. the scores were: ${scores} press Reset to try again.`;
    } else {
        drawWins++;
        return `DRAW!. the scores were: ${scores} press Reset to try again.`;
    }
}

checkLocalStorage()