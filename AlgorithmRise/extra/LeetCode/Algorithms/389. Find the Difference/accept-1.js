/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let len_s = s.length, len_t = t.length, len = (len_s > len_t) ? len_s : len_t, a_s = 0, a_t = 0;

    for( let i = 0 ; i<=len-1; ++i ){

        if( s[i] ){
            a_s += s[i].charCodeAt();
        }

        if( t[i] ){
            a_t += t[i].charCodeAt();
        }
    }

    return String.fromCharCode( a_t - a_s );

};