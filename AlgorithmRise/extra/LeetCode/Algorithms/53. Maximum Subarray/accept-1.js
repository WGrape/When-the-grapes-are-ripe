/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let max = Number.NEGATIVE_INFINITY, length = nums.length;
    for( let i = 0; i<=length-1; ++i ){

        let sum = nums[i];
        for( let j = i+1; j<=length-1; ++j ){
            max = Math.max(max, sum, sum+nums[j]);
            sum += nums[j];
        }
        max = Math.max(max, sum);
    }
    
    return max;
};