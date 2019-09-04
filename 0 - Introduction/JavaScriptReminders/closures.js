// Think of closures as JS remembering a variable
// example

function rememberme(n) {
    function multiply(y) {
        return y * n;
    }
    return multiply;
}

const multiplyby10 = rememberme(10);

console.log(`Themultiplyby10(5)`);