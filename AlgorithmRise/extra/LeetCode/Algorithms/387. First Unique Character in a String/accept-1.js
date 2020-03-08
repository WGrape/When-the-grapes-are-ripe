/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let length = s.length, hash = {};
    for( let i = 0; i<=length-1; ++i ){

        let substr = s.slice(i+1);
        if( !hash[ s[i] ] && substr.indexOf(s[i]) < 0 ){
            return i;
        }
        hash[ s[i] ] = 1;
    }
    return -1;
};