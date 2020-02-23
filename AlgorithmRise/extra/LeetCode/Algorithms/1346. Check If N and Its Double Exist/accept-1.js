/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    let map = {};
    for( let num of arr ){
        if(!map[num]){
            map[num] = 0;
        }
        ++map[num];

        if(0 == num && map[ num ]<=1){
            continue;
        }

        if(0 == num && map[ num ] > 1){
            return true;
        }


        if( 0 == num%2 && map[ num/2 ] ){
            return true;
        }

        if( map[ num*2 ] ){
            return true;
        }
    }

    return false;
};