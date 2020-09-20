/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return ( !(n-1) || n ) && n + sumNums(n-1);
};