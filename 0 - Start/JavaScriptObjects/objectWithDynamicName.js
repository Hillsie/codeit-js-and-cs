/* Reference examples JavaScript Objects */

/* What is you needed a JS Object with a particulare variable name? */

/* Example 1 */

const objectKey = 'booksWritten';
const objectValue = 1;

const dynamicallyNamedObject = {
    [objectKey]: objectValue
}

console.log(dynamicallyNamedObject);

/* Example 2 */
/* Looping Example with a HashMap AKA JavaScript Object to find last position of letters used in a string*/
function addPosition(position, place) {
    // Adds the position of the letter in the string;
    let letterPlace = position.slice()
    letterPlace.push(place);
    return letterPlace;
};

// The deduplication is O(n) as it evluates the entire string
// The writing to hash is O(1) as a hash is in constant time.


function deDupLettersInString(dedupThisString) {
    /* 
        Input: String
        De duplicates multiple occurances of a char and stores location in an array.
        Returns location of letters as hash / JavaScript Object.
    */
    let dynamicObjectKey = {};
    let letterPosition = [];

    for (let i = 0; i < dedupThisString.length; i++) {
        if (dynamicObjectKey.hasOwnProperty(dedupThisString[i]) === true) {
            let temp = dynamicObjectKey[dedupThisString[i]];
            dynamicObjectKey[dedupThisString[i]] = addPosition(temp, i);
        } else {
            dynamicObjectKey[dedupThisString[i]] = {};
            dynamicObjectKey[dedupThisString[i]] = addPosition(letterPosition, i);
        }

    }
    return dynamicObjectKey
}

const countOccurance = 'booksWwritten';

console.log(deDupLettersInString(countOccurance));

/* Example -  Count letters in a string */
/* Concept can be used to compress string */

const logFile = '1567917257 [INFO] Accessed http://some123url.co.uk/alpha.html?b=9 1567917272 [INFO] Process \
completed in 4ms. 1567920056 [Warning] http://some123url.co.uk not standeard behaviour 1567917286 [INFO] Accessed \
http://www.somesite.com/mad.html?siteno=1 1567920521[INFO] Accessed https://someothersite.com/ 1567920537[Warning] Stuff went wrong \
https://someothersite.com/ 1567920552 [INFO] More info http://someothersite.com/';

console.log(deDupLettersInString(logFile));