/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let sum = 0, max = Number.NEGATIVE_INFINITY;

    for(let num of nums){

        if(sum + num >= num){
            sum += num;
        }else{
            sum = num;
        }

        max = Math.max(max, sum);
    }

    return max;
};