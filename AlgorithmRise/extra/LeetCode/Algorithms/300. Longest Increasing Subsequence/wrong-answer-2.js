/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    let min = Number.MIN_VALUE; // 记录最小值
    let result = [], max_length = 0;

    for(let num of nums){

        // 遍历result依次删除比num小的
        for(let i = result.length-1; i>=0; --i){

            if(num <= result[i]){
                result.pop();
            }
        }

        result.push(num);
        max_length = Math.max(max_length, result.length);
    }

    return max_length;
};