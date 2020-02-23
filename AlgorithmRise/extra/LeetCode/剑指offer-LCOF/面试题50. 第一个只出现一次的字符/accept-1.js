/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    
    let map = {}, length = s.length;
    for( let i = 0; i<=length-1; ++i ){

        if(!map[ s[i] ]){
            map[ s[i] ] = 0;
        }
        ++map[ s[i] ];
    }

    for( let i = 0; i<=length-1; ++i ){

        if(map[ s[i] ] < 2){
            return s[i];
        }
    }

    return ' ';
};