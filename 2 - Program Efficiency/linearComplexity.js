// factorial of a number with for loop
function factor_iter(n) {
    let prod = 1;
    // for loop (start; run while; decrement)
    for (let x = n; x > 1; x -= 1) {
        prod *= x;
    }
    return prod;
}

console.log(factor_iter(4));
console.log(factor_iter(6));
console.log(factor_iter(12));
console.log(factor_iter(170));
console.log(factor_iter(171)); // Computer says Infinity
/* console.log(factor_iter(17100000000121)); // Infinite loop */

function recursive_fac(n) {
    // assume n >= 0;
    if (n <= 1) {
        return 1;
    } else {
        return n * recursive_fac(n - 1);
    }
}

console.log(recursive_fac(4));
console.log(recursive_fac(6));
console.log(recursive_fac(12));
console.log(recursive_fac(170));
console.log(recursive_fac(171)); // Computer says Infinity
/* console.log(recursive_fac(17100000000121)); // Maximum call stack size exceeded */