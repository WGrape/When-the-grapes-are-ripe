/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let sorted_heights = Object.assign([], heights), length = heights.length , count = 0;

    sorted_heights.sort((a,b) => a-b);

    for( let i =0; i<=length-1; ++i ){
        if( sorted_heights[i] !== heights[i] ){
            ++count;
        }
    }

    return count;
};