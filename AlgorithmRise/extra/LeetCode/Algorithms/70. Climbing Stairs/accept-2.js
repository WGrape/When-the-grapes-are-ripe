var table = [];

table[0] = 1;
table[1] = 1;

for(let i =2; i<=999; ++i){
    table[i] = table[i-1] + table[i-2];
}

console.log(table);

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return table[n];
};