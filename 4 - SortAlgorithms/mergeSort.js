/* Merge sort is an order O(n log n) complexity algorithm, worst case. Best case 2 elements and 0(1)
The decision to sort data is one  that should be considered based on the long term benefit. Think of a single sort
occuring once and thereafter insertions occur with a modified search algorithm. This means,  the cost is
spread over time and reduces based on how many times  a search is used. ==> Amortised.
Search algorithms rely on sorted data.

This algorithm is more efficient than bubble and selection sort which are quadratic O(n^c)
A merge sort needs to go through the entire set and uses recursion.

This algorithm  was invented in 1945 by Jon von Neuman and is a divide and conquer algorithm
This I have translated this JavaScript version from a Python version source Professor Guttag and 
Professor Grimson MIT.
*/


// Test the merge part by uncommenting these two lines.

/* const left = [1, 3, 4, 6, 9, 11, 13, 14, 16, 18, 20];
const right = [2, 5, 7, 8, 10, 12, 15, 17, 19, 21, 22, 23, 24];
 */

const unsortedList = [20, 19, 4, 5, 3, 6, 7, 2, 1, 21, 22, 8, 9, 11, 10, 12, 13, 14, 16, 15, 18, 17, 0];



function merge(l, r) {

    // The base assumption is that the lists being merged is sorted
    // With this console.log see how each item is merged

    console.log(`left: ${l} right ${r}`);
    let result = [];
    let i = 0, j = 0;
    // Compare left to right and push onto array
    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            result.push(l[i]);
            i++;
        } else {
            result.push(r[j]);
            j++;
        }
    }
    // If left has not finished push the remainder on to the result

    while (i < l.length) {
        result.push(l[i]);
        i++;
    }
    while (j < r.length) {
        result.push(r[j]);
        j++
    }
    console.log(`** merged: ${result}`);
    return result;
}

// Uncomment this to see a ordered merge occuring.
/* console.log(merge(left, right)); */

//  divide and conquer through recursion calls and a merge
function merge_sort(sortList) {
    let divideNConquer = [];
    let left = [];
    let right = [];
    if (sortList.length < 2) {
        sortList = sortList.slice();
        return sortList;
    } else {
        divideNConquer = Math.floor(sortList.length / 2);
        left = merge_sort(sortList.slice(0, divideNConquer));
        right = merge_sort(sortList.slice(divideNConquer));
        return merge(left, right);
    }
}

console.log(merge_sort(unsortedList));