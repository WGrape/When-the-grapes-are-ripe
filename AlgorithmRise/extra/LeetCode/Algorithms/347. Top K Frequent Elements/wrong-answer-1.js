/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    nums.sort((a,b)=>a-b);

    let length = nums.length, stack = [];
    for( let i = 0; i<=length-1; ++i ){

        if(!i || nums[i-1] != nums[i]){
            stack.push(nums[i]);
        }

        if( k == stack.length ){
            return stack;
        }
    }
};