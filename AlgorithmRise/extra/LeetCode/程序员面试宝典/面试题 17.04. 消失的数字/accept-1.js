/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);

    let length = nums.length;
    for( let i = 0; i<=length-1; ++i ){
        if(i != nums[i]){
            return i;
        }
    }
    
    return length;
};