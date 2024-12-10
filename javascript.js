function handleClick (event) {
    const buttonId = event.target.id;
    if (buttonId === "rockButton"){
        humanChoice = "rock";
    }
    else if (buttonId === "paperButton"){
        humanChoice = "paper";
    }
    else if (buttonId === "scissorsButton"){
        humanChoice = "scissors";
    }
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    
    function playRound(humanChoice, computerChoice){
        let resultMsg = "";
        if(humanChoice === computerChoice){
            resultMsg = "It is a tie! Play agan."
        }
        else if((humanChoice === "paper" & computerChoice === "rock") ||
               (humanChoice === "rock" & computerChoice === "scissors") ||
               (humanChoice === "scissors" & computerChoice === "paper"))
            {
                humanScore++;
                resultMsg = `You win! ${humanChoice} beat ${computerChoice}`;
                humanScoreTag.textContent = `Human Score: ${humanScore}`;
            }
        else{
                computerScore++;
                resultMsg = `You lose! ${computerChoice} beat ${humanChoice}`;
                compScoreTag.textContent = `Computer Score: ${computerScore}`;
            }
        if (humanScore >= 5){
            humanScoreTag.textContent = `HUMAN WINS!! RESTART GAME`;
            compScoreTag.textContent = ``;
        }
        else if (computerScore >= 5){
            compScoreTag.textContent = `COMP WINS!! restart game`;
            humanScoreTag.textContent = ``;
        }
        return resultMsg;
        
    } 

console.log(playRound(humanChoice, computerChoice));
console.log(`human score~${humanScore} and comp score~${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let gameMsg;

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const compScoreTag = document.getElementById('compScoreTag');
const humanScoreTag = document.getElementById('humanScoreTag');
    

rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorsButton.addEventListener('click', handleClick);
