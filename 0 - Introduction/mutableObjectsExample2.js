// Give a reason why it fails before running this code. Why does it it fail? 

let books = {
    thriller: "Christine",
    comedy: "Hitchhikers guide to the galaxy",
    sciencefiction: "The invisible man"
};
let mutableBooks = {};

mutableBooks = books;

console.log(`Books: ${books} |  Mutable Books: ${mutableBooks}`);

// actually, it doesn't fail. You just end up getting an unexpected result.

