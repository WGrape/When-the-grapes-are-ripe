/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map = [], times = nums.length/2;
    for( let num of nums ){

        if( !map[num] ){
            map[num] = 0;
        }

        ++map[num];
        if( map[num] > times ){
            return num;
        }
    }
};