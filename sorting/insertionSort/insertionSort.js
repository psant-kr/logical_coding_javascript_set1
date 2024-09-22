function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currenrElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currenrElement) {
      arr[j + 1] = arr[j]; // shifting the element to the right index
      j--;
    }
    arr[j + 1] = currenrElement;
  }
}

let arr = [5, 4, 3, 13, -1, 9, 7, 22, 2, 1];

insertionsort(arr);

console.log(arr);

// space O(1)
// Time  O(N^2)

// can be used for already or almost sorted arrays
