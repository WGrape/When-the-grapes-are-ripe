/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if(1 == n){
        return 1;
    }
    return n + sumNums(n-1);
};