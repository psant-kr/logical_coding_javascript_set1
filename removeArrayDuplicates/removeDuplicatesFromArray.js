//  find the repeated elements in an array.
//  remove the repeated elements from an array.
// ====================
// method-1
// let a = [2, 3, 4, 2, 3, 3, 4, 5, 4]
// let b = []
// let c = []

// for (let i = 0; i <= a.length - 1; i++) {

//     if (b.includes(a[i]) === false) {
//         b.push(a[i])
//     } else if (b.includes(a[i]) === true && c.includes(a[i]) === false) {
//         c.push(a[i])
//     }

// }

// console.log("wiythout repeated elemets of array",  b);
// console.log("repeated elemets of array",  c);

// ================================================
// let a = [2, 3, 4, 2, 3, 3, 4, 5, 4]
// let b = []
// let c = []
// method = 2
// for (let i = 0; i <= a.length - 1; i++) {

//     if (a.indexOf(a[i]) === i) {
//         b.push(a[i])
//     } else if (c.indexOf(a[i]) == -1) {
//         c.push(a[i])
//     }

// }
// console.log(b)
// console.log(c)

// ====================================
// method-3
// without any js array method

// let a = [2, 3, 4, 2, 3, 3, 4, 5, 4]
// let obj = {};
// for (let i = 0; i <= a.length - 1; i++) {

//     obj[a[i]] = "q"
    
// }
// console.log(obj)
// for(let key in obj){
//     console.log(obj[key])
// }

// ========for string =======================

let a = "hello"
let obj = {};
// for (let i = 0; i <= a.length - 1; i++) {

//     obj[a[i]] = "abc"
    
// }
for(let ele of a){

    obj[ele] = "abc"   
}
console.log(obj)
for(let keys in obj){
    console.log(keys)
}
// ================checking object=========================================
// let myobj={name:"prashant", age:27,work:"sde"}

// myobj[`experience`]=1
// myobj[999]=100

// console.log(myobj)
// myobj[999]=myobj[999]+1

// console.log(myobj)
// console.log(myobj[999])


