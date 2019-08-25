// Exhaustive Enumeration AKA, Guess and Check
// This is a slower linear algorithm type O(n)
// This function is an example to find the cube root of a number. 
// Most of this repository can be  alorithm work is attributed to Prof Grimson MIT.
function cubeRoot(n) {
    let x = 0;
    let answer = 0;
    for (x; x < n; x++) {
        if (x ** 3 === n) {
            answer = x;
        }
    }
    return answer;
}
console.log(cubeRoot(27));
console.log(cubeRoot(64));
console.log(cubeRoot(216));
console.log(cubeRoot(512));
console.log(cubeRoot(560));// not a cube root
