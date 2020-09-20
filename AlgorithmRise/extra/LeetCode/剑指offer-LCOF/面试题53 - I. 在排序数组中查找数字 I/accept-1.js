/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let hash = [];
    for( let num of nums ){

        if( !hash[num] ){
            hash[num] = 0;
        }
        ++hash[num];
    }

    return hash[target] ? hash[target] : 0;
};