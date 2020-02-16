/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    let length = nums.length, stack = Object.keys(new Int8Array(length)).map(Number);
    stack.push(length);
    for( let i = 0; i<=length-1; ++i ){

        let index = nums[i];
        stack[index] = 0;
    }

    for( let i = 0; i<=length; ++i ){
        if( stack[i] ){
            stack.push(stack[i]);
        }
    }

    return stack.slice(length+1);
};