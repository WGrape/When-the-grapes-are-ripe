/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    
    let j = 0;
    for( let i = m; j<n; ++i ){
        A[i] = B[j++];
    }

    let stack = Object.assign([], A.slice(0, m+n));
    stack.sort((a,b) => a-b);
    satck = stack.concat( A.slice(m+n) );
    console.log(stack);
    
    return satck;
};