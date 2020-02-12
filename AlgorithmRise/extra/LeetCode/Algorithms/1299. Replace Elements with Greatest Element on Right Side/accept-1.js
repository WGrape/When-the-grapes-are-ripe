/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let length = arr.length, stack = [];

    for( let i = 0; i<=length-1; ++i ){

        if( length-1 === i ){
            stack.push(-1);
            continue;
        }

        let max = 0;
        for( let j = i+1; j<=length-1; ++j ){
            max = Math.max(max, arr[j]);
        }

        stack.push(max);
    }

    return stack;
};