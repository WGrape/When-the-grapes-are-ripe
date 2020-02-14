/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    
    let map = [], length = astr.length;
    for( let i = 0; i<=length-1; ++i ){

        if( !map[ astr[i] ] ){
            map[ astr[i] ] = 1;
            continue;
        }
        return false;
    }

    return true;
};