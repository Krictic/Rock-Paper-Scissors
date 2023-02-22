const R = "Rock"
const P = "Paper"
const S = "Scissors"

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(9);
    rng = Math.floor(Math.random() * (max - min + 1)) + min;

    if (rng >= 0 && rng <= 3) {
        return R;
    } else if(rng >=4 && rng <= 6) {
        return P;
    } else {
        return S;
    }
}