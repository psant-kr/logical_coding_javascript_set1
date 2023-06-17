// print all the prime numbers between 0 and 100

let startNum = 0
let endNum = 20
for (let i = 0; i < endNum; i++) {

    if (i <= 1) {

        var result = (`${i} is not a prime number`)

    } else if (i == 2) {

        result=(`${i} is  a prime number`)

    } else {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                result=(`${i} is not a prime number`)
                break;
            } else {

                result=(`${i} is  a prime number`)

            }

        }

    }

    console.log(result)
    
}


