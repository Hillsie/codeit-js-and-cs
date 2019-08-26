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
