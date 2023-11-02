/**
given a +ve  value (>0) n. count the no of binary strings
( strings which got only 0 or 1 ) of length n, such that there are 
no consecutive ones.

ex- n = 3 ans is 5.

*/

function noConsicutiveOnes(n) {
    if (n == 1) return 2;
    if (n == 2) return 3;
    if (n > 2) {
        return noConsicutiveOnes(n - 1) + noConsicutiveOnes(n - 2);
    };
}
console.log(noConsicutiveOnes(6));