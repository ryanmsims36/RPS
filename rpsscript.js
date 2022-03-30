let ps = 0;
let cs = 0; 

function computerPlay() {
let possiblechoices = ['rock', 'paper', 'scissors']
return possiblechoices[Math.floor(Math.random() * possiblechoices.length)];
}


function playRound(playerchoicelns,computerSelection) {


    if (playerchoicelns == 'rock'){
        switch(computerSelection) {
            case 'rock':
                    document.getElementById("ann").textContent = "It's a tie! Both chose rock!";
                    break;
                    
            case 'paper':
                    cs++;
                    document.getElementById("CS").textContent = ["Computer Score: " + cs.toString()];
                    document.getElementById("ann").textContent = "You lost! Paper beats rock!";
                    break;
                    
            case 'scissors':
                    ps++;
                    document.getElementById("PS").textContent = ["Player Score: " + ps.toString()];
                    document.getElementById("ann").textContent = "You win! Rock beats scissors!";
                    break;
                    

        }
    }

    if (playerchoicelns == 'paper'){
        switch(computerSelection) {
            case 'paper':
                    document.getElementById("ann").textContent = "It's a tie! Both chose paper!";
                    break;
                    
            case 'scissors':
                cs++;
                document.getElementById("CS").textContent = ["Computer Score: " + cs.toString()];
                    document.getElementById("ann").textContent = "You lost! Scissors beats paper!";
                    break;
                    
            case 'rock':
                ps++;
                document.getElementById("PS").textContent = ["Player Score: " + ps.toString()];
                    document.getElementById("ann").textContent =  "You win! Paper beats rock!";
                    break;
                    

        }
    }

    if (playerchoicelns == 'scissors'){
        switch(computerSelection) {
            case 'scissors':
                    document.getElementById("ann").textContent =  "It's a tie! Both chose scissors!";
                    break;
                    
            case 'rock':
                    cs++;
                    document.getElementById("CS").textContent = ["Computer Score: " + cs.toString()];
                    document.getElementById("ann").textContent = "You lost! Rock beats scissors!";
                    break;
                    
            case 'paper':
                ps++;
                document.getElementById("PS").textContent = ["Player Score: " + ps.toString()];
                document.getElementById("ann").textContent =  "You win! Scissors beats paper!";
                break;
                    

        }
    }

if (ps == 5)  {
        ps = 0;
        cs = 0;
        document.getElementById("PS").textContent = ["Player Score: " + ps.toString()];
        document.getElementById("CS").textContent = ["Computer Score: " + cs.toString()];
        return document.getElementById("ann").textContent = "You Won the Game!";
}
if (cs == 5) {
        ps = 0;
        cs = 0;
        document.getElementById("PS").textContent = ["Player Score: " + ps.toString()];
        document.getElementById("CS").textContent = ["Computer Score: " + cs.toString()];
        return document.getElementById("ann").textContent = "You Lost the Game!";
}
else {
        return;
}
}

function game() {

    //for(let i = 0; i < 5; i++){
    //    let playerchoice = prompt("Enter either Rock, Paper, or Scissors");
    //    playerchoicel = playerchoice.toLowerCase();
    //    playerchoicelns = playerchoicel.replace(/\s+/g, '');
    //    const computerSelection = computerPlay();
     //   console.log(playRound(playerchoicelns,computerSelection));
    //}


}

const btnr = document.querySelector('#btnr');
btnr.addEventListener('click', () => {
playRound("rock",computerPlay());
});

const btnp = document.querySelector('#btnp');
btnp.addEventListener('click', () => {
playRound("paper",computerPlay());
});

const btns = document.querySelector('#btns');
btns.addEventListener('click', () => {
playRound("scissors",computerPlay());
});


game()