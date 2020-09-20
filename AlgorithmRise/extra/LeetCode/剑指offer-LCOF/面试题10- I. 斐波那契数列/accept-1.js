var table = [];

var printTable = function(){

    table[0] = 0;
    table[1] = 1;
    for(let i = 2; i<=100; ++i){
        table[i] = (table[i-1]+table[i-2])%1000000007;
    }
}

printTable();

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    return table[n];
};