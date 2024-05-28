function palindrome(str) {
    str = str.toLowerCase();
    // str = str.toUpperCase();
    let length = str.length - 1;
    // for (let i = 0, j = length; i < j; i++, j--) {
    //     if (str[i] !== str[j]) {
    //         // console.log("is not a palindrome")
    //         return `${str} is not a palindrome`
    //     }
    // }

    // for (let i = 0; i <= length; i++) {
    for (let i = 0; i <= length/2; i++) {
        console.log(i, length - i);
        if (str[i] !== str[length - i]) {
            // console.log("is not a palindrome")
            return `${str} is not a palindrome`
        }
    }

    // console.log("is a palindrome");
    return `${str} is a palindrome`
}
console.log(palindrome("madam"))
console.log(palindrome("deified"))
console.log(palindrome("prashant"))
console.log(palindrome("Madam"))
console.log(palindrome("cikllkic"))
console.log(palindrome("ciklgkIC"))