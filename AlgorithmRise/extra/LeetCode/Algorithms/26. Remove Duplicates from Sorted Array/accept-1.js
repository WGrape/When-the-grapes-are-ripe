/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i, length = nums.length, index = 0, repeat = 0;

    for( i = 1; i<= length-1; ++i ){

        let pre = nums[i-1], cur = nums[i];
        if(pre !== cur){
            
            repeat = 0;
            if( index ){
                nums[index] = cur;
                ++index;
            }
            continue;
        }

        ++repeat;
        if(1 === repeat && !index){

            index = i;
        }
    }

    return index ? index : i;
};