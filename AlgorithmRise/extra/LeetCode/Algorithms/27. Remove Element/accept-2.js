/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let length = nums.length, temp, i, j;
    for(i=0; i<=length-1; ++i){
        
        if(val !== nums[i]){
            continue;
        }
        
        for(j=i+1; j<=length-1; ++j){
            
            if(val !== nums[j]){
                break;
            }
        }
        
        if(length === j){
            return i;
        }
        
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
    
    return i;
};