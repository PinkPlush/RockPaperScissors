//get the computer choice
function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]; 
}

function startGame(playerSelection, computerSelection){
    console.log("The game started");
    const rounds = 5;
    let userScore = 0; 
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        playerSelection = prompt("Rock, Paper, Scissors shoot");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        computerSelection = computerSelection.toLowerCase();
        console.log(`you chose ${playerSelection}`);
        console.log(`computer chose ${computerSelection}`);
        
    //cases
        if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You won the round");
            userScore +=1;
        } 
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lost the round");
            computerScore +=1;
            }
            else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lost the round");
                computerScore +=1;
            }
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You won the round");
                userScore +=1;
            }
            else if (playerSelection === "paper" && computerSelection  === "scissors") {
                console.log("You lost the round");
                computerScore +=1;
            }
            else if (playerSelection === "paper" && computerSelection === "rock")   {
                console.log("You won the round");
                userScore +=1;
            }
            else {
                console.log ("Draw");
            }
        }
        if (computerScore > userScore) {
            console.log(`Computer won \n The score is ${userScore} : ${computerScore} `)
        }
        else if (computerScore < userScore) {
            console.log(`Computer lost \n The score is ${userScore} : ${computerScore} `)
        }
        else {
            console.log(`Nobody lost`);
        }
}
startGame();