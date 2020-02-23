/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {

    arr.sort( (a,b) => a-b );
    let set = [arr[0]], count = 1, length = arr.length;
    for( let i =1; i<=length-1; ++i ){
        if(count > length/2){
            break;
        }

        ++count;
        if( arr[i] != arr[i-1] ){
            set.push( arr[i] );
        }
    }
    
    return set.length;
};


