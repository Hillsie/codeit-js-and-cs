## JavaScript  - Some more stuff to grasp


<details><summary>Give and example of how var can leak out of a scope?</summary>
<p>

####  FYI, Beanie is my dog
```JavaScript
    const BEANIES_BYTE = 10;
    let beanieYrs = 9;
    var beanies_byte = 10;
    if (beanieYrs < 10){
      const BEANIES_BYTE = 15;
      var beanies_byte = 15;
      console.log(`let BEANIES_BYTE is ${BEANIES_BYTE} and var beanies_byte is ${beanies_byte}`);
    }; 
   console.log(`let BEANIES_BYTE is ${BEANIES_BYTE} and var beanies_byte is ${beanies_byte}`);
    
```
Notice, that outside of the block, Beanie's byte stays at 15 as the inner var declaration changes the value of the outer var value.

</p>
</details>

<details><summary>What's a literal?</summary>
<p>

#### literals are exact values in a program
```JavaScript
console.log("hello world!");
console.log(7);
```
A string or number written directly into a program. These literals have not been assigned to a variable.
</p>
</details>

<details><summary>Name the seven JavaScript Primitive types? What does the words "Primitive" mean? Name a characteristic of a primitive?</summary>
<p>

### The seven:
* number
* string
* boolean
* null
* undefined
* symbol
* bigint


> Is not an object and has no methods. Primitive means its represented at the lowest level of the language. All primitives are immutable. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

> Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values. 

> All primitives are immutable

- [Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

</p>
</details>



<details><summary>Name Six Built in JavaScript Object Types?</summary>
<p>

* Array
* Date
* RegExp
* Map and WeakMap
* Set and WeakSet
* Function

There are more. However, they do not appear to be often used. Personally, haven't seen them too often in GitHub Projects.

In JavaScritpt only objects and arrays are mutable

 > In computer science, an object is a value in memory which is possibly referenced by an identifier.
  - Mozilla
</p>
</details>

<details><summary>Explain Immutability? Why is immutablility an important concept? </summary>
<p>

The Immutability describes how the primitives, variables and objects behave in the memory. Immutable data is not changed in memory, only a new reference to a new memory location is provided.

Objects and Arrays are mutable. This data in the memory is the same place, even if it appears to be assigned to different variables.

JavaScript primitives are immutable. This means that if a new value is created, it exists in a new memory location, and the original value left in place. It would be garbage collected at a point in time if not assigned to a reference. 

```JavaScript
let aString = 'immutable string';
aString = 'New immutable string';
// These are two different memory locations
```
</p>
</details>

## JavaScript  - Arrays

<details><summary> Write code to demonstrate why arrays are mutable? Explain why `mutableArraysExample3.js` does not follow the mutable rule?</summary>
<p>

 See
* Examples in mutableArraysExample1.js
* Examples in mutableArraysExample2.js
* Examples in mutableArraysExample3.js
</p>
</details>

<details><summary> Name 5 methods for manipulating array values?</summary>
<p>

```JavaScript
  array.push('new-value');
  array.pop(); //pops off the last one on the end
  array.shift(); // shifts the first on off the front
  array.sort(); // Converts to a string then sorts based on UTF-16 Codes -- Basically sorts by text order. Gotcha sorting numbers as 1000 would come before 2. Sorts original array.
  array.unshift(4,5); //adds to the front of the array;
```
Read More about UTF - 16
https://en.wikipedia.org/wiki/UTF-16

As of this text update, there are 36 array methods (a few depricated). A complete list 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
</p>
</details>

<details><summary> Write an ECMAScript arrow function example using Array.map() and Array.reduce()  ? </summary>
<p>
 run the `arrowMapReduce.js` example to output the results for the code below

 ```JavaScript
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
```

</p>
</details>

## JavaScript  - Objects

<details><summary> Write code to demonstrate why objects are mutable?</summary>
<p>

 See
* Examples in mutableObjectsExample1.js
* Examples in mutableObjectsExample2.js
* Examples in mutableObjectsExample3.js

Notice that if you have an `array1 = array2` and you modify array2, that array1 contents are also modified. This is an example of array mutability.
Begs the question, how do you make a copy of an array? Next question ....
</p>
</details>

<details><summary> How do you make a copy of an array? Name an ECMAScript way of copying an array?</summary>
<p>

```JavaScript
    a = b.slice();
```
See the mutablity examples. There are only a few ECMAScript ways to override the mutibilty of arrays.
slice is one. 

With ECMAScript use the spread operator.
</p>
</details>

<details><summary> Read and explain the error here? Why does this code fail?
<p>

```JavaScript
const books = { thriller: "Christine", 
  comedy: "Hitchhikers guide to the galaxy", 
  sciencefiction: "The invisible man" 
  };

const mutableBooks = {};

mutableBooks = books;

console.log(`Books: ${books} |  Mutable Books: ${mutableBooks}`);
```
</p>

</summary>

<p>

JavaScript throws an error. ` TypeError: Assignment to constant variable.`
You might want to say that the ` const` keyword makes the variable `books` and `mutableBooks` immutable? 
Is that a correct or incorrect statement? Chenck out the example ``constMutable.js`

This is an example of `static semantic` error. It's not meaningful to try assign a new value to another constant that has been defined.

Try the code `mutableObjectExample1.js`

</p>
</details>

<details><summary> What happens when you run this code? Try it before running the code. Explain why it happens?
<p>

```JavaScript
let books = { thriller: "Christine", 
    comedy: "Hitchhikers guide to the galaxy", 
    sciencefiction: "The invisible man" 
    };
let mutableBooks = {};

mutableBooks = books;

console.log(`Books: ${books} |  Mutable Books: ${mutableBooks}`);
```
</p>

</summary>

<p>

Run `mutableExample2.js`

The `console.log` returns [Object Object]. This is valid code,but the result is not what you might want to see. This is not the way to access the objects contents.
Its a `semantic error` error to assume you'd receive the contents of the object . The syntax is correct, but the handling of the semantics of JavaScript is causing ambiguity about how JavaScript outputs object data.

This is related to template strings. Include this line to the code.

```JavaScript
console.log(mutableBooks);
console.log(books);
```
</p>
</details>

<details><summary> Understanding Numbers in JavaScript - Guess the the answers to the following comparisons ?
<p>

```JavaScript
console.log(`${(0.1 + 0.2)}`);
console.log(`${(0.1 + 0.2) == 0.3}`);
console.log(`${(0.1 + 0.2) === 0.3}`);
console.log(`${(0.1 + 0.2).toFixed(2) === 0.3}`);
console.log(`${(0.1 + 0.2).toFixed(2) == 0.3}`);
console.log(`${0.3 == '0.3'}`);
console.log(`${0.3 === '0.3'}`);
console.log(`${(0.1 + 0.2).toPrecision(2) == 0.3}`);
console.log(`${(0.1 + 0.2).toPrecision(2) === 0.3}`);
console.log(`${(0.1 + 0.2).toPrecision(2)}`);
console.log(`${parseInt((0.1 + 0.2).toPrecision(2))}`);
console.log(`${parseFloat((0.1 + 0.2).toPrecision(2))}`);
console.log(`${parseFloat((0.1 + 0.2).toPrecision(2)) === 0.3}`);
console.log(`${parseFloat((0.1 + 0.2).toPrecision(2)) === 0.3}`);
```

### Why?
</p>
</summary>

<p>
(0.1 + 0.2):  Answer: 0.30000000000000004 <br>
(0.1 + 0.2) == 0.3 :  Answer: false <br>
(0.1 + 0.2) === 0.3 :  Answer: false <br>
(0.1 + 0.2).toFixed(2) === 0.3 :  Answer: false <br>
(0.1 + 0.2).toFixed(2) == 0.3 :  Answer: true <br>
0.3 == '0.3' :  Answer: true <br>
0.3 === '0.3' :  Answer: false <br>
(0.1 + 0.2).toPrecision(2) == 0.3 :  Answer: true <br>
(0.1 + 0.2).toPrecision(2) === 0.3 :  Answer: false <br>
(0.1 + 0.2).toPrecision(2) :  Answer: 0.30 <br>
parseInt((0.1 + 0.2).toPrecision(2)) :  Answer: 0 <br>
parseFloat((0.1 + 0.2).toPrecision(2)) :  Answer: 0.3 <br>
parseFloat((0.1 + 0.2).toPrecision(2)) === 0.3 :  Answer: true <br>
parseFloat(0.1 + 0.2) === 0.3 :  Answer: False <br>

</p>
</details>

<details><summary>Why is the comparison of numbers a challenge? What is a more useful way of comparing numbers?</summary>
<p>

#### Computers utilise binary to convert decimal to a numbers and visa versa.
Thats why we may end up with floating point numbers that have a whole lot of trailing values after the decimal point
A better way of comparing numbers is to compare it to a resolution. This can be done by using EPSILON.
This way you'll know your answer is pretty close to the resolution of EPSILON.
This is the prefered option rather than trying to compare numbers as ```x === y```
Something I need to constantly remind myself after I forget it :-)

```JavaScript
const EPSILON = 0.01
// If you wanted to find out if your answer is close to being a number
// you could do this by using something like this ... too instead of the previous examples.
 console.log( Math.abs(3.00004 - 3 ) <= EPSILON);
 console.log( Math.abs(2.9999 - 3 ) <= EPSILON);
```

</p>
</details>


## Free Online References and Resources
* So many. Just search.
* Marijn Haverbeke https://eloquentjavascript.net/
* https://developer.mozilla.org/en-US/docs/Glossary/Primitive
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
* More on Var, Let and Const https://mathiasbynens.be/notes/es6-const 