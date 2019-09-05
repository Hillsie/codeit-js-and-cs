// Guess and check is essential quite similar to exhaustive enumeration
// Finding the cube root of a number 
const EPSILON = 0.001;
const INCREMENT = 0.01

function cuberoot(n) {
    let noOfGuesses = 0;
    let answer = 0;
    while (Math.abs(answer ** 3 - n) >= EPSILON) {
        answer += INCREMENT;
        noOfGuesses++;
        if (answer ** 3 > n) {
            break;
        }
    };
    console.log(noOfGuesses);
    return answer;
};

console.log(cuberoot(27));
console.log(cuberoot(29));