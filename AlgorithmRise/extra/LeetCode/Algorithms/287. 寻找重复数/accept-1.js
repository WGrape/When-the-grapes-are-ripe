/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let hash = [];
    for( let num of nums ){

        if( !hash[num] ){
            hash[num] = 0;
        }
        ++hash[num];
        if( hash[num] > 1 ){
            return num;
        }
    }
};