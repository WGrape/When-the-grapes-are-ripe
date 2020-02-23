/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let stack = [], map = {}, length = nums.length;
    for( let i = 0; i<=length-1; ++i ){

        let num = nums[i];

        if( !map[ i ] ){
            map[ i ] = [];
        }

        map[ i ].push( num );
        for( let j = i-1; j>=0; --j ){
            map[ j ].push( num );
        }
    }

    return stack;
};