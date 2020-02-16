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

    let result = [];
    stack.map((num)=>{
        if( num ){
            result.push(num);
        }
    });

    return result;
};