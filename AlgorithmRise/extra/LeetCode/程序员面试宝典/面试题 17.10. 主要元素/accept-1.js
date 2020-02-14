/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let length = nums.length, map = {}, main = length/2;
    for( let i = 0; i<=length-1; ++i ){

        if( !map[ nums[i] ] ){
            map[ nums[i] ] = 0;
        }

        ++map[ nums[i] ];
        if( map[nums[i]] > main ){
            return nums[i];
        }
    }

    return -1;
};