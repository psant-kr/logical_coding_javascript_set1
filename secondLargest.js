// find the second Largest element in an array without sorting the array.


function findSecondLargest(arr) {
    let firstLargest = arr[0];
    let secondLargest = arr[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr = [1, 5, 3, 2, 4];
const secondLargestNumber = findSecondLargest(arr);
console.log(secondLargestNumber); // 4