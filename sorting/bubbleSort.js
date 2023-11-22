/*

// sorting using bubble sort.
function sort(arr){
    for (let i = 1; i < arr.length; i++){
        for( let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                // swap
                let k = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = k;
            }
        }
    }
    return arr;
}
let arr = [6,7,4,3,5,1];
console.log(sort(arr));

*/

// bubble sort sanket

function sort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent elements
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest value.
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        // here in any iteration the sorting is completed the loop will break
        // and if the array is already sorted then it will break in the first iteration.
        if (isSwapped == false) break;
    }
    return arr;
}
let arr = [1, 2, 3, 0];
console.log(sort(arr));