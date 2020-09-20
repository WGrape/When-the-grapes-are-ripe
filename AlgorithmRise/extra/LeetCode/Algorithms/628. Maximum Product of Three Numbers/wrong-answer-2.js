/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {

    nums.sort((a,b)=>a-b);

    let length = nums.length;

    if(!nums[length-1] || !nums[length-2] || !nums[length-3]){
        return 0;
    }

    if(nums[length-1] > 0 && nums[length-2] > 0 && nums[length-3] > 0){
        return nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3];
    }

    if(nums[length-1] > 0  && nums[length-2] < 0){
        return nums[length-1] * nums[0] * nums[1];
    }

    if(nums[length-1] < 0){
        return nums[0] * nums[1] * nums[2];
    }
    
};