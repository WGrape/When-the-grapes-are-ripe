/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let length = nums.length, map = [];
    for( let i = 0; i<=length-1; ++i ){
        map[ nums[i] ] = i;
    }

    for( let i = 0; i<=length-1; ++i ){
        if( typeof map[ target - nums[i] ] != undefined ){
            return [ i, map[ target - nums[i] ] ];
        }
    }


};