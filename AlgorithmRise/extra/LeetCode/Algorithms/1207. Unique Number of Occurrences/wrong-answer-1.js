/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let map = [], times = [];

    for(let num of arr){
        if(!map[num]){
            map[num] = 0;
        }
        ++map[num];
    }

    for(let n of map){
        if("undefined" === typeof n){
            continue;
        }
        if( "undefined" === typeof times[ n ] ){
            times[ n ] = 1;
            continue;
        }
        return false;
    }
    return true;
};

// 错误是因为我又犯了之前那次错误 ：负数不能作为数组的下标，所以需要把数组换成对象