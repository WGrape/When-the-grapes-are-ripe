/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {

    let arr = [0,1,3,5,7];
    if(k<=4){
        return arr[k];
    }
    for( let i = 5; i<=k; ++i ){
        arr.push( arr[i-3]*3 );
    }
    return arr[k];
};