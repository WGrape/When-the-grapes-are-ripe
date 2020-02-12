/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let length = arr.length, dp = [], max = arr[length-1];

    dp[ length-1 ] = -1;
    
    for( let i = length-2; i>=0; --i){

        dp[i] = max;
        max = Math.max(max, arr[i]);
    }

    return dp;
};