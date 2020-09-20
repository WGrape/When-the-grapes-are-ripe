/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let hash = {};
    for(let i = 0; i<=nums.length-1; ++i){

        let num = nums[i];
        if(!hash[num]){
            hash[num] = [];
        }
        hash[num].push(i);
    }

    let props = Object.getOwnPropertyNames(hash);
    for( let prop of props ){

        for( let i = 1; i<=hash[prop].length-1; ++i ){

            if( hash[prop][i] - hash[prop][i-1] <= k ){
                return true;
            }
        }
    }

    return false;
};