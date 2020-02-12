/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let length = arr.length, dp = [], max = 0;


    for( let i = length-1; i>=0; --i){

        if( length-1 === i ){
            dp[i] = -1;
            max = arr[i];
            continue;
        }

        dp[i] = max;
        max = Math.max(max, arr[i]);
    }

    return dp;
};