/* 

A quick revision. Possibly out of sync with this goal of this repository as there
are many resources online to help understand these JS features.

*/

// looping an array
const fruit = ['Apples', 'Peaches', 'Oranges', 'Bananas'];

fruit.forEach(function (item, index, array) {
    console.log(item, index, array);
})

// A JS Method to find the index of a 
const position = fruit.indexOf('Bananas');
console.log(`The position of Bananas: ${position}`);

// illustrating foreach use with an arrow function
fruit.forEach((item, index, array) => {
    fruit[index] = `${item} - Fruit`;
    console.log(array)
})
console.log(fruit);

const mySpecialNumbers = [1, 2, 3, 4, 5, 6];

for (let x = 0; x < mySpecialNumbers.length; x++) {
    console.log(mySpecialNumbers[x]);
}

// Note trailing comma in an object is an ECMAScript feature
// This is not JSON, it's a JavaScript Object Literal. 

const dogBreed = {
    0: {
        breed: 'Grey hound',
        avgMaxAgeYrs: 14,
        origin: [
            'England',
            'British Isles'
        ],
        colors: [
            'Brindle',
            'Black',
            'White',
            'Blue',
            'Red',
        ],
    },
    1: {
        breed: 'Shih Zu',
        avgMaxAgeYrs: 16,
        origin: [
            'China',
            'Tibet'
        ],
        colors: [
            'Black',
            'White',
            'Liver',
            'Brindle',
            'Light Brown',
            'Dark Brown',
            'Black & White',
            'Blue',
            'Gold',
        ],
    },
    2: {
        breed: 'Australian Cattle Dog',
        avgMaxAgeYrs: 15,
        origin: ['Australia'],
        colors: [
            'Blue',
            'Red',
        ],
    },
    3: {
        breed: 'Alaskan Malamute',
        avgMaxAgeYrs: 12,
        origin: ['Australia'],
        colors: [
            'Seal & White',
            'Sable & White',
            'Black & White',
            'Brown & White',
            'Red & White',
            'Dark Brown',
            'Gray & White',
        ],
    },
};
// Method 1 to accessing the data
// with Object.entries and forEach
Object.entries(dogBreed).forEach((key, val) => {
    console.log(key, val);
})

// Method 2 to access the data
// For of with destructuring
for (const [key, val] of Object.entries(dogBreed)) {
    console.log(key, val);
    if (val.breed === 'Australian Cattle Dog') {
        console.log('Aussie! Aussie! Aussie!')
    }
}

// Example of direct manipulation
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
