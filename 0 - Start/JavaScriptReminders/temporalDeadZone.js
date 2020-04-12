// This is sometimes asked in interview questions... what is the temporal dead zone.
// It's when you forget to declare a variable and you think your brain has gone dead! haha!
// Think of this as the variable has not been declared
// in the sequence that the code needs to use it.
// This statement is a half truth: Code is executed in a sequence from top to bottom
// To fully understand how the code runs we need to dive deep into the JavaScript event loop.
// Not for ...

// This fails

function outOfOrder(n) {
    return n ** 2; // Square the number
};
console.log(outOfOrder(numberdeclaredTooLate));
// This variable is declared too late for the function to 
// access the variable.
let numberdeclaredTooLate = 2; // change this to a var and it executes.

