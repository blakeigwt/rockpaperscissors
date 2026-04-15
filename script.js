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
        console.log ("YOU ARE ALL THAT IS MAN!"); 
        }    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log ("YOUR PENIS IS BIG-TIME!"); 
        }   else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log ("DOG POLICE!"); 
        }
    else {
        console.log ("YOUR ASS GOT SACKED!!!");
    }
}
