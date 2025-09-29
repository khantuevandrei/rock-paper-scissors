// Create function getUserChoice to prompt for a choice and return the value
function getUserChoice() {
    // Ask user for a choice
    let choice = prompt('Enter your choice', '');
    // Make it case insensitive
    choice = choice.toLocaleLowerCase();
    // Check for correct grammar, if choice is legal - show choice, if not legal - 
    // end the interaction
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        console.log(`You choose ${choice}`);
        return choice;
    } else {
        console.log('Not a legal choice, try again');
        return;
    }
}

// Create function getComputerChoice to get a random number between 1 & 3 
// that indicates one of the 3 choices and return the value
function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    console.log(`Computer chooses ${choice}`)
    return choice;
}

// Create a variable for a number of rounds
let roundsPlayed = 0;

// Create variable to hold number of wins for computer
let computerWins = 0;

// Create variable to hold number of wins for user
let userWins = 0;

// Create a function to calculate the result of the round & update the score
function calculateResult(choice1, choice2) {
    if (choice1 === 'rock' && choice2 === 'paper') {
        console.log('You lose round');
        computerWins++;
    } else if (choice1 === 'rock' && choice2 === 'scissors') {
        console.log('You win round');
        userWins++;
    } else if (choice1 === 'paper' && choice2 === 'rock') {
        console.log('You win round');
        userWins++;
    } else if (choice1 === 'paper' && choice2 === 'scissors') {
        console.log('You lose round');
        computerWins++;
    } else if (choice1 === 'scissors' && choice2 === 'rock') {
        console.log('You lose round');
        computerWins++;
    } else if (choice1 === 'scissors' && choice2 === 'paper') {
        console.log('You win round');
        userWins++;
    } else {
        console.log('Draw');
    }
    
}

// Create a function to play a single round after getting the choices
function playRound(userChoice, computerChoice) {
    calculateResult(userChoice, computerChoice);
    // Announce current score
    console.log(`User ${userWins} - ${computerWins} Computer`);
}


// Create a function to play a game of 5 rounds & increments the number of rounds after
// each round
function playGame() {
    for (let i = roundsPlayed; i < 5; i++) {
        console.log(`Round ${roundsPlayed + 1}`);
        playRound(getUserChoice(), getComputerChoice());
        roundsPlayed++;
    }
    console.log(`Game is over`);
}