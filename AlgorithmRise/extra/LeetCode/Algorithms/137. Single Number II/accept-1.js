/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let length = nums.length;
    nums.sort((a,b) => a-b);

    let continues = 1, pre_val = nums[0];
    for(let i = 1; i<=length-1; ++i){

        if( nums[i-1] == nums[i] ){
            ++continues;
        }else{

            if(1 == continues){
                break;
            }

            continues = 1;
        }

        pre_val = nums[i];
    }

    return pre_val;
};