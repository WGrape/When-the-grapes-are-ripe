/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let length = nums.length, dp = [], max = 0;
    if(0 == length){
        return max;
    }else if(1 == length){
        return nums[0];
    }else{
        dp[0] = nums[0];
        dp[1] = max = Math.max(dp[0], nums[1]);
    }

    for(let i = 2; i<=length-1; ++i){

        dp[i] = max = Math.max(dp[i-1], dp[i-2]+nums[i]);
    }

    return max;
};