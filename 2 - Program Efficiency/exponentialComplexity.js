// Example of exponential complexity algorithm 
// Could shortcut and say that  when a double recursion is made, this an example of exponential complexity.
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return (fibonacci(n - 2) + fibonacci(n - 1));
    }
}


console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(39)); // takes a bit of time
// uncomment the next an run it. It's unlikely to finish is a hurry.
// Take at look at the next topic in the ProgramEfficiency.md on how to solve this problem. Hint: begins with m......js
/* console.log(fibonacci(100)); */
