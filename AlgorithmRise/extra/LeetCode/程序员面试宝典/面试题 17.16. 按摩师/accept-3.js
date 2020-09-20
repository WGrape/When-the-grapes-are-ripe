/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {

    let dp = [], length = nums.length, max = 0;
    if(!length){
        return max;
    }

    max = dp[0] = nums[0];
    for(let i = 1; i<=length-1; ++i){

        if(i>1){
            max = dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
        }else{
            max = dp[i] = Math.max(nums[i], dp[i-1]);
        }
    }

    return max;
};