//get the computer choice
function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]; 
}


function round(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, Scissors shoot");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    console.log(`you chose ${playerSelection}`);
    console.log(`computer chose ${computerSelection}`);

    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won!");
     } 
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost!");
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("You lost!");
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You won!");
        }
        else if (playerSelection === "paper" && computerSelection  === "scissors") {
            console.log("You lost!");
        }
        else if (playerSelection === "paper" && computerSelection === "rock")   {
            console.log("You won!");
        }
        else {
            console.log ("sasati");
        }
}

round();