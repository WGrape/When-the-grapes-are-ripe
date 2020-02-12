/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let length = nums.length, map = {};
    for( let i = 0; i<=length-1; ++i ){

        let field = nums[i]; 
        if( typeof map[field] != 'undefined' ){

            map[field] = [ map[field], i ];
        }else{
            map[ field ] = i;
        }
    }

    if( 0 === target % 2 ){

        if( map[ target/2 ] && map[ target/2 ].length>1 ){
            return map[ target/2 ].slice(0,2);
        }
    }

    for( let i = 0; i<=length-1; ++i ){
        
        if( typeof map[ target - nums[i] ] != 'undefined' && i != map[ target - nums[i] ] ){
            return [ i, map[ target - nums[i] ] ];
        }
    }
};