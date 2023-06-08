// remove repeatd elements from an array

const arr=[3,4,5,4,5,7,8]

// let  output=arr.map((ele,index,arr)=>{
// console.log(`index = ${index},element = ${ele}, arr=${arr}`)
  
// })
// =================================================
//note indexof() method always give index value of first occured array elements.
// let k= arr.indexOf(5)
// console.log(k)
// ====================================================
let new_arr=arr.filter((e,i)=>{
    
    return  arr.indexOf(e) === i;
})
console.log(new_arr)

//===========================================