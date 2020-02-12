// 滑动窗口
var slideWindow = function(A, K, index, end){
    
    let i;
    for(i = index; i<=end; ++i){
        
        if(1 !== A[i]){
        
            if(K){
         
                --K;
            }else{
                
                break;
            }
        }
    }

    return i;
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    
    let length = A.length;
    
    let pr_left = 0, pr_right = 1, size = 0, max = 0;
    
    for(let i=0; i<=length-1; ++i){
        
        // 提前退出, 不再滑动
        if(length - i <= max){
            
            break;
        }
        
        pr_left = i; // 左指针
        pr_right = slideWindow(A, K, i, length-1);
        
        size = pr_right - pr_left;
        max = (size > max) ? size : max;
    }
    
    return max;
};