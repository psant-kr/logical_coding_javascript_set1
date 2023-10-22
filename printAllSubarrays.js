// sub array is a continuous croossection of arrays
// start = i;
// end = j;
function printsubarray(arr) {
    // let str = '';
    for (let i = 0; i < arr.length; i++) {
    let str = '';
        for (let j = i; j < arr.length; j++) {
            str += arr[j] + ' ';
            console.log(str);
        }
        // str = '';
    }
}
// let arr = [1, 2, 3, 4];
// printsubarray(arr);
printsubarray([1,2,3,4]);