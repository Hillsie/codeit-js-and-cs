//Does const make a variable immutable?

const mutableBooks = {};

mutableBooks["thriller"] = "christine";
// note below: probably advisible to stick to a standard. 
// This is an example so you can see that backtick `, single quote ' and double quote are part of JavaScript literal syntax

mutableBooks[`sciencefiction`] = `The War of the Worlds`;
mutableBooks['crimenovels'] = 'Murder on the Orient Express';

console.log(`Mutable Books: ${mutableBooks.thriller}, ${mutableBooks.sciencefiction, mutableBooks.crimenovels}`);

// Again... what's wrong with this code. Where is the second mutableBooks.crimenovels?
