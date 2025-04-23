let computerChoice = ""
let humanChoice = ""

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

let humanScore = 0
let computerScore = 0

function playGame(){
    
    const humanSelection = getHumanChoice();
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
    
}

for (let i = 0; i < 5; i++) {
    playGame()
}

if(humanScore > computerScore){
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - you WIN!`)
} else if (humanScore == computerScore){
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - its a DRAW!`)
} else {
    console.log(`your score: ${humanScore}, computer score: ${computerScore} - you LOSE!`)
}
