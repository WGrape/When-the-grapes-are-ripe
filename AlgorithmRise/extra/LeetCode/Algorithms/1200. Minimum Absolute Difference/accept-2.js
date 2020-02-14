/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    let length = arr.length, min = false, stack = [];
    arr.sort((a,b) => a-b);

    for( let i=0; i<=length-1; ++i ){

        let difference = Math.abs( arr[i+1] - arr[i] );
        if( false === min || difference < min ){
            min = difference;
            stack = []; // 重置stack
        }

        if( difference === min ){
            stack.push( [arr[i], arr[i+1]] );
        }
    }

    return stack;
};