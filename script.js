let computerChoice = ""
let humanChoice = ""
let humanScore = 0
let computerScore = 0

function getHumanChoice(){
    humanChoice = prompt("Make your move!")
    
    if (humanChoice == "rock"){
        return humanChoice = "rock"
    } else if(humanChoice == "paper"){
        return humanChoice = "paper"
    } else if(humanChoice == "scissor"){
        return humanChoice = "scissor"
    } else {
        console.log("You didn't choose any of the three!")
    }
}

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    if (humanSelection == "rock" && computerSelection == "rock" || humanSelection == "paper" && computerSelection == "paper" || humanSelection == "scissor" && computerSelection == "scissor"){
        console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, it's a DRAW.`)
    } else if (humanSelection == "rock" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock"){
        console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, you WIN!`)
    } else if (humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "rock"){
        console.log(`You chose ${humanSelection}, computer chose ${computerSelection}, you LOSE!`)
    }
}

playRound(humanSelection, computerSelection)


/*
if (choice === "rock"){
    if (rpsCPU === "rock"){
        console.log("You both chose rock, its a draw.");
    } else if (rpsCPU === "scissor"){
        console.log("You chose rock, computer chose scissor, you win!");
    } else if (rpsCPU === "paper"){
        console.log("You chose rock, computer chose paper, you lose!");
    }
} else if (choice === "scissor"){
    if (rpsCPU === "scissor"){
        console.log("You both chose scissor, its a draw.");
    } else if (rpsCPU === "paper"){
        console.log("You chose scissor, computer chose paper, you win!");
    } else if (rpsCPU === "rock"){
        console.log("You chose scissor, computer chose rock, you lose!");
    }
} else if (choice === "paper"){
    if (rpsCPU === "paper"){
        console.log("You both chose paper, its a draw.");
    } else if (rpsCPU === "rock"){
        console.log("You chose paper, computer chose rock, you win!");
    } else if (rpsCPU === "scissor"){
        console.log("You chose paper, computer chose scissor, you lose!");
    }
}*/