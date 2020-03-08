/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let length = s.length;

    // 二分
    let index = 0, end = length%2 ? (length>>1)-1 : (length>>1)-2;
    while( index <= end ){
        if( s[index] != s[ length-1-index ] ){
            
            return false;
        }
        ++index;
    }    

    return true;
};