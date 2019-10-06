

const somecolors = ['red', 'amber', 'blue', 'green'];

const newcolorArray = somecolors;

newcolorArray[0] = 'yellow';
// Template strings are a new JavaScript Feature. Really a great feature. 
console.log(` somecolors: ${somecolors}  newcolorArray: ${newcolorArray}`);
console.log(` Why has the red been replace with 'Yellow' ?. Mutable means it references the same space in memory`)