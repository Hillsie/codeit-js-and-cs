function squareNumber(n) {

    let x = n;
    let answer = 0;
    while (x > 0) {
        answer += n;
        x -= 1;
    };
    return answer;
};
console.log(squareNumber(4));
console.log(squareNumber(16));
console.log(squareNumber(10));
