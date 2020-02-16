/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {

    let map = [];
    for( let num of nums){

        if(!map[num]){
            map[num] = 1;
        }else{
            return num;
        }
    }

    return -1;
};