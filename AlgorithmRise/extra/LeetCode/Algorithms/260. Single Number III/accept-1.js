/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {

    let hash = {};
    for( let num of nums ){

        if(!hash[ num ]){
            hash[ num ] = 0;
        }
        ++hash[ num ];
    }

    let props = Object.getOwnPropertyNames(hash), result = [];
    for(let i = 0; i<=props.length-1; ++i){

        let prop = props[i];
        if(1 == hash[ prop ]){
            result.push(prop);
        }
    }

    return result;
};