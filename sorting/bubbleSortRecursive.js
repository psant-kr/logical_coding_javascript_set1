function f(arr, k){
    if(k == 0) return;

    for(let i = 0; i < k; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    f(arr, k-1);
}

let arr = [4,-1,6,3,5,-2,8];
f(arr, arr.length - 1);
console.log(arr);