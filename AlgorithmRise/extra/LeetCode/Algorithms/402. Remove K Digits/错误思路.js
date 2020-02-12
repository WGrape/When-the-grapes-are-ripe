/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    if(k === num.length){
    
       return 0;
    }

    // 使用这种方法, 没有考虑后续个数是否足够
    let i = 1, j, pivot = -1, pivots = [], nums = num.split(''), length = nums.length, k = length - k;
    while(i <= k){
        
        // find pivot
        let min = 10;
        for(j=pivot+1; j<=length-1; ++j){
            
            if( nums[j] < min || (length-1-j) <= (k-i) ){
                
                min = nums[j];
                pivot = j;
            }
        }
        
        pivots.push();
        
        ++i;
    }
    
};