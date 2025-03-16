let rpsCPU = ""
let choice = ""

function getHumanChoice(){
    choice = prompt("Make your move!")
    
    if (choice == "rock"){
        choice = "rock"
    } else if(choice == "paper"){
        choice = "paper"
    } else if(choice == "scissor"){
        choice = "scissor"
    } else {
        console.log("You didn't choose any of the three!")
    }
}

getHumanChoice()
console.log(`You have chosen ${choice}`)

function computerChoice(){
    let randomRPS = Math.floor(Math.random() * 3)
    if (randomRPS == 0){
        console.log(randomRPS)
        rpsCPU = "rock"
    } else if (randomRPS == 1) {
        console.log(randomRPS)
        rpsCPU = "paper"
    } else if (randomRPS == 2) {
        console.log(randomRPS)
        rpsCPU = "scissor"
    }
}

computerChoice()
console.log(`The computer has chosen ${rpsCPU}`)

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
}