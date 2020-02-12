/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let count = 0, length = nums.length;
    for( let i=0; i<=length-1; ++i ){
        
        let num = nums[i];
        if( num > 9 && num < 100 ){
            ++count;
        }else if( num > 999 && num < 10000 ){
            ++count;
        }else if( 100000 === num ){
            ++count;
        }
    }
    
    return count;
};