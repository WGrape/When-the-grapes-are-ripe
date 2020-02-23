/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if( 0 == n ){
        return false;
    }

    if( 1 == n ){
        return true;
    }

    while( 0 == n%2 ){

        n = n >> 1;
        if(1 === n){
            return true;
        }
    }

    return false;
};

// 思路 : 1(1) , 2(10), 4(100), 8(1000), 16(10000) ... 可知每一个数都会被2整除, 所以逆推往前直到1为止 则是 2 的幂
// 否则不是
