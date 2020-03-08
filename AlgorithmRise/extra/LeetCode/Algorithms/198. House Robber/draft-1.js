/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let length = nums.length, max = 0, max_profit = 0, index = 0, i;

    for( i = index+2; i<=length-1; ++i ){

        max = Math.max(max, nums[index]);
        max_profit = Math.max(max_profit, max+nums[i]);
        ++index;
    }

    if( index === i-2 ){
        index += 2;
        max_profit = Math.max(max_profit, max_profit+nums[index]);
    }

    return max_profit;
};