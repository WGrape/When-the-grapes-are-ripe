/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    let end = Math.floor(n/2);

    for( let i = 1; i<=end; ++i ){

        if( 0 !== i%10 && 0 !== (n-i)%10 ){
            return [i, n-i];
        }
    }

    return [];
};

// 错误在于是不能含有0，不是不能整除 10
