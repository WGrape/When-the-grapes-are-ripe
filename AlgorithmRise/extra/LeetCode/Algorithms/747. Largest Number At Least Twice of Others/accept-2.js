/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let max = nums[0], index = false, length = nums.length;

    for(let i =1; i<=length-1; ++i){
        max = Math.max(max, nums[i]);
    }

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