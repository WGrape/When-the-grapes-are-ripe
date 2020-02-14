/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    let length = arr.length, min = Infinity, stack = [];
    arr.sort((a,b) => a-b);

    for( let i=0; i<=length-2; ++i ){

        let difference = Math.abs( arr[i+1] - arr[i] );
        if( difference < min ){
            min = difference;
            stack = []; // 重置stack
        }

        if( difference === min ){
            stack.push( [arr[i], arr[i+1]] );
        }
    }

    return stack;
};