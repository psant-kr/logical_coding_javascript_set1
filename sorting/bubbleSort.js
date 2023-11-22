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
let arr = [6,7,4,3,5];
console.log(sort(arr));