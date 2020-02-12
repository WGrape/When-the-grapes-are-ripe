/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let _nums = Object.assign([], nums), length = nums.length;

    _nums.sort( (a,b) => a-b );

    let max = _nums[ length-1 ], index = false;

    for( let i = 0; i<=length-1; ++i ){
        if( false === index && max === nums[i] ){
            index = i;
        }
        if( nums[i] != max && max < (2*nums[i]) ){
            return -1;
        }
    }

    return index;
};