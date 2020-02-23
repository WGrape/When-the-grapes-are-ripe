/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let length = nums.length, max = nums[0];
    for( let i = 1; i<=length-1; ++i ){

        // 连续问题, 贪心思路是修改数组, 数组中的每个数表示从头至此位置中连续和的最大值
        nums[i] = Math.max(nums[i-1] + nums[i], nums[i]);
        max = Math.max(max, nums[i]);
    }
    
    return max;
};