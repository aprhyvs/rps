let computerChoice = "";
let humanChoice = "";
const choice = document.getElementById("choice");
const humanScoreEl = document.getElementById("humanScore");
const computerScoreEl = document.getElementById("computerScore");
const resultEl = document.getElementById("result"); 

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
const endBtn = document.querySelectorAll("#rock, #paper, #scissors");

function disableBtn(){
    endBtn.forEach(btn => {
        btn.setAttribute("disabled", true)
    })
}

function playGame(humanChoice){
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice){
        if (humanSelection == "rock" && computerSelection == "rock" || humanSelection == "paper" && computerSelection == "paper" || humanSelection == "scissor" && computerSelection == "scissor"){
            resultEl.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, it's a DRAW.`
        } else if (humanSelection == "rock" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock"){
            resultEl.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, you WIN!`
            humanScore += 1
            humanScoreEl.textContent = `${humanScore}`
        } else if (humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissor" || humanSelection == "scissor" && computerSelection == "rock"){
            resultEl.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}, you LOSE!`
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
        
        endBtn.forEach(btn =>{
            btn.removeAttribute("disabled")
        })
    }
    
    playRound(humanSelection, computerSelection)

    if ((humanScore === 5 || computerScore === 5) && !document.querySelector("#playAgainBtn")){
        const restartBtn = document.createElement("button")
        const resultWrapperEl = document.querySelector("#result-wrapper")
        const endResultEl = document.querySelector("#endResult")
    
        restartBtn.textContent = "Play Again"
        restartBtn.setAttribute("id", "playAgainBtn")
    
        restartBtn.addEventListener("click", ()=>{
            resetGame()
        })
        
        if(humanScore === 5){
            endResultEl.textContent = "You win!, play again?"            
            disableBtn()
        } else if (computerScore === 5){
            endResultEl.textContent = "You lose!, play again?" 
            disableBtn()
        }

        resultWrapperEl.appendChild(restartBtn)
    }
}