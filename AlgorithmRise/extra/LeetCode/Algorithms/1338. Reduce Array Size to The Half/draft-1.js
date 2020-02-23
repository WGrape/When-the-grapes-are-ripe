/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {

    let map = [], count = 0, length = arr.length;
    for( let num of arr ){

        ++count;

        if( !map[num] ){
            map[num] = 0;
        }
        ++map[num];

        if( count >= (length/2) ){
            
        }

    }   
};


