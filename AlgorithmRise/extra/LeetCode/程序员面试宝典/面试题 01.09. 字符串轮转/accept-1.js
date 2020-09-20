/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    let ascii_s1 = 0;
    for(let c of s1){
        ascii_s1 += c.charCodeAt();
    }

    let ascii_s2 = 0;
    for(let c of s2){
        ascii_s2 += c.charCodeAt();
    }

    return s1.length == s2.length && ascii_s1 == ascii_s2;
};