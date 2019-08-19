const mySpecialNumbers = [1, 2, 3, 4, 5, 6];

//Basic arrow function
mySpecialNumbers.map((a, i) => (console.log(`value: ${a} index: ${i}`)));

// Creating a funcy function out of an arrow function
const myNewSpecialFunc = (myArray) => (myArray.map((a, i) => (console.log(`value: ${a + i} index: ${i}`))));

myNewSpecialFunc(mySpecialNumbers)

// looping an array
const fruit = ['Apples', 'Peaches', 'Oranges', 'Bananas'];

fruit.forEach(function (item, index, array) {
    console.log(item, index, array);
})

const position = fruit.indexOf('Bananas');
console.log(`The position of Bananas: ${position}`);

// old ways of accessing elements of an array  via looping demonstrates index of an array
// This should be included in looping section
for (let x = 0; x < mySpecialNumbers.length; x++) {
    console.log(mySpecialNumbers[x]);
}