/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let _nums = Object.assign([], nums);
    nums.sort((a,b)=>a-b);
    let length = nums.length, dp = [], hash = [], result = [];
    for(let i = 0; i<=length-1; ++i){

        if(!i){
            dp[i] = 0;
            hash[nums[i]] = 1;
            result[nums[i]] = 0;
            continue;
        }

        if(!hash[nums[i]]){
            hash[nums[i]] = 0;
        }
        ++hash[nums[i]];

        let count = 0;
        if( nums[i-1] == nums[i] ){
            count = dp[i-1];
        }else{
            count = dp[i-1] + hash[ nums[i-1] ];
        }

        dp.push( count );
        result[ nums[i] ] = count;
    }

    let stack = [];
    for(let num of _nums){
        stack.push( result[ num ] );
    }

    return stack;
};