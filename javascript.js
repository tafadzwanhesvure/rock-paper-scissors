let humanScore = 0;
let computerScore = 0;
let humanChoice;
let gameMsg;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    humanChoice = window.prompt("Please select a value either rock paper or scrissors", "paper");
    return humanChoice;
}
humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playGame(){
    function playRound(humanChoice, computerChoice){
        let resultMsg = "";
        if(humanChoice === computerChoice){
            resultMsg = "It is a tie! Play agan."
        }
        else if((humanChoice.toLowerCase() === "paper" & computerChoice === "rock") ||
               (humanChoice.toLowerCase() === "rock" & computerChoice === "scissors") ||
               (humanChoice.toLowerCase() === "scissors" & computerChoice === "paper"))
            {
                humanScore++;
                resultMsg = `You win! ${humanChoice} beat ${computerChoice}`;
            }
        else{
                computerScore++;
                resultMsg = `You lose! ${computerChoice} beat ${humanChoice}`;
            }
        return{
            resultMsg: resultMsg,
            humanScore: humanScore,
            computerScore: computerScore
        };    
    }
    for (let i =0; i < 4; i++){
        console.log(playRound(humanChoice, computerChoice));
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
    }
    if (humanScore > computerScore){
        gameMsg = `CONGRATULATIONS!!!!YOU WIN GAME..`;
    }
    else{
        gameMsg = `You lose....play new game`;
    }
    return gameMsg;
}
console.log(playGame());