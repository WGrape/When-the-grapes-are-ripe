let table = [];

var printTable = function(){

    table[0] = 0;
    table[1] = 1;
    for(let i =2; i<=30; ++i){
        table[i] = table[i-1] + table[i-2];
    }
}

printTable();

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    
    return table[N];
};