function sortNumber(a,b)
{
    return a - b
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  
    let _nums = JSON.parse(JSON.stringify(nums));
    let sorted_nums = nums.sort(sortNumber);

    // 解题思想: 一个输入的数组A, 一个排序后的数组B, 从输入数组中开始扫描, 
    // 起点: 数组A中第一个大于数组B中的元素
    // 终止: 数组A中最后一个小于数组B中的元素
    let start=-1, end=-1, find = false;
    for(let i = 0; i<=_nums.length-1; ++i){
        
        if(_nums[i] > sorted_nums[i] && start<0){
           
            find = true;
            start = i;
        }
        
        if(_nums[i] < sorted_nums[i]){
           
            find = true;
            end = i;   
        }
    }
    
    if(find){
        
        return end - start + 1;
    }else{
        
        return 0;
    }
   
};


