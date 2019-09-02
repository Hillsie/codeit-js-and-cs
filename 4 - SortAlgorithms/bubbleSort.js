let data = [17, 1, 3, 9, 2, 8, 6, 5, 10, 11, 19, 4, 0, 12, 7, 13, 14, 16, 15, 20, 18]; // data to sort

function bubbleSort(sortme) {
    // This  sort is based on first principles and not using the array sort method provided by JavaScript
    // More on the sort method used with JavaScript array.sort here 
    // https://stackoverflow.com/questions/234683/javascript-array-sort-implementation
    /* console.log(sortme.sort()); */ //note that the sort method of javaScript node array.sort() appears to be based on type conversion
    // We'd like the sort to be ordered by integer value
    let sortedData = [];
    let i = 0;
    while (i < (sortme.length - 1)) {

        if (sortme[i] > sortme[i + 1]) {
            let temp = sortme[i];
            sortme[i] = sortme[i + 1];
            sortme[i + 1] = temp;
            i = 0;
        } else {
            i++;
        }
    }
    sortedData = sortme.slice(); // creates a copy of the sortme array;
    return sortedData;
}

console.log(bubbleSort(data)); // bubble sort is quadratic O(n^c)