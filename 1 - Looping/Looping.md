## Section Objectives
In this section we're looking to get into more advanced looping patterns.
When you get to large data sets, some looping structures are computationally inefficient.

## Recursion

<details><summary>What is recursion?</summary>
<p>

#### It's a function that calls itself


</p>
</details>
<details><summary>As an exercies write a recursive function to multiply two numbers together using only the addtion (+) symbol.</summary>
<p>

#### Working examples see
`recursiveExample.js`
```JavaScript
// Recursive Function
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

// Arrow Function recursion 

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
```

</p>
</details>

## Free Online References and Resources
* Great Study material at Edx.org and many of these examples have been translated from Python: 
 https://www.edx.org/course/6-00-1x-introduction-to-computer-science-and-programming-using-python-3