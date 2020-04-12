/* Non Deterministic Finite State Automata NFS
I believe JavaScript uses this implementation, personal unconfirmed. The differenece between NFA and DFA is
the complexity at execution time and compile time.  NFA has linear O(n) execution time and can have O(n^c) at compile time.
*/

const inputString = "Learning regular expressions gives more soul to your JavaScript sole. Does it return sole or soul, why?";
const oppositeString = "Learning regular expressions gives more sole to your JavaScript soul. Does it return sole or soul, why?";
const regex = /sole|soul/;

let answer = regex.exec(inputString);
console.log(answer);
let answer2 = regex.exec(oppositeString);
console.log(answer2);