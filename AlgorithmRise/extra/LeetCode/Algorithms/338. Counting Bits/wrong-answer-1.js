/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {

    let stack = [0,1,1];
    for( let i = 3; i<=num; ++i ){
        stack[i] = stack[ i>>1 ] + (i&1);
    }
    return stack;
};