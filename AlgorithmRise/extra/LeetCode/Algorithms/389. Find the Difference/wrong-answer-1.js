/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let length = t.length;
    for( let i =length-1; i>=0; --i ){
        if( s.indexOf( t[i] ) < 0 ){
            return t[i];
        }
    }

    return t[0];
};

// 这题错误是因为我没有理解题的意思
