// Newton-Raphson applys to any polynomial
// Useful in finding the root of a number
// Following example is academic, however, Newton-Rapson is used to find square root of a number
// General appproximation algorithm to find roots of a polynomial in one variable
// Approximation to the root  is g - p(g)/p'(g)
// simple case cx^2 + k; first derivative 2x or given g for a root, a guess g - (g^2 - k) / 2g

// So lets day you wanted to find the square root of 24

function newtonRaphson(n) {
    console.log(`what's the square root of ${n}`);
    const EPSILON = 0.01;
    let numberOfGuesses = 0;
    let guessedNumber = n / 2;

    while (Math.abs((guessedNumber * guessedNumber) - n) >= EPSILON) {

        numberOfGuesses++;

        guessedNumber = guessedNumber - (((guessedNumber ** 2) - n) / (2 * guessedNumber));
        console.log(`${numberOfGuesses++}. Guessed Number: ${guessedNumber} `);
    }

    console.log(` ****** Found your square root in  ${numberOfGuesses++} turns. The closest n is ${guessedNumber} with rounding the n is ${guessedNumber.toFixed(0)}`);

    return guessedNumber;
};
// Couple of test cases
console.log(newtonRaphson(24));
console.log(newtonRaphson(500));
console.log(newtonRaphson(787));
console.log(newtonRaphson(44));
console.log(newtonRaphson(1000));