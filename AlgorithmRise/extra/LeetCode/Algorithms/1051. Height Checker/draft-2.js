/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let length = heights.length, min = 999, max = 0, count = 0, stack = [], end = false;

    // 找出被档的个数
    for( let i=0; i<= length-1; ++i ){

        max = Math.max(max, heights[i]);
        if( max > heights[i] ){
            ++count;
            min = Math.min(min, heights[i]);
            if( false === end ){
                end = i;
            }
        }
    }

    // 被挡的最小人前面有几个比他高的人
    for( let i =0; i<=end; ++i ){
        if( heights[i] > min ){
            ++count;
        }
    }

    return count;
};