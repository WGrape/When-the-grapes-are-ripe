/**
 * @param {number[]} A
 * @return {number}
 */

 // 就是求最大值的下标
var peakIndexInMountainArray = function(A) {
    
    var max = -99, returnVal=0;
    
    A.forEach((num, index)=>{
        
        if( num > max ){
            
            max = num;
            returnVal = index;
        }
    });
    
    return returnVal;
};