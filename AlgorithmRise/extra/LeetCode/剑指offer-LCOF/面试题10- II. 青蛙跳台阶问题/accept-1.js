let table = [];

let printTable = function(){
    
    table[0] = 1;
    table[1] = 1;
    table[2] = 2;
    for( let i = 3; i<=100; ++i ){
        table[i] = (table[i-1] + table[i-2])%1000000007; // 重要的是这一步
    }
}

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    printTable();
    return table[n];
};