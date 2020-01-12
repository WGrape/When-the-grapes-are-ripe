/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let map = [], sum = 0, sum_duplication = 0;
    for(let index of nums){
        
        // 计算所有元素的和
        sum += index;
        
        if(!map[index]){
            map[index] = 1;
        }else{
            
            // 计算重复元素的和
            sum_duplication += (index*2);
        }
    }
    
    // 如果没有一个重复的元素, 则直接返回第一个元素
    if(!sum_duplication){
        
        return nums[0];
    }

    // 所有元素的和 - 重复元素的和 = 出现一次的数
    // 2*(a+b+c) - (a+a+b+b+c) = c
    return sum - sum_duplication;
};
