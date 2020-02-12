/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    
    let output = [], length = nums.length;
    
    for( let i=0; i<=length-2; i+=2 ){
        
        for( let times = nums[i]; times >= 1; --times ){
            output.push( nums[i+1] );
        }
    }
    
    return output;
};