//  check here number is prime number or not.


let number = 99;

if (number <= 1) {
    var result = (`${number} is not a prime number`)
} else {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            var result = (`${number} is not a prime number`)
            break;
        } else {
            var result = (`${number} is a prime number`)
        }
    }
}

console.log(result);