


let humanScore = 0; 
let compScore = 0;
let gameOver = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const userScore = document.getElementById("user");
const computerScore = document.getElementById("comp");
const winner = document.getElementById("winner");
const WIN_SCORE = 5;
const buttons = [rockBtn, paperBtn, scissorsBtn];
rockBtn.addEventListener("click", () => {
    getHumanChoice("rock");
});
paperBtn.addEventListener("click", () => getHumanChoice("paper"));
scissorsBtn.addEventListener("click", () => getHumanChoice("scissors"));

function choices(){
    return ["rock", "paper", "scissors"];
}

function getComputerChoice(){

    let opt = choices();
    let idx = Math.floor(Math.random() * opt.length);
    return opt[idx];
}

function getHumanChoice(buttonChoice){
    if(gameOver) return;
    let choice = (buttonChoice)
                .toLowerCase().trim();
    let opt = choices();
    if(!opt.includes(choice)){
        return;
    }
    let computer = getComputerChoice();

    decideWinner(choice, computer);
}

function decideWinner(human , computer){


    if(human === computer){

        console.log("It's a tie!");
    }else if(
        (human === "rock" && computer === "scissors") || 
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ){
        humanScore++;
    }
    else{
        compScore++;
    }
        userScore.textContent = `Your score:  ${humanScore}`;
        computerScore.textContent = `Computer's score: ${compScore}`;

    if (humanScore >= WIN_SCORE || compScore >= WIN_SCORE) {
        gameOver = true;
        buttons.forEach(b => b.disabled = true);

    if (humanScore > compScore) {
      winner.textContent = "You win!";
    } else {
      winner.textContent = "Computer wins!";
    }
  }   
}

