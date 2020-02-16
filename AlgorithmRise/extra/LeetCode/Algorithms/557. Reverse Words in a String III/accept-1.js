/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    s = s.replace(/\s+/g, " ");
    let stack = [], arr = s.split(" ");

    for( let str of arr ){

        stack.push( str.split("").reverse().join("") );
    }

    return stack.join(" ");
};