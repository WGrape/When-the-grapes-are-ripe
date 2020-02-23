/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let dp = [], length = nums.length;
    for( let i = 0; i<=length-1; ++i ){

        if(!i){
            dp[i] = nums[i];
        }else{
            dp[i] = Math.max( dp[i-1], nums[i], dp[i-1]+nums[i] );
        }
    }
    console.log(dp);
    return dp[length-1];
};

// 这个解答是错误的, 因为题目说明是连续的了, 而这个解答不是连续的