// Memoization is a way of making a program more efficient. The method uses information previously identified or calculated
// to improve program efficiency.

function fibMemoization(n, d) {
    if (n in d) {
        return d[n];
    } else {
        answer = fibMemoization(n - 1, d) + fibMemoization(n - 2, d);
        d[n] = answer;
        /*  console.log(d); */ // notice that the JavaScript Object, keeps growing with previously caluculated fibonacci calculations.
        return answer;
    }
}

// A function that takes two parameters, the last one a callback function
function speakOrders(n, callback) {
    let answer = 0;
    let memo = { 0: 1, 1: 2 } // initialise the two base cases;
    answer = callback(n, memo);
    return answer;
}



console.log(speakOrders(5, fibMemoization));
// Recall in the previous version of fibonacci
console.log(speakOrders(39, fibMemoization));
console.log(speakOrders(100, fibMemoization));
console.log(speakOrders(1000, fibMemoization)); // How about this!? Gives an answer.

