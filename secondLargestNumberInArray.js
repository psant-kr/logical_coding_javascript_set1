// to find the largest and second largest number an array.
console.log("find the largest number in an array");

// method 1


// const arr=[9,23,85,2,4,5,4,5,60,3,4,77]

// let largestNumber=arr[0]
// let secondLargestNumber=arr[0]

// const largestnumber= function largestnumber(){
    
//     for(let i=0;i<=arr.length-1;i++){
    
//     if(arr[i]>largestNumber){
//         largestNumber=arr[i]
//         }
//     }
    
//     for(let i=0;i<=arr.length-1;i++){
    
//     if(arr[i]>secondLargestNumber && arr[i]!==largestNumber){
//         secondLargestNumber=arr[i]
//         }
//     }
    
//     return secondLargestNumber;
    
// }

// console.log(largestnumber())

// method -2 

const arr=[9,23,85,2,94,5,4,5,60,3,4,77]

let largestNumber=arr[0]
let secondLargestNumber=arr[0]

const secondlargestnumber= function secondlargestnumber(){
    
    for(let i=0;i<=arr.length-1;i++){

            if(arr[i]>largestNumber){

                secondLargestNumber=largestNumber;
                largestNumber=arr[i]

            }else if(arr[i]>secondLargestNumber){
                secondLargestNumber=arr[i]
            }

    }
    
    return secondLargestNumber;
    
}

console.log(secondlargestnumber())
