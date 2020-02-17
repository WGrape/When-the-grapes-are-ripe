/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let length = nums.length;

    for( let left = 0, right = length - 1; left<=right;){

        if( nums[right] >= target || nums[left] + nums[right] > target ){
            --right;
        }else if( nums[left] + nums[right] < target ){
            ++left;
        }else{
            return [nums[left], nums[right]];
        }
    }

    return [];
};