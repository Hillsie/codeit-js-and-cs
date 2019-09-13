/* Non Deterministic Finite State Automata NFS
I believe JavaScript uses this implementation, personal unconfirmed. The differenece between NFA and DFA is
the complexity at execution time and compile time.  NFA has linear O(n) execution time and can have O(n^c) at compile time.
*/
/* (http:\/\/|https:\/\/)([\w]+\.[\w]+\.[\w]+) */

const inputString = "Learning xxx expressions gives more xxxxx with your JavaScript xxxxxx. Does it return x or xxxxxxxx ?";
const regex = /(x){4,5}/g;

// const regex = /(xxxxxxx)+/g;  // Regex is literal. Match if you get 7. So matching seven x's in a row finds the last one
// Using the g for global tells it to go through the entire string and find the one that does the best match.

//const regex = /(xxxxxxx)*/g;  // Don't match unless exactly 7. Give me zero unless there is exactly 7.

let answer = regex.exec(inputString);
console.log(answer);