// Write a function to multiply two numbers using only the addition (+) symbol
// Doing this with a while loop would look like this.

function multiply(a, b) {
    let result = 0;
    while (b > 0) {
        result += a;
        b -= 1;
    };
    return result;
};
console.log(`While Looping: ${multiply(7, 9)}`);
console.log(`While Looping: ${multiply(6, 5)}`);
console.log(`While Looping: ${multiply(4, 8)}`);

//Recursive Function
function recursive_mult(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a + recursive_mult(a, b - 1);
    }
};

console.log(`Recusive function: ${recursive_mult(7, 9)}`);
console.log(`Recusive function: ${recursive_mult(6, 5)}`);
console.log(`Recusive function: ${recursive_mult(4, 8)}`);

// Simple Arrow Function recursion 

let recursive = (a, b) => {
    if (b === 1) {
        return a;
    } else {
        return a + recursive(a, b - 1);
    }
};

console.log(`Arrow notation recursion: ${recursive(7, 9)}`);
console.log(`Arrow notation recursion: ${recursive(6, 5)}`);
console.log(`Arrow notation recursion: ${recursive(4, 8)}`);


// WIP Factorial
/* function factorial (a){
    if
} */