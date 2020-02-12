/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let count = 0, length = nums.length;
    for( let i=0; i<=length-1; ++i ){
        
        let num = nums[i].toString();
        if( 0 === num.length % 2 ){
            
            ++count;
        }
    }
    
    return count;
};