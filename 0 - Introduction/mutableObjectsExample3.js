// This Code shows how JavaScript Objects are mutable.

const books = { crimenovels: "The Adventures of Sherlock Homes", sciencefiction: "Hitchhikers guide to the galaxy", thriller: "The invisible man" };
//const mutableBooks; If you added this line instead. You'd land up with a `SyntaxError: Missing initializer in const declaration`

// How come below works? Const does not make the Object immutable.
const mutableBooks = books;

mutableBooks['crimenovels'] = 'Murder on the Orient Express';
mutableBooks['sciencefiction'] = `The War of the Worlds`;
mutableBooks['thriller'] = 'Christine';

console.log(`Books:         ${books.crimenovels}, ${books.sciencefiction}, ${books.thriller}`);
console.log(`Mutable Books: ${mutableBooks.crimenovels}, ${mutableBooks.sciencefiction}, ${mutableBooks.thriller}`);

// Notice books changes when updating mutableBooks


