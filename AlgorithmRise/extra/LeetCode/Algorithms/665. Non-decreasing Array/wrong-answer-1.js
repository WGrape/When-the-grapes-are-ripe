/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {

    let length = nums.length;

    let limit = 1;
    for(let i = length-2; i>=0; --i){
        if(nums[i] <= nums[i+1]){
            continue;
        }

        if(!limit){
            return false;
        }

        if(nums[i+1]-1 <= 0){
            return false;
        }

        nums[i] = nums[i+1]-1;
        --limit;
    }

    return true;
};