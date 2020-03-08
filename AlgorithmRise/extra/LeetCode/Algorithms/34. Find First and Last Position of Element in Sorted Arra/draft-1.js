var findFirstLast = function(i){
    return i;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    // 二分查找
    let length = nums.length, right = length-1, left = right>>2;
    while(left <= right){

        if(target == nums[left]){
            return findFirstLast(left);
        }else if(target < nums[left]){
            right = left;
            left = 0;
        }else{
            left = (right-left)>>2;
        }

        if(left == right){
            return [-1, -1];
        }
    }
};