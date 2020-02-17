/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let length = nums.length, map = {};

    for( let i = 0; i<=length-1; ++i ){

        let field = nums[i];
        if(!map[ field ]){
            map[field] = [];
        }
        map[field].push( field );
    }

    if( !(target %2) && "undefined" != typeof map[ target/2 ] && map[ target/2 ].length > 1 ){
        return [target/2, target/2];
    }
    
    for( let num of nums ){

        if( "undefined" != typeof map[ target-num ] ){
            return [ num, target-num ];
        }
    }

    return [];
};