/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let dp = [], length = nums.length;
    for( let i = 0; i<=length-1; ++i ){

        let num = nums[i];
        if( dp[i-1] ){

            dp[i] = dp[i-1].concat([]);

            let stack = [];
            for( let j = 0; j<=dp[i].length-1; ++j ){
                stack.push( dp[i][j].concat( [num] ) );
            }

            dp[i] = dp[i].concat(stack);
        }else{
            dp[i] = [ [], [nums[0]] ];
        }
    }

    return dp[length-1] ? dp[length-1] : [[]];
};