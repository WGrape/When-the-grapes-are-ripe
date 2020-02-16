/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {

    let ascii_s1 = 0, ascii_s2 = 0, len1 = s1.length, len2 = s2.length, 
        len = len1 > len2 ? len1 : len2;

    for( let i = 0; i<=len-1; ++i ){
        let a = s1[i] ? s1[i].charCodeAt() : 0;
        let b = s2[i] ? s2[i].charCodeAt() : 0;
        ascii_s1 += a;
        ascii_s2 += b;
    }

    return ascii_s1 == ascii_s2;
};