// This occurs as a result of the sequence of events JavaScript usese
// to complile to bytecode

// Part 1 - Notice the scope of the variable is passed between functions
function b(myVar) {
    console.log(`b():${myVar}`);
};
function a() {
    let myVar = 2;
    b(myVar);
    console.log(`a():${myVar}`);
};
let myVar = 1;
a();

// Part 2  - Notice that without passing the scope, the myvariable scope is outside 
// at a global level for c();

function c() {
    console.log(`c():${myVar}`);
};
function d() {
    let myVar = 2;
    c();
    console.log(`d():${myVar}`);
};
d();
