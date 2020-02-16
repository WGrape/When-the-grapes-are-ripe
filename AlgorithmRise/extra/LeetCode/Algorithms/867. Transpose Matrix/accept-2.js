/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {

    let stack = [], _A = [].concat.apply([],A), num = A[0].length, length = _A.length;
    
    for( let i = 0; i<=length-1; ++i ){

        let index = (i+num)%num;
        if( !stack[index] ){
            stack[index] = [];
        }
        stack[ index ].push( _A[i] );
    }

    return stack;
};

// 根据规律, 找到规律即可
// 把二维数组铺成一维数组, 然后分批捡入到对应的漏斗中即可
