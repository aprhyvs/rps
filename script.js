let rpsCPU = ""

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
