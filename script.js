let playerScore = 0;
let computerScore = 0;
let round = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let number = getRandomNumber(); 

    if (number === 1) {
    return "rock";
    } else if (number === 2) {
    return "paper";
    } else {
    return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (round>= 5) {
            console.log("GAME OVER");
            return;
        }
        round++;
        console.log("Round:", round);
        console.log("Player picked:", playerChoice);
        console.log("Computer picked:", computerChoice); 

        if (playerChoice === computerChoice) {
            console.log ("DRAW"); 
        }    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;    
            console.log ("WIN"); 
        }    else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore++;
            console.log ("WIN"); 
        }   else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
            console.log ("WIN"); 
        }
             else if (computerChoice === "rock" && playerChoice === "scissors") {
        computerScore++;
        console.log ("LOSE");
    }
        else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerScore++;
        console.log ("LOSE");
        }
        else if (computerChoice === "paper" && playerChoice === "rock") {
        computerScore++;
        console.log ("LOSE");
        }
         console.log("Player Score", playerScore);
         console.log("Computer score", computerScore);

         if (round === 5) {
            console.log("==== FINAL RESULT ====");
         if (playerScore > computerScore) {
            console.log("PLAYER WINS")
         } else if (playerScore < computerScore) {
            console.log("COMPUTER WINS")
         } else {
            console.log("TIE");
         }
         }   
         }

