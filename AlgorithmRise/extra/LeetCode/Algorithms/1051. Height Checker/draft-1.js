/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let length = heights.length, max = 0, count = 0, stack = [];

    for( let i=0; i<= length-1; ++i ){

        max = Math.max(max, heights[i]);
        if( max > heights[i] ){
            ++count;
            stack.push(max);
        }
    }

    stack = [...new Set(stack)];

    return count + stack.length;
};