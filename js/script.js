let number = Math.floor((Math.random() * 100) + 1);

const guessNumber = document.getElementById('guess-number');
const answer = document.getElementById('answer');
const tryLuck = document.getElementById('try-luck');

const guesses = document.getElementById('guesses');
let guessesN = 0;

tryLuck.addEventListener('click', () => {
    guessesN += 1;
    guesses.textContent = guessesN;
    if (guessNumber.value == number) {
        answer.textContent = "Congrats. You guess the number right";
    }
    else if (guessNumber.value > number) {
        answer.textContent = "The number is less";
    }
    else if (guessNumber.value < number) {
        answer.textContent = "The number is greater";
    }
    if (guessNumber.value > 100) {
        answer.textContent = "Error. Number cannot be greater than 100";
    }
});