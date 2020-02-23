var arrSum = function(nums, i, j){

    let sum = 0;
    while(i<=j){

        sum += nums[i];
        ++i;
    }

    return sum;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let index = end = 0, max = Infinity, length = nums.length;
    for( let i = 0; i<=length-1; ++i ){

        if(!i){
            max = nums[i];
            continue;
        }

        let sum = arrSum(nums, index, i);
        if( sum >  max ){
            end = i;
            max = sum;
        }

        if(max < nums[i]){
            max = nums[i];
            index = end = i;
        }
    }
    
    return max;
};