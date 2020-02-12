/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let rank = 1, length = nums.length; // 当前的排名

    nums.sort((a,b) => b-a);

    for( let i = 1; i<=length-1; ++i ){

        if( nums[i] !== nums[i-1] ){
            ++rank;
        }

        if( rank === 3 ){
            return nums[i];
        }
    }

    return nums[0];
};