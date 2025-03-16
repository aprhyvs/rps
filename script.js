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