/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    nums.sort((a,b)=>a-b);
    let length = nums.length;
    for( let i = 1; i<=length-1; ++i ){

        if( nums[i] == nums[i-1] ){
            return true;
        }
    }

    return false;
};