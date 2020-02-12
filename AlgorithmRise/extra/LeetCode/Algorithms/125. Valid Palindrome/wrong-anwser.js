/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let length = s.length, stack = [];
    for( let i=0; i<=length-1; ++i ){

        if( s[i] >= 'a' && s[i] <= 'z' ){
            stack.push(s[i]);
        }else if( s[i] >= 'A' && s[i] <= 'Z' ){
            stack.push(s[i]);
        }
    }

    length = stack.length;

    // 被0P坑了的举个爪 !!!!
    for( let i=0; i<=length-1; ++i ){

        if( stack[i].toLowerCase() !== stack[length-1-i].toLowerCase() ){
            return false;
        }
    }

    return true;
};