let playerScore = 0;
let computerScore = 0;

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
    console.log("Snapping Turtle picked:", playerChoice);
    console.log("JD Vance picked:", computerChoice); 
    
    if (playerChoice === computerChoice) {
        console.log ("DRAW, FUCKO!"); 
        }    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;    
        console.log ("YOU ARE ALL THAT IS MAN!"); 
        }    else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore++;
            console.log ("YOUR PENIS IS BIG-TIME!"); 
        }   else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
            console.log ("DOG POLICE!"); 
        }
             else if (computerChoice === "rock" && playerChoice === "scissors") {
        computerScore++;
        console.log ("YOUR ASS GOT SACKED!!!");
    }
        else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerScore++;
        console.log ("YOUR ASS GOT SACKED!!!");
        }
        else if (computerChoice === "paper" && playerChoice === "rock") {
        computerScore++;
        console.log ("YOUR ASS GOT SACKED!!!");

}
         console.log("Snapping Turtle Score", playerScore);
         console.log("JD Vance score", computerScore);
}
