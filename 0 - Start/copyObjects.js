// This Code shows how JavaScript Objects are mutable.

const books = {
    crimenovels: "The Adventures of Sherlock Homes",
    sciencefiction: "Hitchhikers guide to the galaxy",
    thriller: "The invisible man"
};

// How come below works? Const does not make the Object immutable. To make the object immutable, use Object.freeze 
// This example introduces a function. The function declarition is not required to make a copy of the
function mutableObjects() {
    // Below is the ECMAScript way of copying an Object call the spread operator. 
    const mutableBooks = { ...books }; // this way we mutate the object without changing the original object


    mutableBooks['crimenovels'] = 'Murder on the Orient Express';
    mutableBooks['sciencefiction'] = `The War of the Worlds`;
    mutableBooks['thriller'] = 'Christine';

    console.log(`Books:         ${books.crimenovels}, ${books.sciencefiction}, ${books.thriller}`);
    console.log(`Mutable Books: ${mutableBooks.crimenovels}, ${mutableBooks.sciencefiction}, ${mutableBooks.thriller}`);

    // Notice books do not change when updating mutableBooks

}
mutableObjects();


