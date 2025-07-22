

console.log("Hello");

let humanScore = 0; 
let compScore = 0;

const input = document.getElementById("choice");
input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        getHumanChoice();
    }
});


function choices(){
    return ["rock", "paper", "scissors"];
}

function getComputerChoice(){

    let opt = choices();
    let choice = Math.floor(Math.random() * opt.length);
    return opt[choice];
}

function getHumanChoice(){
    let choice = document.getElementById("choice").value;
    let opt = choices();
    if(!opt.includes(choice)){
        console.log("Enter a valid choice");
        return;
    }
    let computer = getComputerChoice();

    console.log("Your choice " + choice);
    console.log("Computers choice " + computer); 
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
            console.log("You Win!");
        }
        else{
            compScore++;
            console.log("You lose!");
        }
            console.log("Your score: " + humanScore);
            console.log("Computers score: " + compScore);
    
}

