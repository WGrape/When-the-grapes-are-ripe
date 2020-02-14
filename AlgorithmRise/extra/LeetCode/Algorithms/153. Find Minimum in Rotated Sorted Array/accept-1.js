/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let length = nums.length,
    end = Math.floor(length/2),
    rotate_nums = nums.slice(end).concat( nums.slice(0, end) ),
    min = Infinity;

    for( let i = 0; i<=end; ++i ){
        
        min = Math.min(min, nums[i]);
        min = Math.min(min, rotate_nums[i]);
    }

    return min;
};