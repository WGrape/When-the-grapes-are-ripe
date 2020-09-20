/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    let min = Number.MIN_VALUE; // 记录最小值
    let result = [ [nums[0]] ], max_length = 0;

    let first = true;
    for(let num of nums){

        if(first){
            first = false;
            continue;
        }

        // 遍历result依次删除比num小的
        for(let i = 0; i<=result.length-1; ++i){

            let stack = [], find = false;
            for(let j = result[i].length-1; j>=0; --j){

                if(num <= result[i][j]){
                    find = true;
                    if(!stack.length){
                        stack = Object.assign([], result[i]);
                    }
                    stack.pop();
                }
            }
            if(find){
                stack.push(num);
                result.push(stack);
            }
            max_length = Math.max(max_length, stack.length);
        }
    }

    return max_length;
};