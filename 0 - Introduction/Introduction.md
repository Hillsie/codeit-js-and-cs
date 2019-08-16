## JavaScript  - Level 1

<details><summary>What's a literal?</summary>
<p>

#### literals are exact values in a program
```javascript
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

There are more. However, they do not appear to be often used. I haven't seen them too often in GitHub Projects.

In JavaScritp only obects and arrays are mutable

 > In computer science, an object is a value in memory which is possibly referenced by an identifier.
  - Mozilla
</p>
</details>

<details><summary>Explain Immutability? Why is immutablility an important concept? </summary>
<p>
Refer to the attached code. Load it on the command line. ``` node example.js ```

Immutability is how the data is referenced in the memory. Immutable data is not changed in memory, only a new reference to a new memory location is provided.

Objects and Arrays are mutable. This means the actual memory location is changed

JavaScript primitives are immutable. This means that if a new value is created, it exists in a new memory location, and the original value left in place. It would be garbage collected at a point in time if not assigned to a reference. 

```JavaScript
let aString = 'immutable string';
aString = 'New immutable string';
// These are two different memory locations
```
<details><summary> Write some code to demonstrate why Arrays are mutable?</summary>
<p>
### See
* Examples in mutableArraysExample1.js
* Examples in mutableArraysExample2.js
</p>
</details>

## JavaScript  - Arrays

<details><summary> How do you make a copy of an array?</summary>
<p>
```javascript
    a = b.slice();
```
See the mutablity examples
</p>
</details>

## Free Online References
* Marijn Haverbeke https://eloquentjavascript.net/
* https://developer.mozilla.org/en-US/docs/Glossary/Primitive
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures