/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {

    // 值传递
    let _arr = Object.assign([], arr), length = _arr.length, rank = 0, map = {}, stack = [];
 
    _arr.sort( (a,b) => a-b );

    for( let i = 0; i<=length-1; ++i ){
        if( _arr[i-1] !== _arr[i] ){
            ++rank;
        }
        
        map[ _arr[i] ] = rank;
    }

    for( let i = 0; i<=length-1; ++i ){
        stack.push( map[ arr[i] ] );
    }

    return stack;
};