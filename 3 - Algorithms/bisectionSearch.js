// Basic functionality of a bisection search algorithm
// This is an academic example to demonstrate bisection search
// Let the program try guess a number based on whether the number is high or low
// Write an alorithm that can find the position


function bisectionSearch(answer) {

    const EPSILON = 0.1; // Finds it with less accuracy, with fewer guesses
    /* const EPSILON = 0.00000001; */ // Finds it with more accuracy, but the tradeoff is the number of guesses increase;
    let high = 1000;
    let low = 0;
    let guessedNumber = 500;
    let counter = 1;

    while (Math.abs((guessedNumber - answer)) >= EPSILON) {
        console.log(guessedNumber - answer)

        if (guessedNumber > answer) {
            // The guess is higher than the answer
            high = guessedNumber;


        } else if (guessedNumber < answer) {
            // The guess is lower than the answer
            low = guessedNumber;
        }
        guessedNumber = ((high - low) / 2) + low;
        console.log(`${counter++}. Guessed Number: ${guessedNumber} `);

    };

    console.log(` ****** Found your number in  ${counter++} turns. The closest answer is ${guessedNumber} with rounding the answer is ${guessedNumber.toFixed(0)}`);

    return guessedNumber.toFixed(0);
};

console.log(bisectionSearch(323));
console.log(bisectionSearch(500));
console.log(bisectionSearch(787));