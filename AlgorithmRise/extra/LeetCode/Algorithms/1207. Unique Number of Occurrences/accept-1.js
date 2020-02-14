/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let map = {}, times = [];

    for(let num of arr){
        if(!map[num]){
            map[num] = 0;
        }
        ++map[num];
    }

    for(let pro in map){
        
        if( !map.hasOwnProperty(pro) ){
            continue;
        }

        n = map[pro];

        if( !times[ n ] ){
            times[ n ] = 1;
            continue;
        }
        return false;
    }
    return true;
};