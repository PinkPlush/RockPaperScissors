function startGame(playerSelection, computerSelection) {
    //set initial counter
    // userScore = 0; 
    // computerScore = 0;
    //get the inputs
    function getComputerChoice() {
        const elements = ["rock", "paper", "scissors"];
        return elements[Math.floor(Math.random()*elements.length)]; 
    }
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    //cases
        if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You won the round");
            // userScore +=1;
            // console.log(userScore);
            // console.log(computerScore);
        } 
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lost the round");
            // computerScore +=1;
            }
            else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lost the round");
                // computerScore +=1;
            }
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You won the round");
                // userScore +=1;
            }
            else if (playerSelection === "paper" && computerSelection  === "scissors") {
                console.log("You lost the round");
                // computerScore +=1;
            }
            else if (playerSelection === "paper" && computerSelection === "rock")   {
                console.log("You won the round");
                // userScore +=1;
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


function counter(){
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        
        console.log(`you chose ${playerSelection}`);
        console.log(`computer chose ${computerSelection}`);
    }
}


//get the ComputerChoice

//paper selection
function paper(computerChoice) {
    console.log("paper clicked");
    computerChoice = getComputerChoice(); 
    console.log(computerChoice);
    if (computerChoice == "rock") {
        console.log("won");
        return playerWon++;
    }
    else if (computerChoice == "paper") {
        console.log("draw");
    }
    else{
        console.log("lost");
        return computerWon++;
    }
    return true;
}
console.log(playerWon, computerWon);

//rock selection
function rock(computerChoice) {
    console.log("rock clicked");
    computerChoice = getComputerChoice(); 
    console.log(computerChoice);
    if (computerChoice == "rock") {
        console.log("draw");
    }
    else if (computerChoice == "scissors") {
        console.log("won");
    }
    else{
        console.log("lost")
    }
}
//scissors selection
function scissors(computerChoice) {
    console.log("scissors clicked");
    computerChoice = getComputerChoice(); 
    console.log(computerChoice);
    if (computerChoice == "rock") {
        console.log("lost");
    }
    else if (computerChoice == "scissors") {
        console.log("draw");
    }
    else{
        console.log("won")
    }
}
//initialize game
