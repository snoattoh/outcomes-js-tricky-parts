function guessingGame(guess) {
    const guessTarget = Math.floor(Math.random() * 100);
    let numOfGuesses = 0;
    let gaming = true;
    return function guessCheck(guess){
        if(gaming){
            numOfGuesses++;
            if(guess === guessTarget){
                gaming = false;
                return `You win! You found ${guessTarget} in ${numOfGuesses} guesses.`;
            }else if(guess > guessTarget){
                return `${guess} is too high!`;
            }else{
                return `${guess} is too low!`;
            }
        }else{
            return `The game is over, you already won!`
        }
    }

}

module.exports = { guessingGame };
