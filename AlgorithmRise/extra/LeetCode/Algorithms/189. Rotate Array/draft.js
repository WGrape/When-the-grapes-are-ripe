/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let a1 = nums.slice(k+1), a2 = nums.slice(0, k+1);
    nums = a1.concat(a2);
    console.log(nums);
};