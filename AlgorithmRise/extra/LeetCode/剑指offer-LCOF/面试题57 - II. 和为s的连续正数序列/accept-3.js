/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    
    let probe = index = (target>>1)+1, sum = 0;

    let stack = [], result = [];
    while(probe >=1 ){

        // 探针递推
        if( sum + probe < target ){
            sum += probe;
            stack.unshift(probe);
            --probe;
        }else if( target == sum + probe && stack.length){
            stack.unshift(probe);
            result.unshift(stack);
            stack = [];
            sum = 0;
            probe = index = index-1;
        }else{
            probe = index = index-1;
            stack = [];
            sum = 0;
        }
    }

    return result;
};