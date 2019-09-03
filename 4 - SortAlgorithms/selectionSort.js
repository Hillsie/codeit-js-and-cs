/* Selection Sort explained 
The algorithm is of the O(n^c) complexity, quadratic.
Think of select sort as taking one element from the unsorted list (the selection). Add this to a type of "stack". 
This reduces the length of the unsorted list by one. Compare the selected item to all items in the unsorted list.
If the selected item is > greater than item in the unsorted list, swap them and continue the comparision
until reaching the end of the unsorted list. Then select the next item at the begining of the unsorted list, reducing 
the length of the unsorted list and begin the comparison again If you run out of items in the unsorted list all the 
items selected are in order in the "stack". 
It's challenging  concept without pictures.

notice that the select sort becomes more efficient at the select sort reaches the end of the list.

Notice also, that the JavaScript array.sort() method appears to do a type conversion on numbers so sorting has 1, 10, 2, 20 
as ordered.

The JavaScript documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
shows that there are many built-in features that could peform the sort. This would defeat the purpose of learning the selectionSort algorithm :->

More info on array.sort() https://stackoverflow.com/questions/234683/javascript-array-sort-implementation

*/






let numberList = [17, 1, 3, 9, 2, 8, 6, 5, 10, 11, 19, 4, 0, 12, 7, 13, 14, 16, 15, 20, 18]; // data to sort
// Some Test Cases
// let numberList = [4, 3, 2, 1, 0];
// let numberList = [0];


function selectSort(unorderedNo) {
    let p = 0;
    let n = 0;

    // This  selectSort is based on first principles and does not use JavaScript array.sort() method. 
    // The built-in JavaScript sort has a few features that would enable this sort in fewer lines, but it
    // defeats the purpose of learning the selecionSort algorithm.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    console.log([17, 1, 3, 9, 2, 8, 6, 5, 10, 11, 19, 4, 0, 12, 7, 13, 14, 16, 15, 20, 18].sort());

    let sortedArray = [];

    while (unorderedNo.length > 0) {
        sortedArray[p] = unorderedNo.shift(); // reduced the original array length
        if (unorderedNo.length === 0) {
            break;
        } else {
            while (unorderedNo.length >= n) {
                if (sortedArray[p] > unorderedNo[n]) {
                    let temp = unorderedNo[n];
                    unorderedNo[n] = sortedArray[p];
                    sortedArray[p] = temp;
                } else {
                    n++;
                }
            }
            n = 0;
            p++;
        }
    }
    return sortedArray;
}

console.log(selectSort(numberList));
