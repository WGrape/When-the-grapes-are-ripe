let table = [];
table[0] = 0;
table[1] = 0;

var isPrime = function(n){
    let end = Math.sqrt(n);
    for( let i = 2; i<=end; ++i ){
        if( 0 == n%i ){
            return false;
        }
    }
    return true;
}

for( let i = 2; i<=1500000; ++i ){
    table[i] = isPrime(i) ? table[i-1] +1 : table[i-1];
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    return table[n-1] ? table[n-1] : 0;
};