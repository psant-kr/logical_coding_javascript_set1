console.log("hi i am prashant and i want to reverse the array,and no new array");

function swap(arr, i, j) {
    // function swaps the element of the array at index i and j.
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

let arr = [5, 9, 1, 3, 2, 7]; // array which is to be reversed.

let i = 0; // first index.
let j = arr.length - 1; // last index.

while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
};

console.log(arr);



