const somecolors = ['red', 'amber', 'blue', 'green'];

const newcolorArray = somecolors;

const makeacopy = somecolors.slice();

newcolorArray.push('yellow');
// Template strings are a new JavaScript Feature. Really a great feature. 
console.log(`1.Somecolors: ${somecolors}  newcolorArray: ${newcolorArray}`);
console.log(`Adds yellow to both arrays`)
console.log(`Also notice that const is not immutable? Why later`)

somecolors.shift(); // shifts item off the front of the array
console.log(`2.somecolors: ${somecolors}  newcolorArray: ${newcolorArray}`);
somecolors.pop(); // pops item off the back of the array
console.log(`3.somecolors: ${somecolors}  newcolorArray: ${newcolorArray}`);
somecolors.slice(2); //
console.log(`4.somecolors: ${somecolors}  newcolorArray: ${newcolorArray}`);



