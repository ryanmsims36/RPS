function computerPlay() {
let possiblechoices = ['rock', 'paper', 'scissors']
return possiblechoices[Math.floor(Math.random() * possiblechoices.length)];
}


function playRound(playerchoicelns,computerSelection) {
    if (playerchoicelns == 'rock'){
        switch(computerSelection) {
            case 'rock':
                    return "It's a tie! Both chose rock!";
                    break;
            case 'paper':
                    return "You lost! Paper beats rock!";
                    break;
            case 'scissors':
                    return "You win! Rock beats scissors!";
                    break;

        }
    }

    if (playerchoicelns == 'paper'){
        switch(computerSelection) {
            case 'paper':
                    return "It's a tie! Both chose paper!";
                    break;
            case 'scissors':
                    return "You lost! Scissors beats paper!";
                    break;
            case 'rock':
                    return "You win! Paper beats rock!";
                    break;

        }
    }

    if (playerchoicelns == 'scissors'){
        switch(computerSelection) {
            case 'scissors':
                    return "It's a tie! Both chose scissors!";
                    break;
            case 'rock':
                    return "You lost! Rock beats scissors!";
                    break;
            case 'paper':
                    return "You win! Scissors beats paper!";
                    break;

        }
    }
}

function game() {

    for(let i = 0; i < 5; i++){
        let playerchoice = prompt("Enter either Rock, Paper, or Scissors");
        playerchoicel = playerchoice.toLowerCase();
        playerchoicelns = playerchoicel.replace(/\s+/g, '');
        const computerSelection = computerPlay();
        console.log(playRound(playerchoicelns,computerSelection));
    }


}

game()