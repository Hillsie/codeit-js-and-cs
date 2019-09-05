// The following is test data

const matchedbrackets = '{This is a bracket(starts here)closed[Open]closed{open}closed}closed';
const matchedbrackets2 = '{}{}[][()]{[()]}';
const Unmatchedbrackets = '{This is a bracket(starts here))closed[Open]closed{open}closed}closed';
const Unmatchedbrackets2 = '{{}';


// Creating a Stack out of an Array. ECMAScript classes do not effect the Array Prototype.
class Stack extends Array {
    constructor(name) {
        super();
        this.name = name;
        this.value = []; // Gives the methods visiblity to the variable
    }
    peek(val) {

        this.value.push(val);
        return this.value[(this.value.length) - 2]
    }
    pop(no) {
        let popped = [];
        for (let i = 0; i < no; i++) {
            popped.push(this.value.pop());
        }
        return popped

    }
    many() {

        return this.value.length;
    }
    print() {
        return this.value;
    }

}

const BracketStack = new Stack;

// New ECMAScript Array Method is Array.from

function isBrackets(inputString) {

    const matchingCriteria = {
        '{': '}',
        '[': ']',
        '(': ')',
        '}': '{',
        ']': '[',
        ')': '('
    }
    // failure case 1: there is an uneven no of brackets
    // failure case 2: start with closed
    // failure case 3: ends with open

    // Turn the string into an array. New ECMAScript Array Method
    const testArray = Array.from(inputString);
    // Filter out everything that is not part of the set. Might be able to refine this more with matchedCriteria above, however,
    // Might make the code less readable.
    const bracketsOnly = testArray.filter((item) => {
        if (item === '{' || item === '}' || item === '[' || item === ']' || item === '(' || item === ')') {
            let bracket = item;
            return bracket;
        }

    })

    // Perform Test Cases to keep code in O(1) territory
    let bOLength = bracketsOnly.length;
    // Check there is an even number of brackets; If not it's a fail
    if ((bracketsOnly.length === 0) || (bracketsOnly.length) % 2 > 1) {
        return "no match";
        // Check that the first barcket in the list is not a close, which is a logical fail
    } else if (bracketsOnly[0] === '}' || bracketsOnly[0] === ']' || bracketsOnly[0] === ')') {
        return "no match";
        // Check that the last bracket is not an open, which is a logical fail
    } else if ((bracketsOnly[bOLength - 1] === '{' || bracketsOnly[bOLength - 1] === '[' || bracketsOnly[bOLength - 1] === '(')) {
        return "no match";
    } else {
        // At this stage, pop onto a stack and check for matching brackets;
        for (let i = 0; i < bracketsOnly.length; i++) {
            let previous = BracketStack.peek(bracketsOnly[i]);

            // uncomment to see behaviour
            /* console.log(`previous: ${previous} current: ${bracketsOnly[i]} `); */

            // Using JavaScript Object... AKA Hash Table to lookup the matched value. See declaration  `const matchingCriteria` above
            if (previous === matchingCriteria[bracketsOnly[i]]) {
                // uncomment to see behaviour
                /* console.log(`**pop it**`); */
                BracketStack.pop(2);
            }
        }
        if (BracketStack.many() > 0) {
            console.log(`not paired on the stack: ${BracketStack.print()}`);
            return 'no match';
        } else {
            return 'A match!';
        }

    }
}

console.log(isBrackets(matchedbrackets));
console.log(isBrackets(matchedbrackets2));
console.log(isBrackets(Unmatchedbrackets));
console.log(isBrackets(Unmatchedbrackets2));
