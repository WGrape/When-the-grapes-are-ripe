/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let length = nums.length;
    nums.sort((a,b) => a-b);

    if(!length){
        return [];
    }

    let result = [], stack = [], step = nums[0];
    for(let i = 0; i<=length-1;){
        if(nums[i] != step){

            if(1 == stack.length){
                result.push(stack[0].toString());
            }else{
                result.push( stack[0] + "->" + stack[stack.length-1] );
            }
            stack = [];
            step = nums[i];
            continue;
        }
        stack.push(nums[i]);
        ++step;
        ++i;
    }

    if(1 == stack.length){
        result.push(stack[0].toString());
    }else{
        result.push( stack[0] + "->" + stack[stack.length-1] );
    }

    return result;
};