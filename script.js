let computerChoice = ""
let humanChoice = ""

/*
function getHumanChoice(){
    humanChoice = prompt("Make your move!") //lets make this equal to the human choice.
    
    if (humanChoice == "rock"){
        return humanChoice = "rock"
    } else if(humanChoice == "paper"){
        return humanChoice = "paper"
    } else if(humanChoice == "scissor"){
        return humanChoice = "scissor"
    } else {
        console.log("You didn't choose any of the three!")
    }
}*/

let choice = document.querySelector("#choice");

choice.addEventListener("click", (event) => {
    let option = event.target;

    switch(option.id){
        case 'rock':
            alert('you chose ROCK');
            playGame("rock");
            break;
        case 'paper':
            alert('you chose PAPER');
            playGame("paper");
            break;
        case 'scissors':
            alert('you chose SCISSOR');
            playGame("scissor");
            break;
    }
});

function getComputerChoice(){
    let randomRPS = Math.floor(Math.random() * 3)
    if (randomRPS == 0){
        console.log(randomRPS)
        return computerChoice = "rock"
    } else if (randomRPS == 1) {
        console.log(randomRPS)
        return computerChoice = "paper"
    } else if (randomRPS == 2) {
        console.log(randomRPS)
        return computerChoice = "scissor"
    }
}

let humanScore = 0
let computerScore = 0

function playGame(humanChoice){
    
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
    
    function playRound(humanChoice, computerChoice){
        if (humanSelection == "rock" && computerSelection == "rock" || humanSelection == "paper" && computerSelection == "paper" || humanSelection == "scissor" && computerSelection == "scissor"){
            console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, it's a DRAW.`)
        } else if (humanSelection == "rock" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock"){
            console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, you WIN!`)
            humanScore += 1
        } else if (humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "rock"){
            console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, you LOSE!`)
            computerScore += 1
        }
    }

    if(humanScore == 5){
        alert(`your score: ${humanScore}, computer score: ${computerScore} - you WIN!`)
        alert(`game resets. lets go through another set!`)
        humanScore = 0
        computerScore = 0        
    } else if (computerScore == 5){
        alert(`your score: ${humanScore}, computer score: ${computerScore} - you LOSE!`)
        alert(`game resets. lets go through another set!`)
        humanScore = 0
        computerScore = 0        
    }    
}

/*
document.querySelector("#rock").addEventListener("click", () =>{
    alert(`you chose ROCK`)
});
*/

/*
for (let i = 0; i < 5; i++) {
    playGame()
}*/

/*
if(humanScore > computerScore){
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - you WIN!`)
} else if (humanScore == computerScore){
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - its a DRAW!`)
} else {
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - you LOSE!`)
}
*/