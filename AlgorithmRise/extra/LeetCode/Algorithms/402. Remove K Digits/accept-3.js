/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    if(k === num.length){
    
       return '0'; // 必须是字符串
    }

    let i = 1, pivot = -1, pivots = [], nums = num.split(''), length = nums.length;
    k = length - k;
    while(i <= k){
        
        // find pivot
        let min = 10;
        for(let j=pivot+1; j<=length-1 && (length-1-j) >= (k-i); ++j){
            
            // 当前数小于最小值且后续剩余个数多于k-i个
            if( nums[j] < min ){
                
                min = nums[j];
                pivot = j;
            }
            
            if(!min){
               break;
            }
        }
        
        if(10 == min){
           
            min = nums[ pivot+1 ];
            ++pivot;
        }
        
        if(0 != min ){
        
            pivots.push(min);
        }else if(pivots.length > 0){
            pivots.push(min);
        }
        
        ++i;
    }
    
    let result = pivots.join(''); // 必须是字符串
    return '' === result ? '0' : result;
};