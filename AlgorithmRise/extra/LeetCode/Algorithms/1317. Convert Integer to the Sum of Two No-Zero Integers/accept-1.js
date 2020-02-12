/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    let end = Math.floor(n/2);

    for( let i = 1; i<=end; ++i ){

        if( i.toString().indexOf('0') < 0 && (n-i).toString().indexOf('0') < 0 ){
            return [i, n-i];
        }
    }

    return [];
};