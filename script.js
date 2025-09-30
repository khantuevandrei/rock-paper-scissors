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
    resultsContainer.textContent = `User ${userWins} - ${computerWins} Computer.`;
    roundsPlayed++;
    if (roundsPlayed === 5) {
        resultsContainer.textContent += ' Game is over.'
    }
}



//DOM manipulations

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()))

const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()))

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()))

const container = document.querySelector('#container');

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

const resultsContainer = document.createElement('div');

container.appendChild(resultsContainer);