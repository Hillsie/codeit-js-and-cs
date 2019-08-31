// Memoization is a way of making a program more efficient. The method uses information previously identified or calculated
// to improve program efficiency.

function fibMemoization(n, d) {
    if (n in d) {
        return d[n];
    } else {
        answer = fibMemoization(n - 1, d) + fibMemoization(n - 2, d);
        d[n] = answer;
        /*  console.log(d); */ // notice that the JavaScript Object, keeps growing with previously calculated fibonacci numbers.
        return answer;
    }
}

// A function that takes two parameters, the last one a callback function
function findFibonacciOf(n, callback) {
    let answer = 0;
    let memo = { 0: 1, 1: 2 } // initialise the two base cases;
    answer = callback(n, memo);
    return answer;
}



console.log(findFibonacciOf(5, fibMemoization));
// Recall in the previous version of fibonacci
console.log(findFibonacciOf(39, fibMemoization));
console.log(findFibonacciOf(100, fibMemoization));
console.log(findFibonacciOf(1000, fibMemoization)); // How about this!? Gives an answer.

