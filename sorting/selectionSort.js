// Selection sort valid for all repetative element also
function selectionSort(arr) {
    let temp;
    let minValIndex;
    for (let i = 0; i < arr.length; i++) {
    // [i, n-1] --> unsorted region
        
    // Here we are assuming first element of the range as the minimum element candidate
        minValIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minValIndex] > arr[j]) {
    // if the current element at the index j is less than our minimum candidate
                minValIndex = j;
            };
        };
        // This swaping will be executed in all the cases. 
        // temp = arr[i];
        // arr[i] = arr[minValIndex];
        // arr[minValIndex] = temp;

    // This swaping will be executed only if the minindexval is different than the present i
        if (i != minValIndex) {
            temp = arr[i];
            arr[i] = arr[minValIndex];
            arr[minValIndex] = temp;
        }
    };
    //    return arr;
};
let arr = [15, 1, 6, 3, -1, 2, 10];
console.log(selectionSort(arr));
console.log(arr);
console.log(arr);
console.log(arr);

console.log(arr);
