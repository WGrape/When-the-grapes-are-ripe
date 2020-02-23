/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {

    if(0 == num){
        return [0];
    }
    else if(1 == num){
        return [0,1];
    }

    let stack = [0,1,1];
    for( let i = 3; i<=num; ++i ){
        stack[i] = stack[ i>>1 ] + (i&1);
    }
    return stack;
};