//even genap
//odd ganjil

let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
var genap = [], i1,j1 ;

for (i1=1; i1<=100; ++i1){
    if (numbers[i1] === 0 || !!(numbers[i1] && !(numbers[i1]%2))=== true) {
        genap.push(numbers[i1]);
        } 
}

var ganjil = [] ;

for (i1=0; i1<=99; ++i1){
    if (numbers[i1] === 0 || !!(numbers[i1] && !(numbers[i1]%2))=== true) {
        ganjil.push(numbers[i1+1]);
        } 
}

var kelip5 = [] ;

for (i1=1; i1<=100; ++i1){
    if ((numbers[i1] %5 === 0) === true) {
        kelip5.push(numbers[i1]);
        } 
}

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
console.log('Even Numbers : \n', genap);
console.log('Odd Numbers : \n', ganjil);
console.log('Numbers Multiplies by 5 : \n', kelip5);
console.log('Prime Numbers : \n', getPrimes(100));