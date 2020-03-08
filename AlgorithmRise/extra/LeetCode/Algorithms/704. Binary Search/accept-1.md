/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let length = nums.length, left = (length-1)>>1, right = length-1;
    while(left <= right && left >= 0){

        if(left == right){
            return target == nums[left] ? left : -1;
        }

        if(target == nums[left]){
            return left;
        }
        else if(target > nums[left]){
            let step = (right-left)>>1;
            if(step < 1){
                step = 1;
            }
            left += step;
        }else{
            right = left;
            left >>= 1;
        }
    }

    return -1;
};