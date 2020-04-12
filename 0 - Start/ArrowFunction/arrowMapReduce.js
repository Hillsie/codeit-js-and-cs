//Basic arrow function using map
const mySpecialNumbers = [1, 2, 3, 4, 5, 6];
mySpecialNumbers.map((a, i) => (console.log(`value: ${a} index: ${i}`)));

// Creating a funcy function out of an arrow function
const myNewSpecialFunc = (myArray) => (myArray.map((a, i) => (console.log(`value: ${a + i} index: ${i}`))));

myNewSpecialFunc(mySpecialNumbers)

// using reduce add up the numbers
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

let sumFunc = mySpecialNumbers.reduce((accumilator, currentValue) => {
    return (accumilator + currentValue);

});


console.log(sumFunc);

// Or written the comventional callback way.


// Write filter example