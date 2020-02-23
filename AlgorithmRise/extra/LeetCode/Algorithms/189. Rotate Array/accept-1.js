/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let _nums = JSON.parse(JSON.stringify( nums )), length = _nums.length;
    for( let i = 0; i<=length-1; ++i ){
        nums[ (i+k)%length ] = _nums[i];
    }
};