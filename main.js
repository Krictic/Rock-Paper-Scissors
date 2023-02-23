console.log("Type startGame() to begin.")

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


function startGame() {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    player = prompt("Type either rock, paper or scissors").toLowerCase()
    
    while (rounds < 5) {
        computer = getComputerChoice();
        result = playRound(player, computer);

        if (result == "P") {
            playerScore++;
            console.log("Player")
        } else if (result == "C") {
            computerScore++;
            console.log("Computer")
        } else if (result == "D") {
            draw++;
            console.log("Draw")
        }

        rounds++;
    }

    const scores = `Player Score: ${playerScore} \n Computer Score: ${computerScore} \n Draws: ${draw}`

    if (playerScore > computerScore) {
        return `Player won. \n the results were:\n ${scores} \n type startGame() in the console to play again.`
    } else if (playerScore < computerScore) {
        return `Computer won. \n the results were:\n ${scores} \n type startGame() in the console to play again.`
    } else {
        return `DRAW!. \n the results were:\n ${scores} \n type startGame() in the console to play again.`
    }
}
