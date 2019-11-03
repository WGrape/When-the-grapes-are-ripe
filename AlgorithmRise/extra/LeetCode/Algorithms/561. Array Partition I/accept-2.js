/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    // 升序排序
    nums.sort(function(a,b){ return a - b }) ; 
    
    var sum=0, i=0, len = nums.length;
    while(i<=len-2){
        
        sum += nums[i];
        i+=2;
    }
    
    return sum;
};