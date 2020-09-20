/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

    if(!nums.length){
        return 0;
    }
    
    let max = 1, sequence = 1;
    for(let i = 1; i<=nums.length-1; ++i){

        if( nums[i] > nums[i-1] ){
            ++sequence;
        }else{
            sequence = 1;
        }
        max = Math.max(max, sequence);
    }

    return max;
};