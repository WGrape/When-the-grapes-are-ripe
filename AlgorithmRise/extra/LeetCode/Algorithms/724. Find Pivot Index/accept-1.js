/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let a = [], b = [], length = nums.length;

    for( let i = 0; i<=length-1; ++i ){

        if( 0 === i ){
            a[i] = 0;
        }else if( 1 === i ){
            a[i] = nums[0];
        }else{
            a[i] = a[i-1] + nums[i-1];
        }
    }

    let end = length-1;
    for( let i = end; i>=0; --i ){

        if( end === i ){
            b[i] = 0;
        }else if( end-1 === i ){
            b[i] = nums[end];
        }else{
            b[i] = b[i+1] + nums[i+1];
        }
    }

    for( let i =0; i<=length-1; ++i ){
        if( a[i] === b[i] ){
            return i;
        }
    }

    return -1;
};