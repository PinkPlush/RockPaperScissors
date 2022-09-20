const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let tries = 5;
let userScore = 0;
let computerScore = 0;
const user = document.getElementById('user-score');
const computer = document.getElementById('computer-score');
const scoreText = document.getElementById('score-text');


function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]; 
}

function startGame(userChoice, computerChoice) {

    console.log(userChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    
    //cases
    if (userChoice === "scissors" && computerChoice === "paper") {
        win();
    } 
    else if (userChoice === "scissors" && computerChoice === "rock") {
        lost()
        }
        else if (userChoice === "rock" && computerChoice === "paper") {
            lost()
        }
        else if (userChoice === "rock" && computerChoice === "scissors") {
            win()
        }
        else if (userChoice === "paper" && computerChoice  === "scissors") {
            lost()
        }
        else if (userChoice === "paper" && computerChoice === "rock")   {
            win()
        }
        else {
            draw();
        }
}

function main() {
    rock.addEventListener('click', function(e) {
        let rockSound = document.getElementById('rck');
        rockSound.play();
        startGame("rock");
    });
    paper.addEventListener('click', function(e) {
        let paperSound = document.getElementById('ppr');
        paperSound.play();
        startGame("paper");
    });
    scissors.addEventListener('click', function(e) {
        let scissorsSound = document.getElementById("scs")
        scissorsSound.play();
        startGame("scissors");
    });
}
main();
function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]; 
}
getComputerChoice();


function win() {
    userScore++
    user.innerHTML = userScore;
    scoreText.innerHTML = "You won the round!";
    compare();
}
function lost() {
    computerScore++
    computer.innerHTML = computerScore;
    compare();
    scoreText.innerHTML = "You lost the round!";
}
function draw() {
    scoreText.innerHTML = "It's a draw, bro"
}

function compare() {
 for (let i = 0; i  > tries; i++){
    if (userScore > computerScore) {
        scoreText.innerHTML = "You won the game, congrats";
    }
    else if (computerScore > userScore) {
        scoreText.innerHTML = "You lost the game, what a pitty";
    }
    
}
    if (i > tries){
        computerScore = 0;
        userScore = 0;
        computer.innerHTML = computerScore;
        user.innerHTML = userScore;
    }
}


