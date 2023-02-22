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
    if (playerSelection !== R || playerSelection !== P || playerSelection !== S) {
        return "Write either rock paper or scissors"
    } else {
        if (playerSelection === computerSelection) {
            return "Draw"
        } else if (playerSelection === "rock" && computerSelection==="paper") {
            return "Computer";
        } else if (playerSelection === "paper" && computerSelection==="rock") {
            return "Player";
        } else if (playerSelection === "scissors" && computerSelection==="paper") {
            return "Player";
        } else if (playerSelection === "paper" && computerSelection==="scissors") {
            return "Computer";
        } else if (playerSelection === "scissors" && computerSelection==="rock") {
            return "Computer";
        } else if (playerSelection === "rock" && computerSelection==="scissors") {
            return  "Player";
        }
    }   
}
