/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let max = nums[0], index = false, length = nums.length;

    for(let i =1; i<=length-1; ++i){
        if( nums[i] > max ){
            max = nums[i];
            index = i;
        }
    }

    for( let i = 0; i<=length-1; ++i ){
        
        if( nums[i] != max && max < (2*nums[i]) ){
            return -1;
        }
    }

    return index;
};