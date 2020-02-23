/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    
    let str = '';
    for( let i = 0; i<=length-1; ++i ){

        str += ( ' ' == S[i] ? '%20' : S[i] );
    }

    return str;
};