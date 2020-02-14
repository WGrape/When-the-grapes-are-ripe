/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let left_n, right_n, num, stack = [];

    if( 0 === n%2 ){

        // [从 0 向左取 n/2 个, 从 0 向右取 n/2 个]
        left_n = right_n = n/2;
    }else{

        // [从 0 向左取 floor(n/2) 个, 从 0 (包括0) 向右取 floor(n/2)+1 个]
        left_n = Math.floor(n/2);
        right_n = left_n+1;
    }

    num = 0;
    for( let i = 0; i<left_n; ++i ){
        stack.push( --num );
    }

    num = n%2 ? -1 : 0;
    for( let i = 0; i<right_n; ++i ){
        stack.push( ++num );
    }

    return stack;
};