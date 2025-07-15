let computerChoice = ""
let humanChoice = ""
const choice = document.querySelector("#choice");
 
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
        return "rock"
    } else if (randomRPS == 1) {
        console.log(randomRPS)
        return "paper"
    } else if (randomRPS == 2) {
        console.log(randomRPS)
        return "scissor"
    }
}

let humanScore = 0
let computerScore = 0

function playGame(humanChoice){
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    const humanScoreEl = document.querySelector("#humanScore")
    const computerScoreEl = document.querySelector("#computerScore")

    function playRound(humanChoice, computerChoice){
        if (humanSelection == "rock" && computerSelection == "rock" || humanSelection == "paper" && computerSelection == "paper" || humanSelection == "scissor" && computerSelection == "scissor"){
            document.querySelector("#result").textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, it's a DRAW.`
        } else if (humanSelection == "rock" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock"){
            document.querySelector("#result").textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, you WIN!`
            humanScore += 1
            humanScoreEl.textContent = `${humanScore}`
        } else if (humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "rock"){
            document.querySelector("#result").textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, you LOSE!`
            computerScore += 1
            computerScoreEl.textContent = `${computerScore}`
        }
    }

    function resetGame(){
        humanScore = 0
        computerScore = 0
        humanScoreEl.textContent = "0"
        computerScoreEl.textContent = "0"            
        
        const playAgainBtn = document.querySelector("#playAgainBtn")
        if (playAgainBtn){
            playAgainBtn.remove()
        }

        document.querySelector("#result").textContent = "";
        document.querySelector("#endResult").textContent = "";
    }
    
    playRound(humanSelection, computerSelection)

    if ((humanScore === 5 || computerScore === 5) && !document.querySelector("#playAgainBtn")){
        const restartBtn = document.createElement("button")
        const resultWrapperEl = document.querySelector("#result-wrapper")
        restartBtn.textContent = "Play Again"
        restartBtn.setAttribute("id", "playAgainBtn")
    
        restartBtn.addEventListener("click", ()=>{
            resetGame()
        })
        
        if(humanScore === 5){
            document.querySelector("#endResult").textContent = "You win!, play again?"
        } else if (computerScore === 5){
            document.querySelector('#endResult').textContent = "You lose!, play again?" 
        }

        resultWrapperEl.appendChild(restartBtn)
    }
}