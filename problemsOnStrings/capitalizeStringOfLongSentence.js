
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// method 1 but not fully correct.

console.log("Welcome to Programiz!");

// const str="i am prashant kumar"
const str="you are prashant kumar react developer"
let newStr=""
const len=str.length


const resultString=()=>{
    
    for (let i=0;i<=len-1;i++){
    
    if(i==0){
        // console.log(str[i].toUpperCase())
        newStr=str.replace(`${str[i]}`,`${str[i].toUpperCase()}`)
        // console.log(newStr)
    }
    else if(str[i-1]==" "){
        // console.log(str[i].toUpperCase())
        newStr=newStr.replace(`${newStr[i]}`,`${newStr[i].toUpperCase()}`)
        // console.log(newStr)
    }
    
    
    }
    
    
    return newStr
}

console.log(resultString())
