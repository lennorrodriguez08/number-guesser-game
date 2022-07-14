// SET MIN AND MAX NUMBER

const setMinNum = 1;
const setMaxNum = 10;
let guessLeft = 3;

// UI MIN AND MAX ELEMENTS
const minNum = document.querySelector('.min-num').textContent = setMinNum;
const maxNum = document.querySelector('.max-num').textContent = setMaxNum;

// GET WINNING NUMBER
const winningNum = Math.floor(Math.random() * (setMaxNum - setMinNum + 1) + setMinNum);

// SUBMIT BUTTON
const guessValue = document.querySelector('#guess-value');

// GAME CONTAINER ELEMENT
const game = document.querySelector('#game');

// PLAY AGAIN BUTTON
const playAgainBtn = document.querySelector('.play-again');

// GUESS INPUT FIELD
const guessInput = document.querySelector('#guess-input'); 

// MESSAGE
const message = document.querySelector('.message');

// GAME CONTAINER

game.addEventListener('mousedown', function(e) {

    if (e.target.value === 'Play Again') {
        window.location.reload();
    }

});

// FUNCTION FIRES WHEN SUBMIT BUTTON IS CLICKED

const checkGuessRange = () => {

    if (isNaN(guessInput.value) || guessInput.value < setMinNum || guessInput.value > setMaxNum) {
        message.textContent = `Please input a guess number between ${setMinNum} to ${setMaxNum}`;
        message.style.color = 'red';
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        
    }   // GUESS IS CORRECT
    else if (Number(guessInput.value) === winningNum) {
        theMessage(true, `${guessInput.value} is correct! You win!`);
        guessInput.disabled = true;

        // GUESS IS WRONG
    } else if (Number(guessInput.value) !== winningNum) {
        guessLeft -= 1;
        message.textContent = `${guessInput.value} is wrong! You have ${guessLeft} guess left`;
        message.style.color = 'red';
        guessInput.style.borderColor = 'red';
            
            // GAME OVER

            if (guessLeft === 0) {
                theMessage(false, `Game over. The correct numbers was ${winningNum}`);
                guessInput.disabled = true;
            }

            guessInput.value = '';
            
    }
    
}

// EVENT LISTENER FOR CLICKING SUBMIT BUTTON
guessValue.addEventListener('click', checkGuessRange);

const theMessage = (won, msg) => {

    let color;

    won === true ? color = 'green' : color = 'red';

    message.textContent = msg;
    
    message.style.color = color;
    guessInput.style.borderColor = color;
    guessValue.value = 'Play Again';
            
}