const somecolors = ['red', 'amber', 'blue', 'green'];

const newcolorArray = somecolors;

const makeacopy = somecolors.slice(); // Makes a copy
const clonedColors = new Object(somecolors); // Creating a new object, creates a reference to the original object;

newcolorArray.push('yellow');
// Template strings are a new JavaScript Feature. Really a great feature. 
console.log(`0. Note, still mutable. ${clonedColors}`);
console.log(`1. array.push() Somecolors: ${somecolors}  newcolorArray: ${newcolorArray}  makeacopy: ${makeacopy}`);
console.log(`Adds yellow to both arrays`)
console.log(`Also notice that const is not immutable? Why later`)

newcolorArray.shift(); // shifts item off the front of the array
console.log(`2. array.shift() somecolors: ${somecolors}  newcolorArray: ${newcolorArray} makeacopy: ${makeacopy}`);
newcolorArray.pop(); // pops item off the back of the array
console.log(`3. array.pop() somecolors: ${somecolors}  newcolorArray: ${newcolorArray}  makeacopy: ${makeacopy}`);
newcolorArray.shift(); //shifts the front element off the array
console.log(`4. array.shift() somecolors: ${somecolors}  newcolorArray: ${newcolorArray}  makeacopy: ${makeacopy}`);
console.log(`5. array.slice(1) ${newcolorArray.slice(1)}`); // does not modify the array. Makes a copy.
console.log(`6. array.slice(1) no effect - somecolors: ${somecolors}  newcolorArray: ${newcolorArray}  makeacopy: ${makeacopy}`);
console.log(`7. Note, still mutable. ${clonedColors}`);


console.log('-' * 3);
const line = ('-' * 4);
console.log(line);



