/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let length = nums.length, map = {};

    for( let i = 0, j = length-1; i<=j; ++i, --j ){

        let field = nums[i];
        if(!map[ field ]){
            map[field] = [];
        }
        map[field].push( i );

        field = nums[j];
        if(!map[ field ]){
            map[field] = [];
        }
        map[field].push( j );

        let num = nums[i];
        if( !(target %2) && "undefined" != typeof map[ target/2 ] && map[ target/2 ].length > 1 ){
            console.log(map);
            return [target/2, target/2];
        }

        if( "undefined" != typeof map[ target-num ] && i != map[target-num][0] ){
            return [ num, target-num ];
        }

        num = nums[j];
        if( !(target %2) && "undefined" != typeof map[ target/2 ] && map[ target/2 ].length > 1 ){
            console.log(map);
            return [target/2, target/2];
        }

        if( "undefined" != typeof map[ target-num ] && j != map[target-num][0] ){
            return [ num, target-num ];
        }
    }
    
    return [];
};