/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    nums.sort((a, b) => a-b);
    console.log(nums);
    let length = nums.length;

    for( let left = 0, right = length - 1; left<=right;){

        if( nums[right] >= target || nums[left] + nums[right] > target ){
            --right;
        }else if( nums[left] + nums[right] < target ){
            ++left;
        }else{
            return [left, right];
        }
    }

    return [];
};

// 不能先排序啊，排序后顺序就变了，这题和 【面试题57. 和为s的两个数字】不一样