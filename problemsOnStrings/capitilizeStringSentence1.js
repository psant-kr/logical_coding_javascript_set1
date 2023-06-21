
// method 2 but not fully correct.
// let strArr=str.split("").join(""), this is the concept theory we will use.

const str = "hi, i am prashant    kumar a react.js developer"
let strArr = str.split("")
let char

let capitalizedString = () => {

    for (let i = 0; i <= strArr.length - 1; i++) {

        if (i == 0) {
            char = strArr[i].toUpperCase()
            // console.log(char)
            // console.log(strArr)
            strArr.splice(i, 1, char)
            // console.log(strArr)
        } else if (strArr[i - 1] == " ") {
            char = strArr[i].toUpperCase()
            // // console.log(char)
            // // console.log(strArr)
            strArr.splice(i, 1, char)
            // console.log(strArr)
        }
    }

    return strArr.join("")

}

console.log(capitalizedString())



