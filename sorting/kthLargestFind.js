// find the kth largest element of the array.

function sort(arr, k) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent elements
    for (let i = 0; i < k; i++) {
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
        if (isSwapped == false) break;
    }
    console.log(arr)
    return arr[n - k];
}
let arr = [21, 23, 5, 4, 3, 2, 1];
let k = 3;
console.log(sort(arr, k));