/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    n = Math.pow(10, n)-1;
    let stack  =[];
    for(let i =1; i<=n; ++i){
        stack.push(i);
    }
    return stack;
};