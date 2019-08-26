## Section Objective

This section covers some useful algorithms. Some algorithms improve program efficiency. Think of these as clever ways to write code to get an answer sooner. They're based on logic and ground in math. Some alorithms ordering information into logical groupings so that information can be found sooner. 

<details><summary> Write a bisection search algorithm to find a guessed number between 0 and 1000 in less than 15 guesses?
No need to make it complex;
</summary>

```JavaScript
 function bisectionSearch(answer) {

    const EPSILON = 0.1; // Finds it with less accuracy, with fewer guesses
    /* const EPSILON = 0.00000001; */ // Finds it with more accuracy, but the tradeoff is the number of guesses increase;
    let high = 1000;
    let low = 0;
    let guessedNumber = 500; // 1. See below
    let counter = 1;

    // 2. See below
    while (Math.abs((guessedNumber - answer)) >= EPSILON) {
        console.log(guessedNumber - answer)

        // 3. See below
        if (guessedNumber > answer) {
            // The guess is higher than the answer
            high = guessedNumber;

        // 4. See below
        } else if (guessedNumber < answer) {
            // The guess is lower than the answer
            low = guessedNumber;
        }
        // 5. See below
        guessedNumber = ((high - low) / 2) + low;
        console.log(`${counter++}. Guessed Number: ${guessedNumber} `);

    };

    console.log(` ****** Found your number in  ${counter++} turns. The closest answer is ${guessedNumber} with rounding the answer is ${guessedNumber.toFixed(0)}`);

    return guessedNumber.toFixed(0);
};

console.log(bisectionSearch(323));
console.log(bisectionSearch(500));
console.log(bisectionSearch(787));

```
<p>
Bisection search is an algorithm of the O(log(n)) order of complexity. It's part of a group of divide and conquer algorithms.

Simplified way of recall the bisection search
1. Guess a midpoint 
2. Check each guess against Epsilon (the accuracy). The while loop does this.
3. If the midpoint is too high, this becomes the new high point
4. Else if the midpoint is too low, this becomes the low midpoint
5. Make a new guess by adding subtracting the high from the low, dividing by 2 and adding this to the low.
</p>

* Read more https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm
</details>