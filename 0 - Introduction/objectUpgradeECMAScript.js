const first = 'Steven';
const last = 'King';
const birthday = '21 September 1947';
const book = 'Christine';
// New to ES6 No need to write first:first etc 
let authorBio = {
    first,
    last,
    birthday,
    book,
    friends: ['Georg R.R. Martin', 'JJ Abrams'],
};
console.log(authorBio);